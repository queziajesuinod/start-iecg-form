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
import { geocodeAddress } from "@/lib/geocode";
import { trpc } from "@/lib/trpc";
import { CAMPUS_NAMES } from "@shared/campus";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Heart, Play, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const REDE_OPTIONS = [
  { value: "IECG KIDS", label: "IECG KIDS" },
  { value: "MULHERES IECG", label: "MULHERES IECG" },
  { value: "HOMENS IECG", label: "HOMENS IECG" },
  {
    value: "RELEVANTEEN RAPAZES",
    label: "RELEVANTEEN RAPAZES (10-14 ANOS)",
  },
  {
    value: "RELEVANTEEN MOÇAS",
    label: "RELEVANTEEN MOÇAS (10-14 ANOS)",
  },
  {
    value: "RELEVANTE JUNIORS MOÇAS",
    label: "RELEVANTE JUNIORS MOÇAS (15-19 ANOS)",
  },
  {
    value: "RELEVANTE JUNIORS RAPAZES",
    label: "RELEVANTE JUNIORS RAPAZES (15-19 ANOS)",
  },
  {
    value: "JUVENTUDE RELEVANTE MOÇAS",
    label: "JUVENTUDE RELEVANTE MOÇAS",
  },
  {
    value: "JUVENTUDE RELEVANTE RAPAZES",
    label: "JUVENTUDE RELEVANTE RAPAZES",
  },
];

// Pares de rede para célula de casal: ao escolher uma, o cônjuge vai para a rede-espelho.
const REDE_CASAL_PAR: Record<string, string> = {
  "MULHERES IECG": "HOMENS IECG",
  "HOMENS IECG": "MULHERES IECG",
  "JUVENTUDE RELEVANTE MOÇAS": "JUVENTUDE RELEVANTE RAPAZES",
  "JUVENTUDE RELEVANTE RAPAZES": "JUVENTUDE RELEVANTE MOÇAS",
};

const redeParDeCasal = (rede?: string) => (rede ? REDE_CASAL_PAR[rede] : undefined);

const DIAS_PREFERENCIA = [
  { value: "Segunda", disabled: false },
  { value: "Terça", disabled: false },
  { value: "Quarta", disabled: true },
  { value: "Quinta", disabled: false },
  { value: "Sexta", disabled: false },
  { value: "Sábado", disabled: false },
  { value: "Domingo", disabled: true },
];

const DECISAO_OPTIONS = [
  {
    value: "apelo_decisao",
    label: "Aceitar Jesus como meu Senhor e Salvador",
  },
  {
    value: "apelo_volta",
    label: "Voltar para Jesus (estava afastado e estou me reconciliando)",
  },
  {
    value: "encaminhamento_celula",
    label: "Encaminhamento de Célula",
  },
];

const formSchema = z
  .object({
    campus: z.string().min(1, "Campus é obrigatório"),
    nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
    idade: z.coerce.number().min(1, "Idade é obrigatória").max(150),
    whatsapp: z.string().min(14, "WhatsApp inválido"),
    rede: z.string().min(1, "Rede é obrigatória"),
    decisao: z.string().min(1, "Decisão é obrigatória"),
    direcionar_celula: z.boolean().default(false),
    celula_casal: z.boolean().default(false),
    conjuge_nome: z.string().optional(),
    conjuge_whatsapp: z.string().optional(),
    conjuge_idade: z.coerce.number().max(150).optional(),
    cep_apelo: z.string().optional(),
    bairro_apelo: z.string().optional(),
    cidade_apelo: z.string().optional(),
    estado_apelo: z.string().optional(),
    bairro_proximo: z.array(z.string()).default([]),
    dias_semana: z.array(z.string()).default([]),
    observacao: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.direcionar_celula) {
      const cepDigits = (data.cep_apelo || "").replace(/\D/g, "");
      if (cepDigits.length !== 8) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["cep_apelo"],
          message: "CEP é obrigatório para encaminhamento",
        });
      }

      if (!(data.bairro_apelo || "").trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["bairro_apelo"],
          message: "Bairro é obrigatório para encaminhamento",
        });
      }

      if (data.celula_casal) {
        if (!(data.conjuge_nome || "").trim() || (data.conjuge_nome || "").trim().length < 3) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["conjuge_nome"],
            message: "Nome do cônjuge é obrigatório",
          });
        }
        if ((data.conjuge_whatsapp || "").replace(/\D/g, "").length < 10) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["conjuge_whatsapp"],
            message: "WhatsApp do cônjuge é obrigatório",
          });
        }
        if (!data.conjuge_idade || data.conjuge_idade < 1) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["conjuge_idade"],
            message: "Idade do cônjuge é obrigatória",
          });
        }
      }
    }
  });

