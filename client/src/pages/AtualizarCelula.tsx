import { useEffect, useMemo, useState, type ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MemberCombobox, type LiderancaOption } from "@/components/MemberCombobox";
import { cn } from "@/lib/utils";
import { geocodeAddress } from "@/lib/geocode";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { useLocation } from "wouter";
import axios, { AxiosError } from "axios";
import { searchPublicUser, upsertLeaderForCelula } from "@/lib/celulaLeaderApi";

type CelulaForm = {
  id: string;
  celula: string;
  rede: string;
  lider: string;
  email_lider: string;
  cel_lider: string;
  anfitriao: string;
  campus: string;
  numero: string;
  endereco: string;
  cep: string;
  bairro: string;
  cidade: string;
  estado: string;
  lideranca: string;
  pastor_geracao: string;
  dia: string;
  lat: string;
  lon: string;
  horario: string;
  campusId?: string;
  pastor_campus?: string;
  liderancaMemberId?: string;
  pastorGeracaoMemberId?: string;
  pastorCampusMemberId?: string;
  leaderId?: string;
  ativo?: boolean;
};

const initialForm: CelulaForm = {
  id: "",
  celula: "",
  rede: "",
  lider: "",
  email_lider: "",
  cel_lider: "",
  anfitriao: "",
  campus: "",
  numero: "",
  endereco: "",
  cep: "",
  bairro: "",
  cidade: "",
  estado: "",
  lideranca: "",
  pastor_geracao: "",
  dia: "",
  lat: "",
  lon: "",
  horario: "",
  campusId: "",
  pastor_campus: "",
  liderancaMemberId: "",
  pastorGeracaoMemberId: "",
  pastorCampusMemberId: "",
  ativo: true,
  leaderId: "",
};

type CampusOption = {
  id?: string | number;
  nome?: string;
  campus?: string;
};

const getCampusName = (option: CampusOption) => option.nome || option.campus || "";

const REDE_OPTIONS = [
  "RELEVANTE JUNIORS RAPAZES",
  "RELEVANTEEN RAPAZES",
  "RELEVANTEEN MOÇAS",
  "JUVENTUDE RELEVANTE RAPAZES",
  "MULHERES IECG",
  "IECG KIDS",
  "HOMENS IECG",
  "JUVENTUDE RELEVANTE MOÇAS",
  "RELEVANTE JUNIORS MOÇAS",
];

const DIAS_SEMANA = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
const DEFAULT_LEADER_ROLE = "7d47d03a-a7aa-4907-b8b9-8fcf87bd52dc";

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const formatHorario = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  const [hh, mm] = [digits.slice(0, 2), digits.slice(2, 4)];
  if (digits.length <= 2) return hh;
  return `${hh}:${mm}`;
};

const cleanDigits = (value?: string) => (value ? value.replace(/\D/g, "") : "");

const parseCoordinate = (value?: string | number | null) => {
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  if (!value) return null;
  const numeric = Number(String(value).replace(",", "."));
  return Number.isFinite(numeric) ? numeric : null;
};

// Nome da célula é gerado automaticamente: "Célula Apostólica {Rede} {Bairro}".
const buildNomeCelula = (rede?: string, bairro?: string) =>
  ["Célula Apostólica", (rede || "").trim(), (bairro || "").trim()]
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

const buildCelulaPayload = (data: CelulaForm, dias: string[]) => ({
  celula: buildNomeCelula(data.rede, data.bairro) || data.celula || "",
  rede: data.rede || "",
  lider: data.lider || "",
  email_lider: data.email_lider || "",
  cel_lider: cleanDigits(data.cel_lider),
  anfitriao: data.anfitriao || "",
  campus: data.campus || "",
  campusId: (data as any).campusId || "",
  numero: data.numero || "",
  endereco: data.endereco || "",
  cep: data.cep || "",
  bairro: data.bairro || "",
  cidade: data.cidade || "",
  estado: data.estado || "",
  lideranca: data.lideranca || "",
  pastor_geracao: data.pastor_geracao || "",
  pastor_campus: (data as any).pastor_campus || "",
  liderancaMemberId: (data as any).liderancaMemberId || undefined,
  pastorGeracaoMemberId: (data as any).pastorGeracaoMemberId || undefined,
  pastorCampusMemberId: (data as any).pastorCampusMemberId || undefined,
  dia: dias.join(", "),
  horario: data.horario || "",
  lat: parseCoordinate(data.lat),
  lon: parseCoordinate(data.lon),
  leaderId: data.leaderId || undefined,
});

