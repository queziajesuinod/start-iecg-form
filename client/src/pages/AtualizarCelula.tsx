import { useEffect, useMemo, useState, type ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { useLocation } from "wouter";

const GOOGLE_GEOCODE_KEY = "AIzaSyBs7pQorgiixQJBhXFQFY4_ouvlFXlgFEs";

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

const buildCelulaPayload = (data: CelulaForm, dias: string[]) => ({
  celula: data.celula || "",
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
  dia: dias.join(", "),
  lat: parseCoordinate(data.lat),
  lon: parseCoordinate(data.lon),
});

function resolveContato(data: unknown): CelulaForm | null {
  if (!data || typeof data !== "object") return null;
  const item = Array.isArray(data) ? data[0] : data;
  if (!item || typeof item !== "object") return null;
  const candidate = "celula" in item ? (item as CelulaForm) : ("celula" in (item as any) ? (item as any).celula : null);
  if (!candidate) return null;
  return {
    ...initialForm,
    ...candidate,
    lat: (candidate as any).lat?.toString?.() ?? "",
    lon: (candidate as any).lon?.toString?.() ?? "",
    dia: (candidate as any).dia ?? "",
    id: (candidate as any).id?.toString?.() ?? "",
    campusId: (candidate as any).campusId?.toString?.() ?? "",
    pastor_campus: (candidate as any).pastor_campus ?? "",
  };
}

export default function AtualizarCelula() {
  const [contatoBusca, setContatoBusca] = useState("");
  const [formData, setFormData] = useState<CelulaForm>(initialForm);
  const [diasSelecionados, setDiasSelecionados] = useState<string[]>([]);
  const [geoQuery, setGeoQuery] = useState("");
  const [geoLoading, setGeoLoading] = useState(false);
  const [location] = useLocation();
  const [pendingPhoneSearch, setPendingPhoneSearch] = useState<string | null>(null);

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

  const fetchGeocode = async (query: string) => {
    const params = new URLSearchParams({
      address: query,
      key: GOOGLE_GEOCODE_KEY,
    });
    const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?${params.toString()}`);
    if (!res.ok) {
      throw new Error("Falha ao consultar o Google Maps.");
    }
    const data = await res.json();
    if (!data || data.status !== "OK" || !Array.isArray(data.results) || data.results.length === 0) {
      return null;
    }
    const result = data.results[0];
    const location = result.geometry?.location || {};
    const components = result.address_components || [];
    const getComponent = (types: string[]) =>
      components.find(comp => types.every(type => comp.types.includes(type)))?.long_name || "";
    const bairro =
      getComponent(["sublocality", "political"]) ||
      getComponent(["neighborhood", "political"]) ||
      "";
    const logradouro = getComponent(["route"]) || "";
    const numeroEncontrado =
      getComponent(["street_number"]) ||
      getComponent(["premise"]) ||
      getComponent(["subpremise"]) ||
      "";
    const cidade =
      getComponent(["locality"]) ||
      getComponent(["administrative_area_level_2"]) ||
      "";
    const estado =
      getComponent(["administrative_area_level_1"]) ||
      "";
    const cepEncontrado = getComponent(["postal_code"]) || "";
    return {
      lat: location.lat,
      lon: location.lng,
      bairro,
      logradouro,
      numeroEncontrado,
      cidade,
      estado,
      cepEncontrado,
    };
  };

  const geocodeAndFill = async (query: string, showToast = false) => {
    try {
      const geo = await fetchGeocode(query);
      if (!geo) {
        if (showToast) toast.error("Nenhum resultado encontrado para esse endereço/CEP.");
        return;
      }

      setFormData(prev => ({
        ...prev,
        lat: geo.lat ?? prev.lat,
        lon: geo.lon ?? prev.lon,
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
      const celula = resolveContato(result.data?.data);
      if (!celula || !celula.id) {
        toast.error("Nenhum dado encontrado para o contato informado.");
        return;
      }
      setFormData({
        ...initialForm,
        ...celula,
        cel_lider: celula.cel_lider ? formatPhone(celula.cel_lider) : "",
        horario: celula.horario ? formatHorario(celula.horario) : "",
      });
      toast.success("Dados da célula carregados.");
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
    try {
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

      let mergedForm = { ...formData };
      if (query) {
        const geo = await fetchGeocode(query);
        if (geo) {
          mergedForm = {
            ...formData,
            lat: geo.lat ?? formData.lat,
            lon: geo.lon ?? formData.lon,
            endereco: geo.logradouro || formData.endereco,
            numero: formData.numero?.trim() ? formData.numero : geo.numeroEncontrado || formData.numero,
            bairro: geo.bairro || formData.bairro,
            cidade: geo.cidade || formData.cidade,
            estado: geo.estado || formData.estado,
            cep: geo.cepEncontrado || formData.cep,
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="container py-10">
        <div className="max-w-5xl mx-auto space-y-6">
          <header className="text-center space-y-2">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold">START IECG</p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Gestão de Células</h1>
            <p className="text-slate-600">Busque pelo e-mail ou celular do líder e edite as informações necessárias.Caso não encontre a sua célula, faça o cadastro</p>
          </header>

          <Card className="p-6 shadow-xl border border-slate-200 bg-white">
            <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
              <div className="flex-1 w-full">
                <Label htmlFor="contato" className="text-sm font-medium text-slate-700">
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
            <p className="text-xs text-slate-500 mt-2">
              A busca aceita o e-mail do líder ou o celular formatado com DDD. Após atualizar o endereço, a latitude e
              longitude são preenchidas automaticamente.
            </p>
          </Card>

          <Card className="p-6 shadow-xl border border-slate-200 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="celula">Nome da célula</Label>
                <Input id="celula" value={formData.celula} onChange={handleInputChange("celula")} />
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
                      <SelectItem value="" disabled>
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
                <Label htmlFor="lideranca">Liderança</Label>
                <Input id="lideranca" value={formData.lideranca} onChange={handleInputChange("lideranca")} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pastor_geracao">Pastor de geração</Label>
                <Input
                  id="pastor_geracao"
                  value={formData.pastor_geracao}
                  onChange={handleInputChange("pastor_geracao")}
                />
              </div>

              <div className="space-y-2">
                <Label>Dia da semana</Label>
                <div className="grid grid-cols-2 gap-2">
                  {DIAS_SEMANA.map(dia => (
                    <label
                      key={dia}
                      className={cn(
                        "flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 cursor-pointer",
                        diasSelecionados.includes(dia) && "border-blue-500 bg-blue-50"
                      )}
                    >
                      <Checkbox checked={diasSelecionados.includes(dia)} onCheckedChange={() => toggleDia(dia)} />
                      <span className="text-sm text-slate-700">{dia}</span>
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
        </div>
      </div>
    </div>
  );
}
