import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import api from "@/lib/apiClient";
import { maskCPF, maskPhone } from "@/lib/masks";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, CheckCircle2, ChevronsUpDown, Download, Droplets, Loader2, MapPin } from "lucide-react";
import QRCode from "qrcode";
import { useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useParams } from "wouter";
import { z } from "zod";

// Slug padrão do evento fixo de batismo (pode ser sobrescrito pela rota /batismo/:slug).
const DEFAULT_SLUG = import.meta.env.VITE_BAPTISM_EVENT_SLUG || "batismo";

// Acima deste número de opções, um campo vira busca (combobox) em vez de lista.
const COMBOBOX_THRESHOLD = 8;

interface FormFieldDef {
  fieldName: string;
  fieldLabel: string;
  fieldType: string;
  isRequired?: boolean;
  placeholder?: string | null;
  options?: unknown;
  section?: string | null;
  order?: number | null;
}

interface BatchDef {
  id: string;
  name?: string;
  isActive?: boolean;
  startDate?: string | null;
  endDate?: string | null;
}

interface EventDef {
  id: string;
  title?: string;
  slug?: string;
  description?: string;
  isActive?: boolean;
  imageUrl?: string | null;
  location?: string | null;
  neighborhood?: string | null;
  city?: string | null;
}

type Option = { value: string; label: string };

// ── helpers ──────────────────────────────────────────────────────────────────

const normalizeOptions = (options: unknown): Option[] => {
  if (!Array.isArray(options)) return [];
  return options
    .map((opt) => {
      if (typeof opt === "string") return { value: opt, label: opt };
      if (opt && typeof opt === "object") {
        const o = opt as Record<string, unknown>;
        const value = String(o.value ?? o.label ?? "");
        const label = String(o.label ?? o.value ?? "");
        return value ? { value, label } : null;
      }
      return null;
    })
    .filter((o): o is Option => Boolean(o));
};

const isOpenBatch = (batch: BatchDef, now: number): boolean => {
  if (batch.isActive === false) return false;
  if (batch.startDate && new Date(batch.startDate).getTime() > now) return false;
  if (batch.endDate && new Date(batch.endDate).getTime() < now) return false;
  return true;
};

const sortByOrder = (a: FormFieldDef, b: FormFieldDef) => (a.order ?? 0) - (b.order ?? 0);

// Checkbox simples de aceite → sem opções e tipo checkbox.
const isAcceptanceCheckbox = (field: FormFieldDef) =>
  field.fieldType === "checkbox" && normalizeOptions(field.options).length === 0;

