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
import { trpc } from "@/lib/trpc";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Heart, Play, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const CAMPUS_OPTIONS = [
  "CAMPUS IECG CENTRO",
  "CAMPUS IECG AERO RANCHO",
  "CAMPUS IECG ARARAQUARA",
  "CAMPUS IECG BANDEIRANTES",
  "CAMPUS IECG DOURADOS",
  "CAMPUS IECG LOS ANGELES",
  "CAMPUS IECG MARGARIDA",
  "CAMPUS IECG PALHOÇA",
  "CAMPUS IECG PONTA PORÃ",
  "CAMPUS IECG RIBAS DO RIO PARDO",
  "CAMPUS IECG VILA VELHA",
];

const REDE_OPTIONS = [
  "IECG KIDS",
  "MULHERES IECG",
  "HOMENS IECG",
  "RELEVANTEEN RAPAZES (10-14 ANOS)",
  "RELEVANTEEN MOÇAS (10-14 ANOS)",
  "RELEVANTE JUNIORS MOÇAS (15-19 ANOS)",
  "RELEVANTE JUNIORS RAPAZES (15-19 ANOS)",
  "JUVENTUDE RELEVANTE MOÇAS",
  "JUVENTUDE RELEVANTE RAPAZES",
];

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
    bairro_apelo: z.string().optional(),
    cidade_apelo: z.string().optional(),
    estado_apelo: z.string().optional(),
    bairro_proximo: z.array(z.string()).default([]),
    dias_semana: z.array(z.string()).default([]),
    observacao: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.direcionar_celula) {
      if (!data.bairro_apelo || data.bairro_apelo.trim().length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["bairro_apelo"],
          message: "Bairro e obrigatorio para encaminhamento",
        });
      }
    }
  });

type FormData = z.infer<typeof formSchema>;