type FormData = z.infer<typeof formSchema>;

export default function StartForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [bairroTemp, setBairroTemp] = useState("");
  const [cepLookupLoading, setCepLookupLoading] = useState(false);
  const lastCepLookupRef = useRef("");
  const cepLookupRequestRef = useRef(0);

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      campus: "",
      nome: "",
      idade: undefined,
      whatsapp: "",
      rede: "",
      decisao: "",
      direcionar_celula: false,
      celula_casal: false,
      conjuge_nome: "",
      conjuge_whatsapp: "",
      conjuge_idade: undefined,
      cep_apelo: "",
      bairro_apelo: "",
      cidade_apelo: "Campo Grande",
      estado_apelo: "Mato Grosso do Sul",
      bairro_proximo: [],
      dias_semana: [],
      observacao: "",
    },
  });

  const decisaoSelecionada = watch("decisao");
  const direcionarCelula = watch("direcionar_celula");
  const celulaCasal = watch("celula_casal");
  const redeSelecionada = watch("rede");
  const bairrosProximos = watch("bairro_proximo");
  const isEncaminhamento = decisaoSelecionada === "encaminhamento_celula";
  const redeParConjuge = redeParDeCasal(redeSelecionada);
  const submitLogPrefix = "[StartForm][direcionamentos.submit]";

  useEffect(() => {
    if (isEncaminhamento && !direcionarCelula) {
      setValue("direcionar_celula", true);
    }
  }, [isEncaminhamento, direcionarCelula, setValue]);

  // Se a rede escolhida não tem par de casal, desmarca a opção para não enviar inconsistente.
  useEffect(() => {
    if (celulaCasal && !redeParConjuge) {
      setValue("celula_casal", false);
    }
  }, [celulaCasal, redeParConjuge, setValue]);

  const submitMutation = trpc.direcionamentos.submit.useMutation({
    onMutate: variables => {
      console.log(`${submitLogPrefix} enviando payload`, {
        decisao: variables.decisao,
        direcionar_celula: variables.direcionar_celula,
        status: variables.status,
        campus_iecg: variables.campus_iecg,
        possui_cep_apelo: Boolean(variables.cep_apelo),
        bairros_proximos_qtd: variables.bairro_proximo.length,
        dias_semana_qtd: variables.dias_semana?.length ?? 0,
        cidade_apelo: variables.cidade_apelo,
        estado_apelo: variables.estado_apelo,
      });
    },
    onSuccess: data => {
      console.log(`${submitLogPrefix} sucesso`, data);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setShowSuccess(true);
      reset();
      setTimeout(() => setShowSuccess(false), 5000);
    },
    onError: error => {
      console.error(`${submitLogPrefix} erro`, error);
      toast.error("Erro ao enviar", {
        description: error.message || "Tente novamente mais tarde",
      });
    },
  });

  const onSubmit = async (data: FormData) => {
    const decisao = data.direcionar_celula
      ? "encaminhamento_celula"
      : data.decisao;

    const status = !data.direcionar_celula && decisao !== "encaminhamento_celula"
      ? "NAO_HAVERAR_DIRECIONAMENTO"
      : "APELO_CADASTRADO";

    const cepApelo = (data.cep_apelo || "").replace(/\D/g, "");
    let bairroApelo = (data.bairro_apelo || "").trim();
    let cidadeApelo = (data.cidade_apelo || "").trim();
    let estadoApelo = (data.estado_apelo || "").trim();

    if (data.direcionar_celula && cepApelo.length === 8) {
      if (!bairroApelo || !cidadeApelo || !estadoApelo) {
        const addressByCep = await getAddressFromCep(cepApelo);
        bairroApelo = bairroApelo || addressByCep?.bairro || "";
        cidadeApelo = cidadeApelo || addressByCep?.cidade || "";
        estadoApelo = estadoApelo || addressByCep?.estado || "";
      }

      if (!bairroApelo || !cidadeApelo || !estadoApelo) {
        const geo = await geocodeAddress(cepApelo).catch(() => null);
        bairroApelo = bairroApelo || geo?.bairro || "";
        cidadeApelo = cidadeApelo || geo?.cidade || "";
        estadoApelo = estadoApelo || geo?.estado || "";
      }
    }

    if (data.direcionar_celula) {
      if (!bairroApelo) {
        toast.error("Bairro é obrigatório para encaminhamento");
        return;
      }

      setValue("bairro_apelo", bairroApelo, { shouldDirty: true });
      setValue("cidade_apelo", cidadeApelo, { shouldDirty: true });
      setValue("estado_apelo", estadoApelo, { shouldDirty: true });
    }

    const payload = {
      nome: data.nome,
      decisao,
      whatsapp: data.whatsapp.replace(/\D/g, ""),
      rede: data.rede,
      idade: data.idade,
      bairro_proximo: data.bairro_proximo || [],
      dias_semana: data.dias_semana || [],
      direcionar_celula: data.direcionar_celula,
      celula_casal: data.direcionar_celula ? data.celula_casal : false,
      campus_iecg: data.campus,
      status,
      observacao: data.observacao || "",
      ...(data.direcionar_celula && data.celula_casal
        ? {
            conjuge_nome: (data.conjuge_nome || "").trim(),
            conjuge_whatsapp: (data.conjuge_whatsapp || "").replace(/\D/g, ""),
            conjuge_idade: data.conjuge_idade,
          }
        : {}),
      ...(data.direcionar_celula
        ? {
            cep_apelo: cepApelo,
            bairro_apelo: bairroApelo,
            cidade_apelo: cidadeApelo,
            estado_apelo: estadoApelo,
          }
        : {}),
    };

    console.log(`${submitLogPrefix} preparando submit`, {
      decisao_original: data.decisao,
      decisao_final: decisao,
      direcionar_celula: data.direcionar_celula,
      campus_iecg: data.campus,
      possui_cep_apelo: Boolean(payload.cep_apelo),
      bairros_proximos_qtd: payload.bairro_proximo.length,
      dias_semana_qtd: payload.dias_semana.length,
      cidade_apelo: payload.cidade_apelo,
      estado_apelo: payload.estado_apelo,
      cep_apelo: payload.cep_apelo,
      bairro_apelo: payload.bairro_apelo,
    });

    const startedAt = Date.now();
    try {
      await submitMutation.mutateAsync(payload);
    } finally {
      console.log(`${submitLogPrefix} fluxo concluido`, {
        duracao_ms: Date.now() - startedAt,
      });
    }
  };

  const formatWhatsapp = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsapp(e.target.value);
    setValue("whatsapp", formatted);
  };

  const handleConjugeWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsapp(e.target.value);
    setValue("conjuge_whatsapp", formatted, { shouldValidate: true });
  };

  type CepAddressData = {
    bairro: string;
    cidade: string;
    estado: string;
  };

  const getAddressFromCep = async (cepDigits: string): Promise<CepAddressData | null> => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepDigits}/json/`);
      if (!response.ok) return null;

      const data = (await response.json()) as {
        erro?: boolean;
        bairro?: string;
        localidade?: string;
        uf?: string;
      };

      if (data?.erro) return null;
      return {
        bairro: (data?.bairro || "").trim(),
        cidade: (data?.localidade || "").trim(),
        estado: (data?.uf || "").trim(),
      };
    } catch {
      return null;
    }
  };

  const fillAddressFromCep = async (cepDigits: string) => {
    const requestId = ++cepLookupRequestRef.current;
    setCepLookupLoading(true);
    try {
      if (requestId !== cepLookupRequestRef.current) {
        return;
      }

      const addressByCep = await getAddressFromCep(cepDigits);
      if (requestId !== cepLookupRequestRef.current) {
        return;
      }

      if (addressByCep?.bairro) {
        setValue("bairro_apelo", addressByCep.bairro, {
          shouldDirty: true,
          shouldTouch: true,
          shouldValidate: false,
        });
      }

      if (addressByCep?.cidade) {
        setValue("cidade_apelo", addressByCep.cidade, {
          shouldDirty: true,
          shouldTouch: true,
          shouldValidate: false,
        });
      }

      if (addressByCep?.estado) {
        setValue("estado_apelo", addressByCep.estado, {
          shouldDirty: true,
          shouldTouch: true,
          shouldValidate: false,
        });
      }

      const missingBairro = !addressByCep?.bairro;
      const missingCidade = !addressByCep?.cidade;
      const missingEstado = !addressByCep?.estado;

      if (missingBairro || missingCidade || missingEstado) {
        const geo = await geocodeAddress(cepDigits);
        if (requestId !== cepLookupRequestRef.current) {
          return;
        }
        if (geo?.bairro && missingBairro) {
          setValue("bairro_apelo", geo.bairro, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: false,
          });
        }
        if (geo?.cidade && missingCidade) {
          setValue("cidade_apelo", geo.cidade, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: false,
          });
        }
        if (geo?.estado && missingEstado) {
          setValue("estado_apelo", geo.estado, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: false,
          });
        }
      }
    } catch (error) {
      console.error("Erro ao buscar endereco pelo CEP:", error);
    } finally {
      if (requestId === cepLookupRequestRef.current) {
        setCepLookupLoading(false);
      }
    }
  };

  const formatCep = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 8);
    if (digits.length <= 5) return digits;
    return `${digits.slice(0, 5)}-${digits.slice(5)}`;
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCep(e.target.value);
    setValue("cep_apelo", formatted);
    const cepDigits = formatted.replace(/\D/g, "");

    if (cepDigits.length !== 8) {
      lastCepLookupRef.current = "";
      cepLookupRequestRef.current += 1;
      setValue("bairro_apelo", "");
      setValue("cidade_apelo", "");
      setValue("estado_apelo", "");
      setCepLookupLoading(false);
      return;
    }

    if (lastCepLookupRef.current === cepDigits) {
      return;
    }

    lastCepLookupRef.current = cepDigits;
    void fillAddressFromCep(cepDigits);
  };

  const addBairroProximo = () => {
    const trimmed = bairroTemp.trim();
    if (!trimmed) return;
    if (bairrosProximos.includes(trimmed)) {
      toast.error("Bairro já adicionado");
      return;
    }
    setValue("bairro_proximo", [...bairrosProximos, trimmed]);
    setBairroTemp("");
  };

  const removeBairroProximo = (bairro: string) => {
    setValue(
      "bairro_proximo",
      bairrosProximos.filter(b => b !== bairro)
    );
  };

  return (
    <div className="min-h-dvh bg-gradient-to-b from-background to-muted/40 flex flex-col">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-30">
        <div className="container py-6 flex flex-col items-center gap-3">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/75 rounded-2xl flex items-center justify-center shadow-lg animate-fade-in">
            <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground" />
          </div>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
              START IECG
            </h1>
            <p className="text-muted-foreground text-sm md:text-base mt-1">
              Orientando um novo começo
            </p>
          </div>
        </div>
      </header>

      {/* Success Message */}
      {showSuccess && (
        <div className="container mt-6 animate-fade-in-up">
          <div className="border border-success/30 bg-success/10 rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle2 className="w-6 h-6 text-success" />
              <h3 className="font-semibold text-success text-lg">
                Inscrição realizada com sucesso!
              </h3>
            </div>
            <p className="text-foreground/80 text-sm">
              Obrigado por se inscrever. Em breve entraremos em contato através
              do WhatsApp informado.
            </p>
          </div>
        </div>
      )}

      {/* Main Form */}
      <main className="container flex-1 py-8">
        <Card className="max-w-2xl mx-auto p-6 md:p-8 shadow-lg animate-fade-in-up">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-1">START</h2>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">
              Seja bem-vindo, aqui é um lugar de novos começos!
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Campus */}
            <div className="space-y-2">
              <Label htmlFor="campus">
                Campus IECG <span className="text-destructive">*</span>
              </Label>
              <Controller
                name="campus"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger
                      id="campus"
                      className="w-full"
                    >
                      <SelectValue placeholder="Escolher" />
                    </SelectTrigger>
                    <SelectContent>
                      {CAMPUS_NAMES.map(campus => (
                        <SelectItem key={campus} value={campus}>
                          {campus}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.campus && (
                <p className="text-sm text-destructive">{errors.campus.message}</p>
              )}
            </div>

            {/* Nome */}
            <div className="space-y-2">
              <Label htmlFor="nome">
                Queremos te conhecer. Insira seu nome completo:{" "}
                <span className="text-destructive">*</span>
              </Label>
              <Input
                id="nome"
                placeholder="Seu nome completo"
                               {...register("nome")}
              />
              {errors.nome && (
                <p className="text-sm text-destructive">{errors.nome.message}</p>
              )}
            </div>

            {/* Idade */}
            <div className="space-y-2">
              <Label htmlFor="idade">
                Idade: <span className="text-destructive">*</span>
              </Label>
              <Input
                id="idade"
                type="number"
                placeholder="Sua idade"
                               {...register("idade")}
              />
              {errors.idade && (
                <p className="text-sm text-destructive">{errors.idade.message}</p>
              )}
            </div>

            {/* WhatsApp */}
            <div className="space-y-2">
              <Label htmlFor="whatsapp">
                WhatsApp | Número de Telefone:{" "}
                <span className="text-destructive">*</span>
              </Label>
              <Input
                id="whatsapp"
                type="tel"
                placeholder="(99) 99999-9999"
                               {...register("whatsapp")}
                onChange={handleWhatsappChange}
              />
              {errors.whatsapp && (
                <p className="text-sm text-destructive">
                  {errors.whatsapp.message}
                </p>
              )}
            </div>

            {/* Rede */}
            <div className="space-y-2">
              <Label htmlFor="rede">
                Rede <span className="text-destructive">*</span>
              </Label>
              <Controller
                name="rede"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger
                      id="rede"
                      className="w-full"
                    >
                      <SelectValue placeholder="Selecione sua rede" />
                    </SelectTrigger>
                    <SelectContent>
                      {REDE_OPTIONS.map(rede => (
                        <SelectItem key={rede.value} value={rede.value}>
                          {rede.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.rede && (
                <p className="text-sm text-destructive">{errors.rede.message}</p>
              )}
            </div>

            {/* Decisão */}
            <div className="space-y-2">
              <Label htmlFor="decisao">
                Hoje, minha decisão foi: <span className="text-destructive">*</span>
              </Label>
              <Controller
                name="decisao"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger
                      id="decisao"
                      className="w-full"
                    >
                      <SelectValue placeholder="Selecione uma opção" />
                    </SelectTrigger>
                    <SelectContent>
                      {DECISAO_OPTIONS.map(opcao => (
                        <SelectItem key={opcao.value} value={opcao.value}>
                          {opcao.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.decisao && (
                <p className="text-sm text-destructive">{errors.decisao.message}</p>
              )}
            </div>

            {/* Checkbox Direcionar Célula */}
            <div className="flex items-start space-x-3 bg-info/10 p-4 rounded-xl border border-info/25">
              <Controller
                name="direcionar_celula"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id="direcionar_celula"
                    checked={field.value}
                    disabled={isEncaminhamento}
                    onCheckedChange={checked => {
                      if (isEncaminhamento) return;
                      field.onChange(checked);
                    }}
                  />
                )}
              />
              <div className="space-y-1">
                <Label
                  htmlFor="direcionar_celula"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  Desejo ser direcionado(a) para uma célula
                </Label>
                <p className="text-xs text-muted-foreground">
                  Marque esta opção se deseja participar de uma célula próxima a
                  você
                </p>
              </div>
            </div>

            {/* Campos condicionais de localização */}
            {direcionarCelula && (
              <div className="space-y-6 bg-muted/40 p-4 rounded-xl border border-border animate-fade-in-up">
                {/* Checkbox Célula de Casal — só quando a rede escolhida tem par */}
                {redeParConjuge && (
                  <div className="space-y-4 bg-primary/5 p-4 rounded-xl border border-primary/20">
                    <div className="flex items-start space-x-3">
                      <Controller
                        name="celula_casal"
                        control={control}
                        render={({ field }) => (
                          <Checkbox
                            id="celula_casal"
                            checked={field.value}
                            onCheckedChange={checked => field.onChange(checked)}
                          />
                        )}
                      />
                      <div className="space-y-1">
                        <Label
                          htmlFor="celula_casal"
                          className="text-sm font-medium leading-none cursor-pointer"
                        >
                          Desejo uma célula de casal
                        </Label>
                        <p className="text-xs text-muted-foreground">
                          Você e seu cônjuge serão cadastrados juntos. Seu cônjuge será
                          direcionado para a rede{" "}
                          <span className="font-semibold">{redeParConjuge}</span>.
                        </p>
                      </div>
                    </div>

                    {celulaCasal && (
                      <div className="space-y-4 pt-1">
                        <p className="text-sm font-medium text-foreground">
                          Dados do cônjuge
                        </p>

                        {/* Nome do cônjuge */}
                        <div className="space-y-2">
                          <Label htmlFor="conjuge_nome">
                            Nome do cônjuge <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="conjuge_nome"
                            type="text"
                            placeholder="Nome completo"
                                                       {...register("conjuge_nome")}
                          />
                          {errors.conjuge_nome && (
                            <p className="text-sm text-destructive">
                              {errors.conjuge_nome.message}
                            </p>
                          )}
                        </div>

                        {/* WhatsApp do cônjuge */}
                        <div className="space-y-2">
                          <Label htmlFor="conjuge_whatsapp">
                            WhatsApp do cônjuge <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="conjuge_whatsapp"
                            type="text"
                            inputMode="numeric"
                            placeholder="(00) 00000-0000"
                                                       {...register("conjuge_whatsapp")}
                            onChange={handleConjugeWhatsappChange}
                          />
                          {errors.conjuge_whatsapp && (
                            <p className="text-sm text-destructive">
                              {errors.conjuge_whatsapp.message}
                            </p>
                          )}
                        </div>

                        {/* Idade do cônjuge */}
                        <div className="space-y-2">
                          <Label htmlFor="conjuge_idade">
                            Idade do cônjuge <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="conjuge_idade"
                            type="number"
                            inputMode="numeric"
                            placeholder="Idade"
                                                       {...register("conjuge_idade")}
                          />
                          {errors.conjuge_idade && (
                            <p className="text-sm text-destructive">
                              {errors.conjuge_idade.message}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <p className="text-sm font-medium text-foreground">
                  Informações de localização
                </p>

                {/* CEP */}
                <div className="space-y-2">
                  <Label htmlFor="cep_apelo">
                    CEP
                    {direcionarCelula && (
                      <span className="text-destructive"> *</span>
                    )}
                  </Label>
                  <Input
                    id="cep_apelo"
                    type="text"
                    inputMode="numeric"
                    placeholder="00000-000"
                                       {...register("cep_apelo")}
                    onChange={handleCepChange}
                  />
                  {errors.cep_apelo && (
                    <p className="text-sm text-destructive">
                      {errors.cep_apelo.message}
                    </p>
                  )}
                  {cepLookupLoading && (
                    <p className="text-xs text-muted-foreground">Buscando endereco pelo CEP...</p>
                  )}
                </div>

                {/* Bairro */}
                <div className="space-y-2">
                  <Label htmlFor="bairro_apelo">Bairro</Label>
                  <Input
                    id="bairro_apelo"
                    placeholder="Preenchido automaticamente pelo CEP"
                                       {...register("bairro_apelo")}
                  />
                </div>

                {/* Cidade */}
                <div className="space-y-2">
                  <Label htmlFor="cidade_apelo">Cidade</Label>
                  <Input
                    id="cidade_apelo"
                    placeholder="Preenchido automaticamente pelo CEP"
                                       {...register("cidade_apelo")}
                  />
                </div>

                {/* Estado */}
                <div className="space-y-2">
                  <Label htmlFor="estado_apelo">Estado</Label>
                  <Input
                    id="estado_apelo"
                    placeholder="Preenchido automaticamente pelo CEP"
                                       {...register("estado_apelo")}
                  />
                </div>

                {/* Bairros Próximos */}
                <div className="space-y-2">
                  <Label htmlFor="bairro_temp">
                    Adicionar bairros próximos (opcional)
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="bairro_temp"
                      placeholder="Digite um bairro"
                                           value={bairroTemp}
                      onChange={e => setBairroTemp(e.target.value)}
                      onKeyDown={e => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addBairroProximo();
                        }
                      }}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={addBairroProximo}
                      className="shrink-0"
                    >
                      Adicionar
                    </Button>
                  </div>
                  {bairrosProximos.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {bairrosProximos.map(bairro => (
                        <div
                          key={bairro}
                          className="inline-flex items-center gap-1 bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          <span>{bairro}</span>
                          <button
                            type="button"
                            onClick={() => removeBairroProximo(bairro)}
                            className="hover:bg-primary/20 rounded-full p-0.5 transition-colors"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {/* Dias de preferencia */}
                <div className="space-y-2">
                  <Label>Dias de preferencia (opcional)</Label>
                  <p className="text-xs text-muted-foreground">
                    Selecione um ou mais dias. Quarta e domingo estao bloqueados.
                  </p>
                  <Controller
                    name="dias_semana"
                    control={control}
                    render={({ field }) => (
                      <div className="grid grid-cols-2 gap-2">
                        {DIAS_PREFERENCIA.map(dia => {
                          const checked = field.value?.includes(dia.value);
                          return (
                            <label
                              key={dia.value}
                              className={`flex items-center gap-2 rounded-lg border px-3 py-2 transition-colors ${
                                dia.disabled
                                  ? "border-border opacity-50 cursor-not-allowed"
                                  : checked
                                    ? "border-primary bg-primary/5 cursor-pointer"
                                    : "border-border hover:bg-accent cursor-pointer"
                              }`}
                            >
                              <Checkbox
                                checked={checked}
                                disabled={dia.disabled}
                                onCheckedChange={() => {
                                  if (dia.disabled) return;
                                  const next = checked
                                    ? field.value.filter(d => d !== dia.value)
                                    : [...(field.value || []), dia.value];
                                  field.onChange(next);
                                }}
                              />
                              <span className={`text-sm ${dia.disabled ? "text-muted-foreground/60" : "text-foreground"}`}>
                                {dia.value}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    )}
                  />
                </div>
                {/* Observação */}
                <div className="space-y-2">
                  <Label htmlFor="observacao">Observação (opcional)</Label>
                  <textarea
                    id="observacao"
                    className="w-full rounded-lg border border-input bg-transparent p-3 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus:outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50"
                    rows={3}
                    {...register("observacao")}
                    placeholder="Alguma observação ou preferência adicional"
                  />
                </div>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-success to-success/85 hover:brightness-105 text-success-foreground font-semibold py-6 text-lg shadow-md hover:shadow-lg transition-all duration-300"
              disabled={submitMutation.isPending}
            >
              {submitMutation.isPending ? "Enviando..." : "Me Inscrever"}
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-4">
              * Indica que a pergunta é obrigatória
            </p>
          </form>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-6 mt-12">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 IECG - Igreja Evangélica Comunidade Global
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Orientando um novo começo
          </p>
        </div>
      </footer>
    </div>
  );
}