// Remove tags HTML da descrição (vem de um editor rich-text) e retorna texto limpo.
const htmlToText = (html?: string | null): string =>
  (html || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

// Campos que ocupam a linha inteira no grid do formulário.
const isFullWidthField = (field: FormFieldDef): boolean => {
  if (isAcceptanceCheckbox(field)) return true;
  if (field.fieldType === "textarea") return true;
  if (field.fieldType === "radio") return true;
  if (normalizeOptions(field.options).length > COMBOBOX_THRESHOLD) return true;
  if (/endereco|address|nome_completo/i.test(field.fieldName)) return true;
  return false;
};

const isEmailField = (f: FormFieldDef) => f.fieldType === "email" || /email/i.test(f.fieldName);

// O e-mail só existe na seção "comprador". Como não pedimos dados do comprador,
// incorporamos esse e-mail ao cadastro do inscrito (serve de contato e de buyer_email).
const buildAttendeeFields = (
  attendee: FormFieldDef[],
  buyer: FormFieldDef[]
): FormFieldDef[] => {
  if (attendee.some(isEmailField)) return attendee;
  const buyerEmail = buyer.find(isEmailField);
  if (!buyerEmail) return attendee;
  const emailField: FormFieldDef = {
    fieldName: "email",
    fieldLabel: "E-mail",
    fieldType: "email",
    isRequired: buyerEmail.isRequired ?? true,
    placeholder: "seu@email.com",
    section: "attendee",
    order: 0,
  };
  const nameIdx = attendee.findIndex((f) => /nome|name/i.test(f.fieldName));
  const merged = attendee.slice();
  merged.splice(nameIdx >= 0 ? nameIdx + 1 : 0, 0, emailField);
  return merged;
};

// Evento gratuito: não pedimos dados do comprador. Derivamos o buyerData exigido
// pela API a partir dos próprios dados do inscrito (nome, e-mail, documento, contato).
const deriveBuyerData = (
  buyerFields: FormFieldDef[],
  attendeeFields: FormFieldDef[],
  values: Record<string, unknown>
): Record<string, unknown> => {
  const out: Record<string, unknown> = {};
  const find = (re: RegExp, type?: string) =>
    attendeeFields.find((f) => (type && f.fieldType === type) || re.test(f.fieldName));
  for (const bf of buyerFields) {
    const name = bf.fieldName.toLowerCase();
    let src: FormFieldDef | undefined;
    if (bf.fieldType === "cpf" || /document|cpf|cnpj/.test(name)) src = find(/cpf|document/, "cpf");
    else if (bf.fieldType === "email" || /email/.test(name)) src = find(/email/, "email");
    else if (bf.fieldType === "phone" || /whats|telefone|phone|celular/.test(name))
      src = find(/whats|telefone|phone|celular/, "phone");
    else if (/name|nome/.test(name)) src = find(/nome|name/);
    out[bf.fieldName] = src ? values[src.fieldName] ?? "" : "";
  }
  return out;
};

// Monta o schema zod dinamicamente a partir dos campos do formulário do evento.
const buildSchema = (fields: FormFieldDef[]) => {
  const shape: Record<string, z.ZodTypeAny> = {};
  for (const field of fields) {
    const required = Boolean(field.isRequired);
    if (isAcceptanceCheckbox(field)) {
      shape[field.fieldName] = required
        ? z.boolean().refine((v) => v === true, { message: "Campo obrigatório" })
        : z.boolean().optional();
      continue;
    }
    let base = z.string();
    if (field.fieldType === "email") base = base.email("E-mail inválido");
    shape[field.fieldName] = required ? base.min(1, "Campo obrigatório") : base.optional();
  }
  return z.object(shape);
};

const loadImage = (src: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Falha ao carregar o QR Code."));
    img.src = src;
  });

// Gera um comprovante em imagem (PNG) com o QR Code + dados da inscrição.
const generateTicketDataUrl = async (opts: {
  title: string;
  nome: string;
  orderCode: string;
  qr: string;
}): Promise<string> => {
  const { title, nome, orderCode, qr } = opts;
  if (document.fonts?.ready) {
    try {
      await document.fonts.ready;
    } catch {
      /* segue com fonte de fallback */
    }
  }

  const scale = 2;
  const W = 600;
  const H = 840;
  const PAD = 40;
  const BLUE = "#2e4ba6";
  const DARK = "#1f2733";
  const GRAY = "#6b7483";

  const canvas = document.createElement("canvas");
  canvas.width = W * scale;
  canvas.height = H * scale;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Não foi possível gerar a imagem.");
  ctx.scale(scale, scale);
  ctx.textAlign = "center";

  // Fundo
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, W, H);

  // Faixa superior
  ctx.fillStyle = BLUE;
  ctx.fillRect(0, 0, W, 96);
  ctx.fillStyle = "#ffffff";
  ctx.font = "700 30px Montserrat, Arial, sans-serif";
  ctx.fillText((title || "BATISMO").toUpperCase(), W / 2, 58, W - 2 * PAD);

  // Subtítulo
  ctx.fillStyle = GRAY;
  ctx.font = "700 13px Lato, Arial, sans-serif";
  ctx.fillText("COMPROVANTE DE INSCRIÇÃO", W / 2, 136);

  // Nome do inscrito
  let qrY = 196;
  if (nome) {
    ctx.fillStyle = DARK;
    ctx.font = "700 22px Montserrat, Arial, sans-serif";
    ctx.fillText(nome, W / 2, 178, W - 2 * PAD);
    qrY = 214;
  }

  // QR Code
  const qrImg = await loadImage(qr);
  const qrSize = 300;
  ctx.drawImage(qrImg, (W - qrSize) / 2, qrY, qrSize, qrSize);

  // Código
  const codeY = qrY + qrSize + 56;
  ctx.fillStyle = GRAY;
  ctx.font = "700 12px Lato, Arial, sans-serif";
  ctx.fillText("CÓDIGO", W / 2, codeY - 26);
  ctx.fillStyle = DARK;
  ctx.font = "700 26px 'Courier New', monospace";
  ctx.fillText(orderCode, W / 2, codeY);

  // Rodapé
  ctx.fillStyle = GRAY;
  ctx.font = "400 13px Lato, Arial, sans-serif";
  ctx.fillText("Apresente este QR Code no dia do batismo", W / 2, codeY + 48);
  ctx.fillText("para confirmar sua presença.", W / 2, codeY + 68);

  return canvas.toDataURL("image/png");
};

