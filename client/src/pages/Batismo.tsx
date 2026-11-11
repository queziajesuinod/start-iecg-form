import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { CheckCircle2, Droplets, Loader2, Sparkles } from "lucide-react";
import QRCode from "qrcode";
import { useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useParams } from "wouter";
import { z } from "zod";

// Slug padrão do evento fixo de batismo (pode ser sobrescrito pela rota /batismo/:slug).
const DEFAULT_SLUG = import.meta.env.VITE_BAPTISM_EVENT_SLUG || "batismo";

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
}

// ── helpers ──────────────────────────────────────────────────────────────────

const normalizeOptions = (options: unknown): { value: string; label: string }[] => {
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
    .filter((o): o is { value: string; label: string } => Boolean(o));
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

// Monta o schema zod dinamicamente a partir dos campos do formulário do evento.
const buildSchema = (fields: FormFieldDef[]) => {
  const shape: Record<string, z.ZodTypeAny> = {};
  for (const field of fields) {
    const required = Boolean(field.isRequired);
    if (isAcceptanceCheckbox(field)) {
      // Checkbox simples (aceite) → booleano.
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

// ── página ─────────────────────────────────────────────────────────────────

export default function Batismo() {
  const params = useParams();
  const slug = (params as Record<string, string>).slug || DEFAULT_SLUG;

  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [event, setEvent] = useState<EventDef | null>(null);
  const [fields, setFields] = useState<FormFieldDef[]>([]);
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
        // Campos únicos por fieldName (buyer + attendee), ordenados.
        // Evento gratuito: não há dados de comprador separados — os mesmos
        // dados da pessoa servem de contato e de inscrito.
        const seen = new Set<string>();
        const uniqueFields = allFields
          .slice()
          .sort(sortByOrder)
          .filter((f) => {
            if (!f.fieldName || seen.has(f.fieldName)) return false;
            seen.add(f.fieldName);
            return true;
          });

        if (!active) return;
        setEvent(ev);
        setFields(uniqueFields);
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
      <main className="container max-w-2xl flex-1 py-6 md:py-10">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-28 gap-3">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">Carregando inscrição...</p>
          </div>
        ) : loadError ? (
          <Card className="p-8 text-center animate-fade-in">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
              <Droplets className="h-6 w-6 text-destructive" />
            </div>
            <p className="font-semibold text-foreground mb-1">Não foi possível abrir o batismo</p>
            <p className="text-sm text-muted-foreground">{loadError}</p>
          </Card>
        ) : event ? (
          <div className="space-y-6 animate-fade-in-up">
            <EventHero event={event} />
            {!openBatch ? (
              <Card className="p-8 text-center">
                <p className="font-semibold text-foreground mb-1">Inscrições fechadas</p>
                <p className="text-sm text-muted-foreground">
                  No momento não há período de inscrição aberto para o batismo. Volte quando a
                  inscrição estiver disponível.
                </p>
              </Card>
            ) : (
              <BaptismForm event={event} fields={fields} batch={openBatch} />
            )}
          </div>
        ) : null}
      </main>
    </div>
  );
}

// ── capa / hero do evento ─────────────────────────────────────────────────────

function EventHero({ event }: { event: EventDef }) {
  const title = event.title || "Batismo";
  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
      <div className="relative aspect-[16/10] w-full bg-gradient-to-br from-primary to-primary/70 sm:aspect-[2/1]">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/25 backdrop-blur-sm">
              <Droplets className="h-3.5 w-3.5" />
              Batismo
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-success/90 px-3 py-1 text-xs font-semibold text-success-foreground ring-1 ring-white/20 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Inscrição gratuita
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white drop-shadow-sm sm:text-3xl md:text-4xl">
            {title}
          </h1>
        </div>
      </div>

      {event.description ? (
        <p className="whitespace-pre-line px-5 py-4 text-sm leading-relaxed text-muted-foreground sm:px-7">
          {event.description}
        </p>
      ) : null}
    </section>
  );
}

// ── formulário ────────────────────────────────────────────────────────────────

function BaptismForm({
  event,
  fields,
  batch,
}: {
  event: EventDef;
  fields: FormFieldDef[];
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

  const [success, setSuccess] = useState<{ orderCode: string; qr: string } | null>(null);

  const onSubmit = async (values: Record<string, unknown>) => {
    try {
      // Pessoa do batismo: os mesmos dados servem de comprador (contato) e de inscrito.
      const data = { ...values };
      const payload = {
        eventId: event.id,
        quantity: 1,
        buyerData: data,
        attendeesData: [{ batchId: batch.id, data }],
      };
      const resp = await api.post("/api/public/events/register", payload);
      const orderCode: string = resp.data?.orderCode || resp.data?.registration?.orderCode || "";
      if (!orderCode) throw new Error("Inscrição criada, mas sem código de confirmação.");

      // QR lido pelo app de check-in (aceita JSON com orderCode/eventId).
      const qr = await QRCode.toDataURL(JSON.stringify({ orderCode, eventId: event.id }), {
        margin: 1,
        width: 320,
      });
      setSuccess({ orderCode, qr });
    } catch (err) {
      const message =
        (err as { response?: { data?: { message?: string } } })?.response?.data?.message ||
        (err instanceof Error ? err.message : "Erro ao enviar a inscrição.");
      toast.error(message);
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
              Código: <span className="font-mono font-semibold tracking-wide">{success.orderCode}</span>
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            Guarde este código. Você também pode tirar um print desta tela.
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

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {fields.map((field) => (
          <FieldRenderer
            key={field.fieldName}
            field={field}
            control={control}
            error={errors[field.fieldName]?.message as string | undefined}
          />
        ))}

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
      </form>
    </Card>
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
          // Radio → cartões selecionáveis (não vira dropdown).
          if (field.fieldType === "radio" && options.length > 0) {
            return (
              <RadioGroup
                value={(f.value as string) || ""}
                onValueChange={f.onChange}
                className="gap-2"
              >
                {options.map((opt) => {
                  const id = `${field.fieldName}-${opt.value}`;
                  const selected = f.value === opt.value;
                  return (
                    <Label
                      key={opt.value}
                      htmlFor={id}
                      className={cn(
                        "flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 text-sm font-normal transition-colors",
                        "hover:bg-accent/50",
                        selected ? "border-primary bg-primary/5" : "border-border"
                      )}
                    >
                      <RadioGroupItem id={id} value={opt.value} />
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
                className="min-h-24"
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