function extractCelulaRaw(entry: unknown): Record<string, unknown> | null {
  if (!entry || typeof entry !== "object") return null;
  if ("celula" in entry && typeof (entry as any).celula === "object") {
    return (entry as any).celula;
  }
  return entry as Record<string, unknown>;
}

function normalizeCelula(entry: unknown): CelulaForm | null {
  const raw = extractCelulaRaw(entry);
  if (!raw) return null;
  return {
    ...initialForm,
    ...raw,
    lat: (raw as any).lat?.toString?.() ?? "",
    lon: (raw as any).lon?.toString?.() ?? "",
    dia: (raw as any).dia ?? "",
    id: (raw as any).id?.toString?.() ?? "",
    campusId: (raw as any).campusId?.toString?.() ?? "",
    pastor_campus: (raw as any).pastor_campus ?? "",
    ativo: (raw as any).ativo ?? true,
  };
}

function buildFormFromCelula(celula: CelulaForm): CelulaForm {
  return {
    ...initialForm,
    ...celula,
    cel_lider: celula.cel_lider ? formatPhone(celula.cel_lider) : "",
    horario: celula.horario ? formatHorario(celula.horario) : "",
  };
}

function buildCelulaList(data: unknown): CelulaForm[] {
  if (data === null || data === undefined) return [];
  const items = Array.isArray(data) ? data : [data];
  return items
    .map(normalizeCelula)
    .filter((value): value is CelulaForm => Boolean(value));
}