// ── página ─────────────────────────────────────────────────────────────────

export default function Batismo() {
  const params = useParams();
  const slug = (params as Record<string, string>).slug || DEFAULT_SLUG;

  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [event, setEvent] = useState<EventDef | null>(null);
  const [fields, setFields] = useState<FormFieldDef[]>([]);
  const [buyerFields, setBuyerFields] = useState<FormFieldDef[]>([]);
  const [openBatch, setOpenBatch] = useState<BatchDef | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      setLoading(true);
      setLoadError("");
      try {
        const eventResp = await api.get(`/api/public/events/by-slug/${encodeURIComponent(slug)}`);
        const ev: EventDef = eventResp.data;
        if (!ev?.id) throw new Error("Evento de batismo não encontrado.");

        const [batchesResp, fieldsResp] = await Promise.all([
          api.get(`/api/public/events/${ev.id}/batches`),
          api.get(`/api/public/events/${ev.id}/form-fields`),
        ]);

        const batches: BatchDef[] = Array.isArray(batchesResp.data) ? batchesResp.data : [];
        const now = Date.now();
        const aberto = batches.find((b) => isOpenBatch(b, now)) || null;

        const allFields: FormFieldDef[] = Array.isArray(fieldsResp.data) ? fieldsResp.data : [];

        // Evento gratuito: escondemos a seção "comprador" (duplicada). Mostramos só os
        // campos do inscrito; o buyerData é derivado desses dados na hora de enviar.
        const buyer = allFields.filter((f) => f.section === "buyer");
        const seen = new Set<string>();
        const attendee = allFields
          .filter((f) => f.section !== "buyer")
          .slice()
          .sort(sortByOrder)
          .filter((f) => {
            if (!f.fieldName || seen.has(f.fieldName)) return false;
            seen.add(f.fieldName);
            return true;
          });

        if (!active) return;
        setEvent(ev);
        setFields(buildAttendeeFields(attendee, buyer));
        setBuyerFields(buyer);
        setOpenBatch(aberto);
      } catch (err) {
        if (!active) return;
        const message =
          (err as { response?: { data?: { message?: string } } })?.response?.data?.message ||
          (err instanceof Error ? err.message : "Erro ao carregar o batismo.");
        setLoadError(message);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [slug]);

  return (
    <div className="min-h-dvh bg-gradient-to-b from-background via-background to-primary/5">
      <main className="container max-w-6xl py-6 md:py-10">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-28 gap-3">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">Carregando inscrição...</p>
          </div>
        ) : loadError ? (
          <Card className="mx-auto max-w-lg p-8 text-center animate-fade-in">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
              <Droplets className="h-6 w-6 text-destructive" />
            </div>
            <p className="font-semibold text-foreground mb-1">Não foi possível abrir o batismo</p>
            <p className="text-sm text-muted-foreground">{loadError}</p>
          </Card>
        ) : event ? (
          <div className="grid items-start gap-6 animate-fade-in-up lg:grid-cols-5 lg:gap-8">
            <aside className="space-y-4 lg:col-span-2 lg:sticky lg:top-6">
              <EventHero event={event} />
              <EventInfoCard event={event} />
            </aside>
            <div className="lg:col-span-3">
              {!openBatch ? (
                <Card className="p-8 text-center">
                  <p className="font-semibold text-foreground mb-1">Inscrições fechadas</p>
                  <p className="text-sm text-muted-foreground">
                    No momento não há período de inscrição aberto para o batismo. Volte quando a
                    inscrição estiver disponível.
                  </p>
                </Card>
              ) : (
                <BaptismForm
                  event={event}
                  fields={fields}
                  buyerFields={buyerFields}
                  batch={openBatch}
                />
              )}
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
}

// ── capa / hero do evento ─────────────────────────────────────────────────────

function EventHero({ event }: { event: EventDef }) {
  const title = (event.title || "Batismo").trim();
  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
      <div className="relative aspect-[16/10] w-full bg-gradient-to-br from-primary to-primary/70">
        {event.imageUrl ? (
          <img
            src={event.imageUrl}
            alt={`Capa do evento ${title}`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Droplets className="h-24 w-24 text-primary-foreground/25" />
          </div>
        )}
        {/* Overlay para legibilidade do texto sobre a imagem */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-5">
          <h1 className="text-2xl font-bold tracking-tight text-white drop-shadow-sm sm:text-3xl">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}

function EventInfoCard({ event }: { event: EventDef }) {
  // Descrição vem como HTML (editor rich-text) — preservamos a formatação.
  const hasDescription = htmlToText(event.description).length > 0;
  const place = (event.location || "").trim();
  const region = [event.neighborhood, event.city].map((s) => (s || "").trim()).filter(Boolean).join(", ");
  const hasPlace = Boolean(place || region);

  if (!hasDescription && !hasPlace) return null;

  return (
    <Card className="p-5">
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        Informações
      </h2>
      <div className="space-y-4">
        {hasPlace ? (
          <div className="flex gap-3">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Local</p>
              {place ? <p className="text-sm font-medium text-foreground">{place}</p> : null}
              {region ? <p className="text-sm text-muted-foreground">{region}</p> : null}
            </div>
          </div>
        ) : null}

        {hasDescription ? (
          <div
            className="prose prose-sm max-w-none border-t border-border pt-4 text-muted-foreground dark:prose-invert prose-headings:text-foreground prose-strong:text-foreground prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: event.description || "" }}
          />
        ) : null}
      </div>
    </Card>
  );
}

// ── formulário ────────────────────────────────────────────────────────────────

function BaptismForm({
  event,
  fields,
  buyerFields,
  batch,
}: {
  event: EventDef;
  fields: FormFieldDef[];
  buyerFields: FormFieldDef[];
  batch: BatchDef;
}) {
  const schema = useMemo(() => buildSchema(fields), [fields]);
  const defaultValues = useMemo(() => {
    const dv: Record<string, unknown> = {};
    for (const f of fields) {
      dv[f.fieldName] = isAcceptanceCheckbox(f) ? false : "";
    }
    return dv;
  }, [fields]);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema), defaultValues });

  const [success, setSuccess] = useState<{ orderCode: string; qr: string; nome: string } | null>(
    null
  );
  const [downloading, setDownloading] = useState(false);

  const onSubmit = async (values: Record<string, unknown>) => {
    try {
      const data = { ...values };
      // buyerData derivado dos dados do inscrito (evento gratuito, sem comprador).
      const buyerData = { ...data, ...deriveBuyerData(buyerFields, fields, values) };
      const payload = {
        eventId: event.id,
        quantity: 1,
        buyerData,
        attendeesData: [{ batchId: batch.id, data }],
      };
      const resp = await api.post("/api/public/events/register", payload);
      const orderCode: string = resp.data?.orderCode || resp.data?.registration?.orderCode || "";
      if (!orderCode) throw new Error("Inscrição criada, mas sem código de confirmação.");

      const qr = await QRCode.toDataURL(JSON.stringify({ orderCode, eventId: event.id }), {
        margin: 1,
        width: 320,
      });
      const nameField = fields.find((f) => /nome|name/i.test(f.fieldName));
      const nome = nameField ? String(values[nameField.fieldName] ?? "").trim() : "";
      setSuccess({ orderCode, qr, nome });
    } catch (err) {
      const message =
        (err as { response?: { data?: { message?: string } } })?.response?.data?.message ||
        (err instanceof Error ? err.message : "Erro ao enviar a inscrição.");
      toast.error(message);
    }
  };

  const handleDownload = async () => {
    if (!success) return;
    setDownloading(true);
    try {
      const dataUrl = await generateTicketDataUrl({
        title: event.title || "Batismo",
        nome: success.nome,
        orderCode: success.orderCode,
        qr: success.qr,
      });
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `inscricao-batismo-${success.orderCode}.png`;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Não foi possível baixar o comprovante.");
    } finally {
      setDownloading(false);
    }
  };

  if (success) {
    return (
      <Card className="p-6 text-center md:p-8 animate-fade-in">
        <div className="flex flex-col items-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
            <CheckCircle2 className="h-9 w-9 text-success" />
          </div>
          <h2 className="text-xl font-bold text-foreground">Inscrição confirmada!</h2>
          <p className="max-w-sm text-sm text-muted-foreground">
            Apresente este QR Code no dia do batismo para confirmar sua presença.
          </p>
          <img
            src={success.qr}
            alt="QR Code da inscrição"
            className="h-56 w-56 rounded-2xl border border-border bg-white p-3 shadow-sm"
          />
          <div className="rounded-xl bg-muted px-4 py-2.5">
            <p className="text-sm text-foreground">
              Código:{" "}
              <span className="font-mono font-semibold tracking-wide">{success.orderCode}</span>
            </p>
          </div>
          <Button
            type="button"
            size="lg"
            className="mt-1 w-full gap-2 sm:w-auto"
            onClick={handleDownload}
            disabled={downloading}
          >
            {downloading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Gerando imagem...
              </>
            ) : (
              <>
                <Download className="h-4 w-4" />
                Baixar comprovante
              </>
            )}
          </Button>
          <p className="text-xs text-muted-foreground">
            Baixe o comprovante com o QR Code ou tire um print desta tela.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-5 shadow-sm md:p-8">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">Faça sua inscrição</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Preencha seus dados para participar do batismo.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
          {fields.map((field) => (
            <div
              key={field.fieldName}
              className={cn(isFullWidthField(field) && "sm:col-span-2")}
            >
              <FieldRenderer
                field={field}
                control={control}
                error={errors[field.fieldName]?.message as string | undefined}
              />
            </div>
          ))}

          <div className="sm:col-span-2 mt-1 space-y-3">
            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Confirmar inscrição"
              )}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              <span className="text-destructive">*</span> Campos obrigatórios
            </p>
          </div>
        </div>
      </form>
    </Card>
  );
}

