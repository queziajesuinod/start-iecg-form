import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Droplets, Loader2 } from "lucide-react";
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

// Monta o schema zod dinamicamente a partir dos campos do formulário do evento.
const buildSchema = (fields: FormFieldDef[]) => {
  const shape: Record<string, z.ZodTypeAny> = {};
  for (const field of fields) {
    const required = Boolean(field.isRequired);
    if (field.fieldType === "checkbox" && normalizeOptions(field.options).length === 0) {
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
    <div className="min-h-dvh bg-gradient-to-b from-background to-muted/40 flex flex-col">
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-30">
        <div className="container py-6 flex flex-col items-center gap-3">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/75 rounded-2xl flex items-center justify-center shadow-lg">
            <Droplets className="w-8 h-8 text-primary-foreground" />
          </div>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Batismo</h1>
            <p className="text-muted-foreground text-sm md:text-base mt-1">
              {event?.title || "Inscrição para o batismo"}
            </p>
          </div>
        </div>
      </header>

      <main className="container flex-1 py-8">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">Carregando...</p>
          </div>
        ) : loadError ? (
          <Card className="max-w-2xl mx-auto p-6 text-center">
            <p className="font-semibold text-destructive mb-1">Não foi possível abrir o batismo</p>
            <p className="text-sm text-muted-foreground">{loadError}</p>
          </Card>
        ) : !openBatch ? (
          <Card className="max-w-2xl mx-auto p-8 text-center">
            <p className="font-semibold text-foreground mb-1">Inscrições fechadas</p>
            <p className="text-sm text-muted-foreground">
              No momento não há período de inscrição aberto para o batismo. Volte quando a inscrição
              estiver disponível.
            </p>
          </Card>
        ) : event ? (
          <BaptismForm event={event} fields={fields} batch={openBatch} />
        ) : null}
      </main>
    </div>
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
      dv[f.fieldName] =
        f.fieldType === "checkbox" && normalizeOptions(f.options).length === 0 ? false : "";
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
      <Card className="max-w-2xl mx-auto p-6 md:p-8 text-center">
        <div className="flex flex-col items-center gap-3">
          <CheckCircle2 className="w-10 h-10 text-success" />
          <h2 className="text-xl font-bold text-foreground">Inscrição confirmada!</h2>
          <p className="text-sm text-muted-foreground">
            Apresente este QR Code no dia do batismo para confirmar sua presença.
          </p>
          <img
            src={success.qr}
            alt="QR Code da inscrição"
            className="w-56 h-56 rounded-xl border border-border bg-white p-2"
          />
          <p className="text-sm text-foreground">
            Código: <span className="font-mono font-semibold">{success.orderCode}</span>
          </p>
          <p className="text-xs text-muted-foreground">
            Guarde este código. Você também pode tirar um print desta tela.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto p-6 md:p-8 shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-1">Inscrição</h2>
        <p className="text-sm text-muted-foreground uppercase tracking-wide">
          Preencha seus dados para o batismo
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {fields.map((field) => (
          <FieldRenderer
            key={field.fieldName}
            field={field}
            control={control}
            error={errors[field.fieldName]?.message as string | undefined}
          />
        ))}

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Enviando...
            </>
          ) : (
            "Confirmar inscrição"
          )}
        </Button>
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
  if (field.fieldType === "checkbox" && options.length === 0) {
    return (
      <Controller
        name={field.fieldName}
        control={control}
        render={({ field: f }) => (
          <div className="flex items-start gap-2">
            <Checkbox id={field.fieldName} checked={Boolean(f.value)} onCheckedChange={f.onChange} />
            <Label htmlFor={field.fieldName} className="text-sm leading-snug">
              {field.fieldLabel}
              {requiredMark}
            </Label>
          </div>
        )}
      />
    );
  }

  return (
    <div className="space-y-2">
      <Label htmlFor={field.fieldName}>
        {field.fieldLabel}
        {requiredMark}
      </Label>
      <Controller
        name={field.fieldName}
        control={control}
        render={({ field: f }) => {
          // Select / radio → dropdown.
          if (options.length > 0) {
            return (
              <Select value={(f.value as string) || ""} onValueChange={f.onChange}>
                <SelectTrigger id={field.fieldName}>
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
              inputMode={field.fieldType === "phone" || field.fieldType === "cpf" ? "numeric" : undefined}
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