export default function StartForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [bairroTemp, setBairroTemp] = useState("");

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
  const bairrosProximos = watch("bairro_proximo");
  const isEncaminhamento = decisaoSelecionada === "encaminhamento_celula";

  useEffect(() => {
    if (isEncaminhamento) {
      setValue("direcionar_celula", true);
    }
  }, [isEncaminhamento, setValue]);

  const submitMutation = trpc.direcionamentos.submit.useMutation({
    onSuccess: () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setShowSuccess(true);
      reset();
      setTimeout(() => setShowSuccess(false), 5000);
    },
    onError: error => {
      toast.error("Erro ao enviar", {
        description: error.message || "Tente novamente mais tarde",
      });
    },
  });

  const onSubmit = async (data: FormData) => {
    const payload = {
      nome: data.nome,
      decisao: data.decisao,
      whatsapp: data.whatsapp.replace(/\D/g, ""),
      rede: data.rede,
      bairro_apelo: data.bairro_apelo || "",
      cidade_apelo: data.cidade_apelo || "Campo Grande",
      estado_apelo: data.estado_apelo || "Mato Grosso do Sul",
      idade: data.idade,
      bairro_proximo: data.bairro_proximo || [],
      direcionar_celula: data.direcionar_celula,
      campus_iecg: data.campus,
      status: "APELO_CADASTRADO",
      dias_semana: data.dias_semana || [],
      observacao: data.observacao || "",
    };

    await submitMutation.mutateAsync(payload);
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
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="container py-6 flex flex-col items-center gap-3">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg animate-fade-in">
            <Play className="w-8 h-8 text-white fill-white" />
          </div>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 tracking-tight">
              START IECG
            </h1>
            <p className="text-gray-600 text-sm md:text-base mt-1">
              Orientando um novo começo
            </p>
          </div>
        </div>
      </header>

      {/* Success Message */}
      {showSuccess && (
        <div className="container mt-6 animate-fade-in-up">
          <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-300 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              <h3 className="font-semibold text-green-900 text-lg">
                Inscrição realizada com sucesso!
              </h3>
            </div>
            <p className="text-green-800 text-sm">
              Obrigado por se inscrever. Em breve entraremos em contato através
              do WhatsApp informado.
            </p>
          </div>
        </div>
      )}

      {/* Main Form */}
      <main className="container flex-1 py-8">
        <Card className="max-w-2xl mx-auto p-6 md:p-8 shadow-2xl border border-gray-200 bg-white animate-fade-in-up">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">START</h2>
            <p className="text-sm text-gray-600 uppercase tracking-wide">
              Seja bem-vindo, aqui é um lugar de novos começos!
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Campus */}
            <div className="space-y-2">
              <Label htmlFor="campus">
                Campus IECG <span className="text-red-500">*</span>
              </Label>
              <Controller
                name="campus"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger
                      id="campus"
                      className="w-full border-2 border-gray-300 focus:border-blue-600"
                    >
                      <SelectValue placeholder="Escolher" />
                    </SelectTrigger>
                    <SelectContent>
                      {CAMPUS_OPTIONS.map(campus => (
                        <SelectItem key={campus} value={campus}>
                          {campus}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.campus && (
                <p className="text-sm text-red-600">{errors.campus.message}</p>
              )}
            </div>

            {/* Nome */}
            <div className="space-y-2">
              <Label htmlFor="nome">
                Queremos te conhecer. Insira seu nome completo:{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Input
                id="nome"
                placeholder="Seu nome completo"
                className="border-2 border-gray-300 focus:border-blue-600"
                {...register("nome")}
              />
              {errors.nome && (
                <p className="text-sm text-red-600">{errors.nome.message}</p>
              )}
            </div>

            {/* Idade */}
            <div className="space-y-2">
              <Label htmlFor="idade">
                Idade: <span className="text-red-500">*</span>
              </Label>
              <Input
                id="idade"
                type="number"
                placeholder="Sua idade"
                className="border-2 border-gray-300 focus:border-blue-600"
                {...register("idade")}
              />
              {errors.idade && (
                <p className="text-sm text-red-600">{errors.idade.message}</p>
              )}
            </div>

            {/* WhatsApp */}
            <div className="space-y-2">
              <Label htmlFor="whatsapp">
                WhatsApp | Número de Telefone:{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Input
                id="whatsapp"
                type="tel"
                placeholder="(99) 99999-9999"
                className="border-2 border-gray-300 focus:border-blue-600"
                {...register("whatsapp")}
                onChange={handleWhatsappChange}
              />
              {errors.whatsapp && (
                <p className="text-sm text-red-600">
                  {errors.whatsapp.message}
                </p>
              )}
            </div>

            {/* Rede */}
            <div className="space-y-2">
              <Label htmlFor="rede">
                Rede <span className="text-red-500">*</span>
              </Label>
              <Controller
                name="rede"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger
                      id="rede"
                      className="w-full border-2 border-gray-300 focus:border-blue-600"
                    >
                      <SelectValue placeholder="Selecione sua rede" />
                    </SelectTrigger>
                    <SelectContent>
                      {REDE_OPTIONS.map(rede => (
                        <SelectItem key={rede} value={rede}>
                          {rede}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.rede && (
                <p className="text-sm text-red-600">{errors.rede.message}</p>
              )}
            </div>

            {/* Decisão */}
            <div className="space-y-2">
              <Label htmlFor="decisao">
                Hoje, minha decisão foi: <span className="text-red-500">*</span>
              </Label>
              <Controller
                name="decisao"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger
                      id="decisao"
                      className="w-full border-2 border-gray-300 focus:border-blue-600"
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
                <p className="text-sm text-red-600">{errors.decisao.message}</p>
              )}
            </div>

            {/* Checkbox Direcionar Célula */}
            <div className="flex items-start space-x-3 bg-blue-50 p-4 rounded-lg border border-blue-200">
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
                <p className="text-xs text-gray-600">
                  Marque esta opção se deseja participar de uma célula próxima a
                  você
                </p>
              </div>
            </div>

            {/* Campos condicionais de localização */}
            {direcionarCelula && (
              <div className="space-y-6 bg-gray-50 p-4 rounded-lg border border-gray-200 animate-fade-in-up">
                <p className="text-sm font-medium text-gray-700">
                  Informações de localização
                </p>

                {/* Bairro */}
                <div className="space-y-2">
                  <Label htmlFor="bairro_apelo">
                    Bairro onde mora
                    {direcionarCelula && (
                      <span className="text-red-500"> *</span>
                    )}
                  </Label>
                  <Input
                    id="bairro_apelo"
                    placeholder="Seu bairro"
                    className="border-2 border-gray-300 focus:border-blue-600"
                    {...register("bairro_apelo")}
                  />
                  {errors.bairro_apelo && (
                    <p className="text-sm text-red-600">
                      {errors.bairro_apelo.message}
                    </p>
                  )}
                </div>

                {/* Cidade */}
                <div className="space-y-2">
                  <Label htmlFor="cidade_apelo">Cidade:</Label>
                  <Input
                    id="cidade_apelo"
                    placeholder="Sua cidade"
                    className="border-2 border-gray-300 focus:border-blue-600"
                    {...register("cidade_apelo")}
                  />
                </div>

                {/* Estado */}
                <div className="space-y-2">
                  <Label htmlFor="estado_apelo">Estado:</Label>
                  <Input
                    id="estado_apelo"
                    placeholder="Seu estado"
                    className="border-2 border-gray-300 focus:border-blue-600"
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
                      className="border-2 border-gray-300 focus:border-blue-600"
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
                          className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          <span>{bairro}</span>
                          <button
                            type="button"
                            onClick={() => removeBairroProximo(bairro)}
                            className="hover:bg-blue-200 rounded-full p-0.5 transition-colors"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Dias de preferência */}
                <div className="space-y-2">
                  <Label>Dias de preferência (opcional)</Label>
                  <p className="text-xs text-gray-500">
                    Selecione um ou mais dias. Quarta e domingo estão bloqueados.
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
                              className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2"
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
                              <span className={`text-sm ${dia.disabled ? "text-gray-400" : "text-gray-700"}`}>
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
                    className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-600 focus:outline-none"
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
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              disabled={submitMutation.isPending}
            >
              {submitMutation.isPending ? "Enviando..." : "Me Inscrever"}
            </Button>

            <p className="text-xs text-center text-gray-500 mt-4">
              * Indica que a pergunta é obrigatória
            </p>
          </form>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 mt-12">
        <div className="container text-center">
          <p className="text-sm text-gray-600">
            © 2025 IECG - Igreja Evangélica Comunidade Global
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Orientando um novo começo
          </p>
        </div>
      </footer>
    </div>
  );
}