// ── combobox com busca (listas longas) ─────────────────────────────────────────

function Combobox({
  id,
  value,
  onChange,
  options,
  placeholder,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const selected = options.find((o) => o.value === value);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          id={id}
          className={cn(
            "h-11 w-full justify-between font-normal",
            !selected && "text-muted-foreground"
          )}
        >
          <span className="truncate">{selected ? selected.label : placeholder || "Selecione"}</span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
        <Command>
          <CommandInput placeholder="Buscar..." />
          <CommandList>
            <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
            <CommandGroup>
              {options.map((opt) => (
                <CommandItem
                  key={opt.value}
                  value={opt.label}
                  onSelect={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn("mr-2 h-4 w-4", value === opt.value ? "opacity-100" : "opacity-0")}
                  />
                  {opt.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

// ── campo individual ──────────────────────────────────────────────────────────

function FieldRenderer({
  field,
  control,
  error,
}: {
  field: FormFieldDef;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  error?: string;
}) {
  const options = normalizeOptions(field.options);
  const requiredMark = field.isRequired ? <span className="text-destructive"> *</span> : null;

  // Checkbox simples (aceite).
  if (isAcceptanceCheckbox(field)) {
    return (
      <Controller
        name={field.fieldName}
        control={control}
        render={({ field: f }) => (
          <div>
            <label
              htmlFor={field.fieldName}
              className={cn(
                "flex cursor-pointer items-start gap-3 rounded-xl border border-border p-4 transition-colors",
                "hover:bg-accent/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5"
              )}
            >
              <Checkbox
                id={field.fieldName}
                checked={Boolean(f.value)}
                onCheckedChange={f.onChange}
                className="mt-0.5"
              />
              <span className="text-sm leading-snug text-foreground">
                {field.fieldLabel}
                {requiredMark}
              </span>
            </label>
            {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
          </div>
        )}
      />
    );
  }

  const longLabels = options.some((o) => o.label.length > 40);

  return (
    <div className="space-y-2">
      <Label htmlFor={field.fieldName} className="text-sm font-medium">
        {field.fieldLabel}
        {requiredMark}
      </Label>
      <Controller
        name={field.fieldName}
        control={control}
        render={({ field: f }) => {
          // Listas longas → combobox com busca.
          if (options.length > COMBOBOX_THRESHOLD) {
            return (
              <Combobox
                id={field.fieldName}
                value={(f.value as string) || ""}
                onChange={f.onChange}
                options={options}
                placeholder={field.placeholder || "Buscar e selecionar"}
              />
            );
          }

          // Radio (poucas opções) → cartões selecionáveis.
          if (field.fieldType === "radio" && options.length > 0) {
            return (
              <RadioGroup
                value={(f.value as string) || ""}
                onValueChange={f.onChange}
                className={cn("grid gap-2.5", longLabels ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2")}
              >
                {options.map((opt) => {
                  const optId = `${field.fieldName}-${opt.value}`;
                  const selected = f.value === opt.value;
                  return (
                    <Label
                      key={opt.value}
                      htmlFor={optId}
                      className={cn(
                        "flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 text-sm font-normal transition-colors",
                        "hover:bg-accent/50",
                        selected ? "border-primary bg-primary/5" : "border-border"
                      )}
                    >
                      <RadioGroupItem id={optId} value={opt.value} className="mt-0.5" />
                      <span className="leading-snug text-foreground">{opt.label}</span>
                    </Label>
                  );
                })}
              </RadioGroup>
            );
          }

          // Demais campos com opções (select) → dropdown.
          if (options.length > 0) {
            return (
              <Select value={(f.value as string) || ""} onValueChange={f.onChange}>
                <SelectTrigger id={field.fieldName} className="h-11 w-full">
                  <SelectValue placeholder={field.placeholder || "Selecione"} />
                </SelectTrigger>
                <SelectContent>
                  {options.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            );
          }

          if (field.fieldType === "textarea") {
            return (
              <Textarea
                id={field.fieldName}
                placeholder={field.placeholder || ""}
                value={(f.value as string) || ""}
                onChange={f.onChange}
                className="min-h-28"
              />
            );
          }

          const applyMask = (raw: string) => {
            if (field.fieldType === "cpf") return maskCPF(raw);
            if (field.fieldType === "phone") return maskPhone(raw);
            return raw;
          };
          const inputType =
            field.fieldType === "email"
              ? "email"
              : field.fieldType === "number"
              ? "number"
              : field.fieldType === "date"
              ? "date"
              : "text";

          return (
            <Input
              id={field.fieldName}
              type={inputType}
              className="h-11"
              inputMode={
                field.fieldType === "phone" || field.fieldType === "cpf" ? "numeric" : undefined
              }
              placeholder={field.placeholder || ""}
              value={(f.value as string) || ""}
              onChange={(e) => f.onChange(applyMask(e.target.value))}
            />
          );
        }}
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