export default function AtualizarCelula() {
  const [contatoBusca, setContatoBusca] = useState("");
  const [formData, setFormData] = useState<CelulaForm>(initialForm);
  const [diasSelecionados, setDiasSelecionados] = useState<string[]>([]);
  const [geoQuery, setGeoQuery] = useState("");
  const [geoLoading, setGeoLoading] = useState(false);
  const [location] = useLocation();
  const [pendingPhoneSearch, setPendingPhoneSearch] = useState<string | null>(null);
  const [resultadoMultiplo, setResultadoMultiplo] = useState<CelulaForm[] | null>(null);
  const [mostrarSelecao, setMostrarSelecao] = useState(false);
  const [statusAlterandoId, setStatusAlterandoId] = useState<string | null>(null);
  const [ensuringLeader, setEnsuringLeader] = useState(false);

  const contatoEhEmail = useMemo(() => contatoBusca.includes("@"), [contatoBusca]);
  const contatoSanitizado = useMemo(() => {
    const trimmed = (contatoBusca || "").trim();
    if (!trimmed) return "";
    if (trimmed.includes("@")) {
      return trimmed.replace(/\s+/g, "");
    }
    return trimmed.replace(/\D/g, "");
  }, [contatoBusca]);

  useEffect(() => {
    const dias = (formData.dia || "")
      .split(",")
      .map(d => (d ?? "").trim())
      .filter(Boolean);
    setDiasSelecionados(dias);
  }, [formData.dia]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const phoneParam = params.get("phone")?.trim();
    if (!phoneParam) {
      return;
    }

    const digits = phoneParam.replace(/\D/g, "");
    if (!digits) {
      return;
    }

    setContatoBusca(formatPhone(digits));
    setPendingPhoneSearch(digits);
  }, [location]);

  const buscarCelula = trpc.celulas.buscarPorContato.useQuery(
    { contato: contatoSanitizado },
    { enabled: false, retry: false }
  );

  const campusQuery = trpc.celulas.listarCampi.useQuery();
  const campusOptions = useMemo<CampusOption[]>(() => {
    const data = campusQuery.data;
    return Array.isArray(data) ? data : [];
  }, [campusQuery.data]);

  const atualizarCelula = trpc.celulas.atualizar.useMutation();
  const criarCelula = trpc.celulas.criar.useMutation();

  const hierarquiaQuery = trpc.celulas.hierarquiaOptions.useQuery();
  const liderancasOptions = useMemo<LiderancaOption[]>(() => {
    const data = hierarquiaQuery.data?.liderancas;
    return Array.isArray(data) ? (data as LiderancaOption[]) : [];
  }, [hierarquiaQuery.data]);

  // Ao escolher a Liderança Apostólica, o Pastor de Geração e o Pastor de Campus
  // são preenchidos automaticamente a partir do cadastro dela (não editáveis).
  const handleLiderancaChange = (value: string) => {
    const selected = liderancasOptions.find(l => l.id === value);
    setFormData(prev => ({
      ...prev,
      liderancaMemberId: value,
      lideranca: selected?.fullName || "",
      pastorGeracaoMemberId: selected?.pastorGeracaoMemberId || "",
      pastor_geracao: selected?.pastorGeracao?.fullName || "",
      pastorCampusMemberId: selected?.pastorCampusMemberId || "",
      pastor_campus: selected?.pastorCampus?.fullName || "",
    }));
  };

  const geocodeAndFill = async (query: string, showToast = false) => {
    try {
      const geo = await geocodeAddress(query);
      if (!geo) {
        if (showToast) toast.error("Nenhum resultado encontrado para esse endereço/CEP.");
        return null;
      }

      setFormData(prev => ({
        ...prev,
        lat: geo.lat !== undefined ? String(geo.lat) : prev.lat,
        lon: geo.lon !== undefined ? String(geo.lon) : prev.lon,
        endereco: geo.logradouro || prev.endereco,
        numero: prev.numero?.trim() ? prev.numero : geo.numeroEncontrado || prev.numero,
        bairro: geo.bairro || prev.bairro,
        cidade: geo.cidade || prev.cidade,
        estado: geo.estado || prev.estado,
        cep: geo.cepEncontrado || prev.cep,
      }));
      setGeoQuery(query);
      if (showToast) toast.success("Endereço e coordenadas atualizados.");
      return geo;
    } catch (err) {
      console.error("Erro ao buscar coordenadas:", err);
      if (showToast) toast.error("Erro ao buscar coordenadas.");
      return null;
    }
  };

  const handleBuscarEndereco = async () => {
    const queryParts = [
      formData.endereco,
      formData.numero,
      formData.cep,
      formData.bairro,
      formData.cidade,
      formData.estado,
    ]
      .map(p => (p ?? "").trim())
      .filter(Boolean);
    const query = queryParts.join(" ");
    if (!query) {
      toast.error("Informe ao menos CEP ou endereço para buscar.");
      return;
    }
    setGeoLoading(true);
    await geocodeAndFill(query, true);
    setGeoLoading(false);
  };

  const handleInputChange = (field: keyof CelulaForm) => (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (field === "cel_lider") value = formatPhone(value);
    if (field === "horario") value = formatHorario(value);
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCampusChange = (value: string) => {
    const selected = campusOptions.find(option => {
      if (option.id !== undefined && option.id !== null) {
        return String(option.id) === value;
      }
      return getCampusName(option) === value;
    });
    setFormData(prev => ({
      ...prev,
      campusId: value,
      campus: selected ? getCampusName(selected) : prev.campus,
    }));
  };

  const toggleDia = (dia: string) => {
    setDiasSelecionados(prev => (prev.includes(dia) ? prev.filter(d => d !== dia) : [...prev, dia]));
  };

  const ensureLeaderUserId = async () => {
    const email = formData.email_lider?.trim();
    const telefone = cleanDigits(formData.cel_lider);
    if (!email && !telefone) {
      return undefined;
    }
    setEnsuringLeader(true);
    try {
      let found = null;
      try {
        found = await searchPublicUser({
          email: email || undefined,
          telefone: telefone || undefined,
        });
      } catch (error) {
        const axiosErr = error as AxiosError;
        if (axiosErr.response?.status !== 404) {
          throw error;
        }
        found = null;
      }
      if (found?.id) {
        setFormData(prev => ({ ...prev, leaderId: found.id }));
        return found.id;
      }
      const response = await upsertLeaderForCelula({
        lider: formData.lider || "",
        email_lider: email || "",
        cel_lider: telefone || "",
        perfilId: DEFAULT_LEADER_ROLE,
        cpf: "0000000",
        is_lider_celula: true,
      });
      if (response?.leader?.id) {
        setFormData(prev => ({ ...prev, leaderId: response.leader.id }));
        return response.leader.id;
      }
    } catch (error) {
      console.error("Erro ao garantir usuário líder:", error);
      toast.error("Não foi possível garantir o cadastro do usuário do líder.");
    } finally {
      setEnsuringLeader(false);
    }
    return undefined;
  };

  const handleSelecionarCelula = (celula: CelulaForm) => {
    setFormData(buildFormFromCelula(celula));
    setMostrarSelecao(false);
    toast.success("Célula selecionada para atualização.");
  };

  const handleToggleCelulaAtiva = async (celula: CelulaForm) => {
    if (!celula.id) {
      toast.error("Célula sem identificador não pode ser atualizada.");
      return;
    }
    const novoStatus = celula.ativo === false ? true : false;
    setStatusAlterandoId(celula.id);
    try {
      await atualizarCelula.mutateAsync({ id: celula.id, dados: { ativo: novoStatus } });
      setResultadoMultiplo(prev =>
        prev
          ? prev.map(item => (item.id === celula.id ? { ...item, ativo: novoStatus } : item))
          : prev
      );
      if (formData.id === celula.id) {
        setFormData(prev => ({ ...prev, ativo: novoStatus }));
      }
      toast.success(`Celula ${novoStatus ? "ativada" : "inativada"} com sucesso.`);
    } catch (err) {
      console.error("Erro ao alterar status da célula", err);
      toast.error("Erro ao alterar o status da célula.");
    } finally {
      setStatusAlterandoId(null);
    }
  };

  const multiploCount = resultadoMultiplo?.length ?? 0;
  const hasMultipleResultados = multiploCount > 1;
  const exibindoSelecao = hasMultipleResultados && mostrarSelecao;

  const handleBuscar = async () => {
    const trimmed = contatoSanitizado;
    if (!trimmed) {
      toast.error("Digite um e-mail ou celular para buscar a célula.");
      return;
    }
    try {
      const result = await buscarCelula.refetch();
      if (result.error) {
        toast.error(result.error.message || "Não foi possível localizar a célula.");
        return;
      }
      const celulas = buildCelulaList(result.data?.data);
      if (celulas.length === 0) {
        setResultadoMultiplo(null);
        setMostrarSelecao(false);
        toast.error("Nenhum dado encontrado para o contato informado.");
        return;
      }
      if (celulas.length === 1) {
        setResultadoMultiplo(null);
        setMostrarSelecao(false);
        setFormData(buildFormFromCelula(celulas[0]));
        toast.success("Dados da célula carregados.");
        return;
      }
      setResultadoMultiplo(celulas);
      setMostrarSelecao(true);
      setFormData(initialForm);
      toast.info(
        `Foram encontradas ${celulas.length} células para esse contato. Escolha a que deseja atualizar ou inativar.`
      );
    } catch (err) {
      console.error("Erro na busca", err);
      toast.error("Erro ao buscar célula.");
    }
  };

  useEffect(() => {
    if (!pendingPhoneSearch) {
      return;
    }

    if (contatoSanitizado !== pendingPhoneSearch) {
      return;
    }

    void handleBuscar().finally(() => {
      setPendingPhoneSearch(null);
    });
  }, [pendingPhoneSearch, contatoSanitizado, handleBuscar]);

  useEffect(() => {
    if (!campusOptions.length || formData.campusId) {
      return;
    }

    const normalizedFormCampus = (formData.campus || "").trim().toLowerCase();
    if (!normalizedFormCampus) {
      return;
    }

    const match = campusOptions.find(option => {
      const optionName = getCampusName(option).trim().toLowerCase();
      return optionName && optionName === normalizedFormCampus;
    });

    if (match && match.id !== undefined && match.id !== null) {
      setFormData(prev => ({
        ...prev,
        campusId: String(match.id),
        campus: getCampusName(match) || prev.campus,
      }));
    }
  }, [campusOptions, formData.campus, formData.campusId]);

  const handleSalvar = async () => {
    if (!formData.campusId || !(formData.campus || "").trim()) {
      toast.error("Selecione um campus válido antes de salvar.");
      return;
    }
    // O nome da célula é gerado a partir da rede e do bairro, então ambos são obrigatórios.
    if (!(formData.rede || "").trim() || !(formData.bairro || "").trim()) {
      toast.error("Informe a rede e o bairro para gerar o nome da célula.");
      return;
    }

    const leaderId = await ensureLeaderUserId();
    const baseForm = leaderId ? { ...formData, leaderId } : formData;

    try {
      const queryParts = [
        baseForm.endereco,
        baseForm.numero,
        baseForm.cep,
        baseForm.bairro,
        baseForm.cidade,
        baseForm.estado,
      ]
        .map(p => (p ?? "").trim())
        .filter(Boolean);
      const query = queryParts.join(" ");

      let mergedForm = { ...baseForm };
        if (query) {
          const geo = await geocodeAddress(query);
          if (geo) {
            mergedForm = {
              ...baseForm,
              lat: geo.lat !== undefined ? String(geo.lat) : baseForm.lat,
              lon: geo.lon !== undefined ? String(geo.lon) : baseForm.lon,
              endereco: geo.logradouro || baseForm.endereco,
              numero: baseForm.numero?.trim() ? baseForm.numero : geo.numeroEncontrado || baseForm.numero,
              bairro: geo.bairro || baseForm.bairro,
              cidade: geo.cidade || baseForm.cidade,
              estado: geo.estado || baseForm.estado,
              cep: geo.cepEncontrado || baseForm.cep,
            };
            setFormData(mergedForm);
          }
      }

      const payload = buildCelulaPayload(mergedForm, diasSelecionados);
      if (mergedForm.id) {
        await atualizarCelula.mutateAsync({ id: mergedForm.id, dados: payload });
        toast.success("Célula atualizada com sucesso.");
      } else {
        const result = await criarCelula.mutateAsync(payload);
        toast.success("Célula criada com sucesso.");
        const responseData = result?.data;
        let createdId: string | undefined;
        if (responseData && typeof responseData === "object") {
          createdId = (responseData as any).id ?? (responseData as any).celula_id;
          if (!createdId && (responseData as any).celula?.id) {
            createdId = (responseData as any).celula.id;
          }
        } else if (typeof responseData === "string" || typeof responseData === "number") {
          createdId = responseData.toString();
        }
        if (createdId) {
          setFormData(prev => ({ ...prev, id: createdId }));
        }
      }
    } catch (err) {
      console.error("Erro ao salvar", err);
      toast.error("Erro ao salvar os dados.");
    }
  };

  const isEditing = Boolean(formData.id);
  const isSaving = atualizarCelula.isPending || criarCelula.isPending;
  const buttonLabel = isSaving ? (isEditing ? "Atualizando..." : "Criando...") : isEditing ? "Atualizar célula" : "Criar célula";

  return (
    <div className="min-h-dvh bg-gradient-to-b from-background to-muted/40">
      <div className="container py-10">
        <div className="max-w-5xl mx-auto space-y-6 animate-fade-in-up">
          <header className="text-center space-y-2">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">START IECG</p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Gestão de Células</h1>
            <p className="text-muted-foreground">Busque pelo e-mail ou celular do líder e edite as informações necessárias. Caso não encontre a sua célula, faça o cadastro</p>
          </header>

          <Card className="p-6 shadow-md border border-border">
            <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
              <div className="flex-1 w-full">
                <Label htmlFor="contato" className="text-sm font-medium text-foreground">
                  E-mail ou celular do líder
                </Label>
                <Input
                  id="contato"
                  placeholder={contatoEhEmail ? "email@exemplo.com" : "(67) 99999-9999"}
                  value={contatoBusca}
                  onChange={e => {
                    const next = e.target.value;
                    const isEmail = /[a-zA-Z@]/.test(next);
                    setContatoBusca(isEmail ? next : formatPhone(next));
                  }}
                  className="mt-1"
                />
              </div>
              <Button onClick={handleBuscar} disabled={buscarCelula.isFetching} className="md:mt-6 w-full md:w-auto">
                {buscarCelula.isFetching ? "Buscando..." : "Buscar"}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              A busca aceita o e-mail do líder ou o celular formatado com DDD. Após atualizar o endereço, a latitude e
              longitude são preenchidas automaticamente.
            </p>
          </Card>


          {exibindoSelecao && (
            <Card className="p-6 shadow-md border border-border">
              <div className="mb-4">
                <p className="text-lg font-semibold text-foreground">Escolha a célula correta</p>
                <p className="text-sm text-muted-foreground">
                  Foram encontrados {resultadoMultiplo?.length ?? 0} registros para esse contato.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {resultadoMultiplo?.map((celula, index) => (
                  <div
                    key={celula.id || index}
                    className="flex flex-col gap-3 rounded-2xl border border-border bg-muted/50 p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-lg font-semibold text-foreground">
                          {celula.celula || `Celula ${index + 1}`}
                        </p>
                        <p className="text-sm text-muted-foreground">{celula.rede || "-"}</p>
                      </div>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                          celula.ativo === false ? "bg-destructive/10 text-destructive border border-destructive/25" : "bg-success/10 text-success border border-success/25"
                        }`}
                      >
                        {celula.ativo === false ? "Inativa" : "Ativa"}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">Lider: {celula.lider || "-"}</p>
                    <p className="text-sm text-muted-foreground">
                      Celular: {celula.cel_lider ? formatPhone(celula.cel_lider) : "-"}
                    </p>
                    <p className="text-sm text-muted-foreground">Campus: {celula.campus || "-"}</p>
                    <div className="flex flex-col gap-2 pt-2 sm:flex-row">
                      <Button className="flex-1" onClick={() => handleSelecionarCelula(celula)}>
                        Atualizar
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => handleToggleCelulaAtiva(celula)}
                        disabled={!celula.id || statusAlterandoId === celula.id}
                      >
                        {celula.ativo === false ? "Reativar" : "Inativar"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {hasMultipleResultados && !mostrarSelecao && (
            <div className="flex justify-end">
              <Button variant="outline" className="w-full md:w-auto" onClick={() => setMostrarSelecao(true)}>
                Mostrar resultados da busca
              </Button>
            </div>
          )}

          {!exibindoSelecao && (
            <Card className="p-6 shadow-md border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Nome da célula</Label>
                <div className="flex h-10 items-center rounded-md border border-border bg-muted/50 px-3 text-sm text-muted-foreground">
                  {buildNomeCelula(formData.rede, formData.bairro) || "Preencha rede e bairro"}
                </div>
                <p className="text-xs text-muted-foreground">
                  Gerado automaticamente a partir da rede e do bairro.
                </p>
              </div>

              <div className="space-y-2">
                <Label>Rede</Label>
                <Select value={formData.rede} onValueChange={value => setFormData(prev => ({ ...prev, rede: value }))}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione a rede" />
                  </SelectTrigger>
                  <SelectContent>
                    {REDE_OPTIONS.map(option => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="lider">Líder</Label>
                <Input id="lider" value={formData.lider} onChange={handleInputChange("lider")} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email_lider">E-mail do líder</Label>
                <Input id="email_lider" value={formData.email_lider} onChange={handleInputChange("email_lider")} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cel_lider">Celular do líder</Label>
                <Input id="cel_lider" value={formData.cel_lider} onChange={handleInputChange("cel_lider")} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="anfitriao">Anfitrião</Label>
                <Input id="anfitriao" value={formData.anfitriao} onChange={handleInputChange("anfitriao")} />
              </div>

              <div className="space-y-2">
                <Label>Campus</Label>
                <Select
                  value={formData.campusId || ""}
                  onValueChange={handleCampusChange}
                  disabled={campusQuery.isFetching && !campusOptions.length}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue
                      placeholder={
                        campusQuery.isFetching ? "Carregando campus..." : "Selecione o campus"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {campusOptions.length > 0 ? (
                      campusOptions.map((option, index) => {
                        const campusValueRaw = option.id ?? getCampusName(option);
                        const campusValue =
                          campusValueRaw !== undefined && campusValueRaw !== null
                            ? String(campusValueRaw)
                            : String(index);
                        const displayName = getCampusName(option) || `Campus ${index + 1}`;
                        return (
                          <SelectItem key={`campus-${campusValue}-${index}`} value={campusValue}>
                            {displayName}
                          </SelectItem>
                        );
                      })
                    ) : (
                      <SelectItem value="__no-campus" disabled>
                        {campusQuery.isError ? "Erro ao carregar campus" : "Nenhum campus disponível"}
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="endereco">Endereço</Label>
                <Input id="endereco" value={formData.endereco} onChange={handleInputChange("endereco")} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="numero">Número</Label>
                <Input id="numero" value={formData.numero} onChange={handleInputChange("numero")} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cep">CEP</Label>
                <div className="flex gap-2">
                  <Input id="cep" value={formData.cep} onChange={handleInputChange("cep")} />
                  <Button type="button" variant="outline" onClick={handleBuscarEndereco} disabled={geoLoading}>
                    {geoLoading ? "Buscando..." : "Buscar no mapa"}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bairro">Bairro</Label>
                <Input id="bairro" value={formData.bairro} onChange={handleInputChange("bairro")} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cidade">Cidade</Label>
                <Input id="cidade" value={formData.cidade} onChange={handleInputChange("cidade")} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="estado">Estado</Label>
                <Input id="estado" value={formData.estado} onChange={handleInputChange("estado")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="liderancaMemberId">Liderança Apostólica</Label>
                <MemberCombobox
                  id="liderancaMemberId"
                  options={liderancasOptions}
                  value={formData.liderancaMemberId}
                  onSelect={handleLiderancaChange}
                  placeholder="Selecione a liderança"
                  searchPlaceholder="Buscar liderança pelo nome..."
                  emptyText={hierarquiaQuery.isError ? "Erro ao carregar." : "Nenhuma liderança encontrada."}
                  loading={hierarquiaQuery.isLoading}
                />
                <p className="text-xs text-muted-foreground">
                  Ao selecionar a liderança, o Pastor de Geração e o Pastor de Campus são preenchidos
                  automaticamente.
                </p>
              </div>

              <div className="space-y-2">
                <Label>Pastor de geração</Label>
                <div className="flex h-10 items-center rounded-md border border-border bg-muted/50 px-3 text-sm text-muted-foreground">
                  {formData.pastor_geracao || "Preenchido ao selecionar a liderança"}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Pastor de campus</Label>
                <div className="flex h-10 items-center rounded-md border border-border bg-muted/50 px-3 text-sm text-muted-foreground">
                  {formData.pastor_campus || "Preenchido ao selecionar a liderança"}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Dia da semana</Label>
                <div className="grid grid-cols-2 gap-2">
                  {DIAS_SEMANA.map(dia => (
                    <label
                      key={dia}
                      className={cn(
                        "flex items-center gap-2 rounded-md border border-border px-3 py-2 cursor-pointer",
                        diasSelecionados.includes(dia) && "border-primary bg-primary/5"
                      )}
                    >
                      <Checkbox checked={diasSelecionados.includes(dia)} onCheckedChange={() => toggleDia(dia)} />
                      <span className="text-sm text-foreground">{dia}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="horario">Horário</Label>
                <Input
                  id="horario"
                  placeholder="HH:MM"
                  maxLength={5}
                  value={formData.horario}
                  onChange={handleInputChange("horario")}
                />
              </div>

            </div>

            <Button className="mt-6 w-full" onClick={handleSalvar} disabled={isSaving}>
              {buttonLabel}
            </Button>
          </Card>
          )}

        </div>
      </div>
    </div>
  );
}
