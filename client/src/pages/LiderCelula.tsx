import { useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Loader2, User } from 'lucide-react';
import {
  LeaderCelulaRecord,
  LeaderSummary,
  buscarLeaderPorContato,
  buscarUsuarioPorId,
  linkLeaderSpouse,
  unlinkLeaderSpouse,
  upsertLeaderForCelula,
} from '@/lib/celulaLeaderApi';
import { geocodeAddress } from '@/lib/geocode';

const MARITAL_OPTIONS = [
  { value: 'solteiro', label: 'Solteiro(a)' },
  { value: 'casado', label: 'Casado(a)' },
  { value: 'divorciado', label: 'Divorciado(a)' },
  { value: 'viuvo', label: 'Viúvo(a)' },
  { value: 'separado', label: 'Separado(a)' },
];

const EDUCATION_OPTIONS = [
  'ANALFABETO',
  'ENSINO FUNDAMENTAL INCOMPLETO',
  'ENSINO FUNDAMENTAL COMPLETO',
  'ENSINO MÉDIO INCOMPLETO',
  'ENSINO MÉDIO COMPLETO',
  'ENSINO SUPERIOR INCOMPLETO',
  'ENSINO SUPERIOR COMPLETO',
];

const SCHOOL_OPTIONS = [
  'Escola de Fundamentos',
  'Liderança Avançada 1',
  'Liderança Avançada 2',
  'Liderança Avançada 3',
];

const PHOTO_PREVIEW_SIZE = 160;
const PHOTO_EXPORT_SIZE = PHOTO_PREVIEW_SIZE * 2;

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const cleanDigits = (value?: string) => (value ? value.replace(/\D/g, '') : '');
const toDataUrl = (value?: string | null) => {
  if (!value) return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return trimmed.startsWith('data:') ? trimmed : `data:image/jpeg;base64,${trimmed}`;
};
const getLeaderImage = (leader?: LeaderSummary | null) => toDataUrl(leader?.image ?? leader?.foto);
const getLeaderSpouse = (leader?: LeaderSummary | null) =>
  leader?.spouse ?? leader?.conjuge ?? leader?.partner ?? null;

const getLeaderSpouseId = (leader?: LeaderSummary | null) => {
  if (!leader) return null;
  const candidates = [
    leader.conjuge_id,
    leader.conjugeId,
    leader.spouse_id,
    leader.spouseId,
    leader.partner_id,
    leader.partnerId,
  ];
  for (const candidate of candidates) {
    if (candidate && typeof candidate === 'string' && candidate.trim().length) {
      return candidate.trim();
    }
  }
  const nestedCandidates = [leader.spouse?.id, leader.conjuge?.id, leader.partner?.id];
  for (const candidate of nestedCandidates) {
    if (candidate && typeof candidate === 'string' && candidate.trim().length) {
      return candidate.trim();
    }
  }
  return null;
};

const loadSpouseInfoForLeader = async (leader?: LeaderSummary | null) => {
  const existingSpouse = getLeaderSpouse(leader);
  if (existingSpouse && ('name' in existingSpouse || 'email' in existingSpouse)) {
    return existingSpouse;
  }
  const spouseId = getLeaderSpouseId(leader);
  if (!spouseId) {
    return existingSpouse;
  }
  try {
    return await buscarUsuarioPorId(spouseId);
  } catch (error) {
    console.warn('Falha ao buscar cônjuge pelo ID, usando dados já disponíveis.', error);
    return existingSpouse;
  }
};

const formatCPFInput = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
};

const MAX_LEADER_IMAGE_DIMENSION = 1600;
const MAX_LEADER_IMAGE_BYTES = 10 * 1024 * 1024;

const getScaledDimensions = (width: number, height: number) => {
  if (width <= MAX_LEADER_IMAGE_DIMENSION && height <= MAX_LEADER_IMAGE_DIMENSION) {
    return { width, height };
  }
  const scale = MAX_LEADER_IMAGE_DIMENSION / Math.max(width, height);
  return { width: Math.max(1, Math.round(width * scale)), height: Math.max(1, Math.round(height * scale)) };
};

const getDataUrlSize = (dataUrl: string) => {
  const base64 = dataUrl.split(',')[1] ?? '';
  return Math.ceil((base64.length * 3) / 4);
};

const canvasToDataUrl = (canvas: HTMLCanvasElement, quality: number) =>
  new Promise<string>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error('Falha ao gerar a imagem.'));
          return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
          if (typeof reader.result === 'string') {
            resolve(reader.result);
          } else {
            reject(new Error('Falha ao ler a imagem.'));
          }
        };
        reader.readAsDataURL(blob);
      },
      'image/jpeg',
      quality
    );
  });

const compressCanvasImage = async (canvas: HTMLCanvasElement) => {
  for (let quality = 0.92; quality >= 0.45; quality -= 0.05) {
    const dataUrl = await canvasToDataUrl(canvas, quality);
    if (getDataUrlSize(dataUrl) <= MAX_LEADER_IMAGE_BYTES) {
      return dataUrl;
    }
  }
  return canvasToDataUrl(canvas, 0.45);
};

const loadImageFromFile = (file: File) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };
    image.onerror = (error) => {
      URL.revokeObjectURL(url);
      reject(error);
    };
    image.src = url;
  });

const loadImageFromDataUrl = (dataUrl: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = (error) => reject(error);
    image.src = dataUrl;
  });

const createAdjustedDataUrl = async (
  dataUrl: string,
  zoom: number,
  offsetX: number,
  offsetY: number
) => {
  if (!dataUrl) return null;
  const image = await loadImageFromDataUrl(dataUrl);
  if (!image.width || !image.height) {
    return dataUrl;
  }
  const scale = (PHOTO_EXPORT_SIZE * zoom) / image.width;
  const displayWidth = image.width * scale;
  const displayHeight = image.height * scale;
  const extraWidth = Math.max(0, displayWidth - PHOTO_EXPORT_SIZE);
  const extraHeight = Math.max(0, displayHeight - PHOTO_EXPORT_SIZE);
  const shiftX = extraWidth * (offsetX / 100);
  const shiftY = extraHeight * (offsetY / 100);
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, PHOTO_EXPORT_SIZE);
  canvas.height = Math.max(1, PHOTO_EXPORT_SIZE);
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  ctx.drawImage(image, -shiftX, -shiftY, displayWidth, displayHeight);
  return canvas.toDataURL('image/jpeg', 1);
};

const compressImageFile = async (file: File) => {
  const image = await loadImageFromFile(file);
  const { width, height } = getScaledDimensions(image.width, image.height);
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, width);
  canvas.height = Math.max(1, height);
  const context = canvas.getContext('2d');
  if (context) {
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
  }
  return compressCanvasImage(canvas);
};

type LeaderForm = {
  celulaId: string;
  name: string;
  email: string;
  telefone: string;
  dataNascimento: string;
  cpf: string;
  estadoCivil: string;
  profissao: string;
  batizado: boolean;
  encontro: boolean;
  escolas: string[];
  escolaridade: string;
  endereco: string;
  numero: string;
  bairro: string;
  cep: string;
  nomeEsposo: string;
  foto?: string;
};

const initialLeaderForm: LeaderForm = {
  celulaId: '',
  name: '',
  email: '',
  telefone: '',
  dataNascimento: '',
  cpf: '',
  estadoCivil: '',
  profissao: '',
  batizado: false,
  encontro: false,
  escolas: [],
  endereco: '',
  numero: '',
  bairro: '',
  cep: '',
  escolaridade: '',
  nomeEsposo: '',
  foto: undefined,
};

export default function LiderCelula() {
  const [searchContact, setSearchContact] = useState('');
  const [searching, setSearching] = useState(false);
  const [leaderResult, setLeaderResult] = useState<LeaderSummary | null>(null);
  const [celulas, setCelulas] = useState<LeaderCelulaRecord[]>([]);
  const [selectedCelula, setSelectedCelula] = useState<LeaderCelulaRecord | null>(null);
  const [leaderForm, setLeaderForm] = useState<LeaderForm>(initialLeaderForm);
  const [spouseContact, setSpouseContact] = useState('');
  const [spouseInfo, setSpouseInfo] = useState<LeaderSummary | null>(null);
  const [savingLeader, setSavingLeader] = useState(false);
  const [savingCell, setSavingCell] = useState(false);
  const [linkingSpouse, setLinkingSpouse] = useState(false);
  const [unlinkingSpouse, setUnlinkingSpouse] = useState(false);
  const [geoLoading, setGeoLoading] = useState(false);
  const [photoDataUrl, setPhotoDataUrl] = useState<string | null>(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [photoZoom, setPhotoZoom] = useState(1);
  const [photoOffsetX, setPhotoOffsetX] = useState(50);
  const [photoOffsetY, setPhotoOffsetY] = useState(50);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const resetPhotoAdjustments = () => {
    setPhotoZoom(1);
    setPhotoOffsetX(50);
    setPhotoOffsetY(50);
  };

  const setLeaderPhotoData = (value: string | null) => {
    setPhotoDataUrl(value);
    resetPhotoAdjustments();
  };

  const clearLeaderPhoto = () => {
    stopCamera();
    setLeaderForm((prev) => ({ ...prev, foto: undefined }));
    setLeaderPhotoData(null);
  };

  const compressAndApplyPhoto = async (file: File) => {
    try {
      const compressed = await compressImageFile(file);
      if (compressed) {
        setLeaderForm((prev) => ({ ...prev, foto: compressed }));
        setLeaderPhotoData(compressed);
      }
    } catch (error) {
      console.error('Erro ao processar imagem do líder', error);
      toast.error('Não foi possível processar a imagem. Tente outro arquivo.');
    }
  };

  const hasContact = useMemo(() => Boolean(searchContact.trim()), [searchContact]);

  const handleSearch = async () => {
    if (!hasContact) {
      toast.error('Informe um e-mail ou telefone para buscar o líder.');
      return;
    }
      setSearching(true);
      setLeaderResult(null);
      setSelectedCelula(null);
      setCelulas([]);
      setLeaderForm(initialLeaderForm);
      setLeaderPhotoData(null);
      setSpouseInfo(null);
    try {
      const contact = searchContact.trim();
      const isEmail = contact.includes('@');
      const response = await buscarLeaderPorContato({
        email: isEmail ? contact : undefined,
        telefone: isEmail ? undefined : cleanDigits(contact) || undefined,
      });
      const leader = response.leader ?? null;
      const fetchedCelulas = Array.isArray(response.celulas) ? response.celulas : [];
      setCelulas(fetchedCelulas);
      const fallbackLeader =
        leader ?? fetchedCelulas.find((celula) => celula.leaderUser)?.leaderUser ?? null;
      const leaderImage = getLeaderImage(fallbackLeader);
      setLeaderResult(fallbackLeader);
      setLeaderPhotoData(leaderImage);
      const spouseDetails = await loadSpouseInfoForLeader(fallbackLeader);
      if (fallbackLeader) {
        setLeaderForm((prev) => ({
          ...prev,
          name: fallbackLeader.name,
          email: fallbackLeader.email,
          telefone: formatPhone(fallbackLeader.telefone || ''),
          dataNascimento: fallbackLeader.data_nascimento ?? prev.dataNascimento,
          cpf: fallbackLeader.cpf ?? prev.cpf,
          estadoCivil: fallbackLeader.estado_civil ?? prev.estadoCivil,
          profissao: fallbackLeader.profissao ?? prev.profissao,
          batizado: fallbackLeader.batizado ?? prev.batizado,
          encontro: fallbackLeader.encontro ?? prev.encontro,
          escolas: fallbackLeader.escolas ?? prev.escolas,
          escolaridade: fallbackLeader.escolaridade ?? prev.escolaridade,
          endereco: fallbackLeader.endereco ?? prev.endereco,
          numero: fallbackLeader.numero ?? prev.numero,
          bairro: fallbackLeader.bairro ?? prev.bairro,
          cep: fallbackLeader.cep ?? prev.cep,
          foto: leaderImage ?? prev.foto,
          nomeEsposo: spouseDetails?.name ?? prev.nomeEsposo,
        }));
      }
      const activeCelulas = fetchedCelulas.filter((celula) => celula.ativo !== false);
      const initialCelula = activeCelulas[0] ?? fetchedCelulas[0] ?? null;
      if (initialCelula) {
        await fillFromCelula(initialCelula, fallbackLeader, spouseDetails);
      } else {
        setSpouseInfo(spouseDetails);
      }
      if (!leader && fetchedCelulas.length === 0) {
        toast.error('Nenhum líder encontrado para o contato informado.');
      }
    } catch (error) {
      console.error('Erro ao buscar líder:', error);
      toast.error('Não foi possível carregar o líder. Tente novamente.');
    } finally {
      setSearching(false);
    }
  };

  const fillFromCelula = async (
    celula: LeaderCelulaRecord,
    leader?: LeaderSummary | null,
    spouseOverride?: LeaderSummary | null
  ) => {
    const effectiveLeader = leader ?? celula.leaderUser ?? null;
    const computedPhoto = getLeaderImage(effectiveLeader) ?? leaderForm.foto ?? null;
    setLeaderPhotoData(computedPhoto);
    const spouseDetails = spouseOverride ?? (await loadSpouseInfoForLeader(effectiveLeader));
    setSpouseInfo(spouseDetails);
    setSelectedCelula(celula);
      setLeaderForm((prev) => ({
        ...prev,
        celulaId: celula.id,
        name: celula.lider || effectiveLeader?.name || prev.name,
        email: celula.email_lider || effectiveLeader?.email || prev.email,
        telefone: formatPhone(celula.cel_lider || effectiveLeader?.telefone || prev.telefone),
        dataNascimento: effectiveLeader?.data_nascimento ?? prev.dataNascimento,
        cpf: effectiveLeader?.cpf ?? prev.cpf,
        estadoCivil: effectiveLeader?.estado_civil ?? prev.estadoCivil,
        profissao: effectiveLeader?.profissao ?? prev.profissao,
        batizado: effectiveLeader?.batizado ?? prev.batizado,
        encontro: effectiveLeader?.encontro ?? prev.encontro,
        escolas: effectiveLeader?.escolas ?? prev.escolas,
        escolaridade: effectiveLeader?.escolaridade ?? prev.escolaridade,
        endereco: effectiveLeader?.endereco ?? prev.endereco,
        numero: effectiveLeader?.numero ?? prev.numero,
        bairro: effectiveLeader?.bairro ?? prev.bairro,
        cep: effectiveLeader?.cep ?? prev.cep,
        foto: computedPhoto ?? prev.foto,
        nomeEsposo: spouseDetails?.name ?? prev.nomeEsposo,
      }));
  };

  const handleSelectCelula = async (celula: LeaderCelulaRecord) => {
    await fillFromCelula(celula, leaderResult);
  };

  const handleLeaderInput = (field: keyof LeaderForm) => (value: string | boolean) => {
    setLeaderForm((prev) => ({
      ...prev,
      [field]:
        field === 'telefone'
          ? typeof value === 'string'
            ? formatPhone(value)
            : prev.telefone
          : field === 'cpf'
          ? typeof value === 'string'
            ? formatCPFInput(value)
            : prev.cpf
          : field === 'escolas'
          ? (value as string[])
          : value,
    }));
  };

  const toggleCheckbox = (field: 'batizado' | 'encontro') => {
    setLeaderForm((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const toggleSchool = (school: string) => {
    setLeaderForm((prev) => {
      const exists = prev.escolas.includes(school);
      const nextSchools = exists
        ? prev.escolas.filter((item) => item !== school)
        : [...prev.escolas, school];
      return { ...prev, escolas: nextSchools };
    });
  };

  const geocodeAndFillAddress = async (query: string, showToast = false) => {
    try {
      const geo = await geocodeAddress(query);
      if (!geo) {
        if (showToast) toast.error("Nenhum resultado encontrado para esse endereço/CEP.");
        return null;
      }
      setLeaderForm((prev) => ({
        ...prev,
        endereco: geo.logradouro || prev.endereco,
        numero: prev.numero?.trim() ? prev.numero : geo.numeroEncontrado || prev.numero,
        bairro: geo.bairro || prev.bairro,
        cep: geo.cepEncontrado || prev.cep,
      }));
      if (showToast) toast.success("Endereço preenchido.");
      return geo;
    } catch (error) {
      console.error("Erro ao buscar endereço:", error);
      if (showToast) toast.error("Erro ao buscar o endereço.");
      return null;
    }
  };

  const handleFillAddressFromCep = async () => {
    const queryParts = [
      leaderForm.endereco,
      leaderForm.numero,
      leaderForm.cep,
      leaderForm.bairro,
    ]
      .map((part) => (part ?? "").trim())
      .filter(Boolean);
    if (!queryParts.length) {
      toast.error("Informe o CEP ou algum dado do endereço para preencher.");
      return;
    }
    setGeoLoading(true);
    try {
      await geocodeAndFillAddress(queryParts.join(" "), true);
    } finally {
      setGeoLoading(false);
    }
  };

  const startCamera = async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      toast.error('Webcam não disponível neste navegador');
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      setCameraActive(true);
    } catch (error) {
      console.error('Erro ao ativar webcam', error);
      toast.error('Não foi possível ativar a webcam.');
    }
  };

  const stopCamera = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setCameraActive(false);
  };

  const capturePhoto = async () => {
    if (!videoRef.current) return;
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth || 320;
    canvas.height = videoRef.current.videoHeight || 240;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    try {
      const compressed = await compressCanvasImage(canvas);
      if (compressed) {
        setLeaderForm((prev) => ({ ...prev, foto: compressed }));
        setLeaderPhotoData(compressed);
        stopCamera();
      }
    } catch (error) {
      console.error('Erro ao capturar foto', error);
      toast.error('Erro ao processar a foto capturada.');
    }
  };

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  useEffect(() => {
    if (!cameraActive) {
      return;
    }
    if (videoRef.current && streamRef.current) {
      videoRef.current.srcObject = streamRef.current;
      void videoRef.current.play();
    }
  }, [cameraActive]);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    await compressAndApplyPhoto(file);
    event.target.value = '';
  };

  const getCurrentLeaderPhotoDataUrl = () => toDataUrl(photoDataUrl ?? leaderForm.foto ?? null);

  const buildFinalLeaderPhoto = async () => {
    const currentPhoto = getCurrentLeaderPhotoDataUrl();
    if (!currentPhoto) return null;
    try {
      const adjusted = await createAdjustedDataUrl(
        currentPhoto,
        photoZoom,
        photoOffsetX,
        photoOffsetY
      );
      return adjusted ?? currentPhoto;
    } catch (error) {
      console.error('Erro ao aplicar ajustes da foto:', error);
      return currentPhoto;
    }
  };

  const handleSalvarLeader = async () => {
    const requiredFields = [
      { value: leaderForm.name, label: 'nome' },
      { value: leaderForm.email, label: 'e-mail' },
      { value: leaderForm.telefone, label: 'telefone' },
      { value: leaderForm.cpf, label: 'CPF' },
    ];
    const missingFields = requiredFields
      .filter((item) => !item.value.trim())
      .map((item) => item.label);
    if (missingFields.length > 0) {
      toast.error(`Informe ${missingFields.join(', ')} para cadastrar o líder.`);
      return;
    }
    setSavingLeader(true);
    try {
      const finalPhotoDataUrl = await buildFinalLeaderPhoto();
      if (finalPhotoDataUrl) {
        setLeaderForm((prev) => ({ ...prev, foto: finalPhotoDataUrl }));
        if (finalPhotoDataUrl !== photoDataUrl) {
          setPhotoDataUrl(finalPhotoDataUrl);
        }
      }
      const payload = {
        celulaId: leaderForm.celulaId || undefined,
        lider: leaderForm.name || undefined,
        email_lider: leaderForm.email || undefined,
        cel_lider: cleanDigits(leaderForm.telefone) || undefined,
        data_nascimento: leaderForm.dataNascimento || undefined,
        cpf: cleanDigits(leaderForm.cpf) || undefined,
        estado_civil: leaderForm.estadoCivil || undefined,
        profissao: leaderForm.profissao || undefined,
        batizado: leaderForm.batizado || undefined,
        encontro: leaderForm.encontro || undefined,
        escolas: leaderForm.escolas.length ? leaderForm.escolas : undefined,
        endereco: leaderForm.endereco || undefined,
        numero: leaderForm.numero || undefined,
        bairro: leaderForm.bairro || undefined,
        cep: leaderForm.cep || undefined,
        escolaridade: leaderForm.escolaridade || undefined,
        nome_esposo: leaderForm.nomeEsposo || undefined,
        image:
          finalPhotoDataUrl?.replace(/^data:image\/[^;]+;base64,/, '') ??
          (photoDataUrl ? photoDataUrl.replace(/^data:image\/[^;]+;base64,/, '') : undefined),
      };
      const response = await upsertLeaderForCelula(payload);
      setLeaderResult(response.leader);
      if (response.celula) {
        setCelulas((prev) => {
          const updated = prev.map((item) =>
            item.id === response.celula?.id ? response.celula! : item
          );
          if (!updated.find((item) => item.id === response.celula?.id)) {
            updated.push(response.celula!);
          }
          return updated;
        });
        await fillFromCelula(response.celula, response.leader);
      }
      toast.success('Líder atualizado com sucesso.');
    } catch (error) {
      console.error('Erro ao salvar líder', error);
      toast.error('Não foi possível atualizar o líder.');
    } finally {
      setSavingLeader(false);
    }
  };

  const handleLinkSpouse = async () => {
    if (!leaderResult?.id) {
      toast.error('Busque um líder antes de vincular o cônjuge.');
      return;
    }
    const contactValue = spouseContact.trim();
    const isEmail = contactValue.includes('@');
    const payload = {
      leaderId: leaderResult.id,
      email: isEmail ? contactValue : undefined,
      telefone: isEmail ? undefined : cleanDigits(contactValue) || undefined,
    };
    if (!payload.email && !payload.telefone) {
      toast.error('Informe e-mail ou telefone do cônjuge.');
      return;
    }
    setLinkingSpouse(true);
    try {
      const response = await linkLeaderSpouse(payload);
      setLeaderResult(response.leader);
      setSpouseInfo(response.spouse ?? null);
      setSpouseContact('');
      setLeaderForm((prev) => ({
        ...prev,
        name: response.leader.name,
        email: response.leader.email,
        telefone: formatPhone(response.leader.telefone || ''),
        nomeEsposo: response.spouse?.name ?? prev.nomeEsposo,
      }));
      toast.success('Cônjuge vinculado com sucesso.');
    } catch (error) {
      console.error('Erro ao vincular cônjuge', error);
      toast.error('Não foi possível vincular o cônjuge.');
    } finally {
      setLinkingSpouse(false);
    }
  };

  const handleUnlinkSpouse = async () => {
    if (!leaderResult?.id) {
      toast.error('Busque um líder antes de desvincular o cônjuge.');
      return;
    }
    setUnlinkingSpouse(true);
    try {
      await unlinkLeaderSpouse(leaderResult.id);
      setSpouseInfo(null);
      setLeaderResult((prev) =>
        prev ? { ...prev, spouse: null, conjuge: null, partner: null } : prev
      );
      setLeaderForm((prev) => ({ ...prev, nomeEsposo: '' }));
      toast.success('Cônjuge desvinculado com sucesso.');
    } catch (error) {
      console.error('Erro ao desvincular cônjuge', error);
      toast.error('Não foi possível desvincular o cônjuge.');
    } finally {
      setUnlinkingSpouse(false);
    }
  };

  const isMarried = /casad/i.test(leaderForm.estadoCivil || leaderResult?.estado_civil || '');
  const allowSpouseLink = isMarried;
  const showSpouseSection = isMarried;
  const phoneQuery = cleanDigits(leaderForm.telefone) || cleanDigits(searchContact);
  const leaderProfileImage = getLeaderImage(leaderResult);
  const spousePhoto = toDataUrl(spouseInfo?.foto ?? spouseInfo?.image);
  const canSubmitLeader =
    Boolean(leaderForm.name.trim()) &&
    Boolean(leaderForm.email.trim()) &&
    Boolean(leaderForm.telefone.trim()) &&
    Boolean(leaderForm.cpf.trim());

  const displayCelulas = useMemo(
    () => celulas.filter((celula) => celula.ativo !== false),
    [celulas]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-white py-10">
      <div className="container max-w-5xl mx-auto space-y-6">
        <header className="text-center space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 font-semibold">START IECG</p>
          <h1 className="text-3xl font-bold text-slate-900">Cadastro e atualização de líder de célula</h1>
          <p className="text-sm text-slate-600">
            Atualize os dados do usuário, selecione a célula correta e, se estiverem casados, vincule o cônjuge.
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>Buscar líder por contato</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="search-contact">E-mail ou telefone</Label>
              <Input
                id="search-contact"
                value={searchContact}
                onChange={(event) => {
                  setSearchContact(event.target.value);
                }}
                placeholder="nome@dominio.com ou (67) 99999-9999"
              />
            </div>
            <Button onClick={handleSearch} disabled={searching}>
              {searching ? <Loader2 className="animate-spin h-4 w-4 mr-2" /> : null}
              Buscar líder
            </Button>
            <p className="text-xs text-slate-500">
              A busca usa o e-mail e/ou o telefone com DDD (somente dígitos). Se não localizar, preencha os dados
              manualmente e selecione a célula.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dados do usuário / líder</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-4">
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-40 h-40 rounded-full border border-slate-200 bg-slate-100 overflow-hidden">
                  {cameraActive ? (
                    <video
                      ref={videoRef}
                      className="h-full w-full object-cover"
                      muted
                      playsInline
                      autoPlay
                    />
                  ) : photoDataUrl ? (
                    <div
                      className="h-full w-full bg-no-repeat"
                      style={{
                        backgroundImage: `url(${photoDataUrl})`,
                        backgroundSize: `${photoZoom * 100}%`,
                        backgroundPosition: `${photoOffsetX}% ${photoOffsetY}%`,
                      }}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-[0.5em] text-slate-400">
                      Foto do líder
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  <label className="flex items-center gap-2 rounded-md border border-dashed border-slate-300 px-3 py-2 text-sm cursor-pointer">
                    <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                    Upload da foto
                  </label>
                  {!cameraActive ? (
                    <Button variant="outline" size="sm" onClick={startCamera}>
                      Abrir webcam
                    </Button>
                  ) : (
                    <>
                      <Button variant="outline" size="sm" onClick={capturePhoto}>
                        Capturar foto
                      </Button>
                      <Button variant="ghost" size="sm" onClick={stopCamera}>
                        Parar câmera
                      </Button>
                    </>
                  )}
                  {photoDataUrl && (
                    <Button variant="ghost" size="sm" onClick={clearLeaderPhoto}>
                      Remover foto
                    </Button>
                  )}
                </div>
                {photoDataUrl && !cameraActive && (
                  <div className="space-y-3 w-full max-w-lg px-3">
                    <div className="space-y-1 text-[10px] uppercase tracking-[0.4em] text-slate-500">
                      <div className="flex items-center justify-between">
                        <span>Zoom</span>
                        <span>{photoZoom.toFixed(2)}x</span>
                      </div>
                      <input
                        type="range"
                        min={1}
                        max={2.5}
                        step={0.01}
                        value={photoZoom}
                        onChange={(event) => setPhotoZoom(Number(event.target.value))}
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-1 text-xs text-slate-500">
                      <div className="flex items-center justify-between">
                        <span>X</span>
                        <span>{photoOffsetX}%</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={photoOffsetX}
                        onChange={(event) => setPhotoOffsetX(Number(event.target.value))}
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-1 text-xs text-slate-500">
                      <div className="flex items-center justify-between">
                        <span>Y</span>
                        <span>{photoOffsetY}%</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={photoOffsetY}
                        onChange={(event) => setPhotoOffsetY(Number(event.target.value))}
                        className="w-full"
                      />
                    </div>
                    <Button variant="ghost" size="sm" onClick={resetPhotoAdjustments} className="mt-1">
                      Reset ajustes
                    </Button>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-3 flex-wrap justify-center">
                {leaderProfileImage && (
                  <img
                    src={leaderProfileImage}
                    alt={`Foto do líder ${leaderResult?.name ?? ''}`.trim()}
                    className="h-12 w-12 rounded-full border border-slate-200 object-cover"
                  />
                )}
                {leaderResult ? (
                  <>
                    <span className="font-semibold text-slate-700">{leaderResult.name}</span>
                    <Badge variant="secondary">{leaderResult.username}</Badge>
                    {leaderResult.is_lider_celula && <Badge variant="outline">Líder ativo</Badge>}
                  </>
                ) : (
                  <span className="font-semibold text-slate-700">Preencha os dados abaixo</span>
                )}
              </div>
            </div>
            <p className="text-xs text-slate-500">
              A vinculação a uma célula é opcional. Escolha uma célula para carregar dados já existentes ou deixe em branco para cadastros independentes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="leader-name">Nome completo</Label>
                <Input
                  id="leader-name"
                  value={leaderForm.name}
                  onChange={(event) => handleLeaderInput('name')(event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="leader-email">E-mail</Label>
                <Input
                  id="leader-email"
                  type="email"
                  value={leaderForm.email}
                  onChange={(event) => handleLeaderInput('email')(event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="leader-phone">Telefone</Label>
                <Input
                  id="leader-phone"
                  value={leaderForm.telefone}
                  onChange={(event) => handleLeaderInput('telefone')(event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="leader-cpf">CPF</Label>
                <Input
                  id="leader-cpf"
                  value={leaderForm.cpf}
                  onChange={(event) => handleLeaderInput('cpf')(event.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="space-y-2">
                <Label htmlFor="leader-birth">Data de nascimento</Label>
                <Input
                  id="leader-birth"
                  type="date"
                  value={leaderForm.dataNascimento}
                  onChange={(event) => handleLeaderInput('dataNascimento')(event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="leader-estado">Estado civil</Label>
                <select
                  id="leader-estado"
                  className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
                  value={leaderForm.estadoCivil}
                  onChange={(event) => handleLeaderInput('estadoCivil')(event.target.value)}
                >
                  <option value="">Selecione</option>
                  {MARITAL_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="leader-education">Escolaridade</Label>
                <select
                  id="leader-education"
                  className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
                  value={leaderForm.escolaridade}
                  onChange={(event) => handleLeaderInput('escolaridade')(event.target.value)}
                >
                  <option value="">Selecione</option>
                  {EDUCATION_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="leader-profissao">Profissão</Label>
                <Input
                  id="leader-profissao"
                  value={leaderForm.profissao}
                  onChange={(event) => handleLeaderInput('profissao')(event.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="leader-cep">CEP</Label>
                <div className="flex gap-2">
                  <Input
                    id="leader-cep"
                    value={leaderForm.cep}
                    onChange={(event) => handleLeaderInput('cep')(event.target.value)}
                  />
                  <Button
                    variant="outline"
                    type="button"
                    onClick={handleFillAddressFromCep}
                    disabled={geoLoading}
                    className="shrink-0"
                  >
                    {geoLoading ? 'Buscando...' : 'Preencher'}
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="leader-endereco">Endereço</Label>
                <Input
                  id="leader-endereco"
                  value={leaderForm.endereco}
                  onChange={(event) => handleLeaderInput('endereco')(event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="leader-numero">Número</Label>
                <Input
                  id="leader-numero"
                  value={leaderForm.numero}
                  onChange={(event) => handleLeaderInput('numero')(event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="leader-bairro">Bairro</Label>
                <Input
                  id="leader-bairro"
                  value={leaderForm.bairro}
                  onChange={(event) => handleLeaderInput('bairro')(event.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <label className="inline-flex items-center gap-2 text-sm">
                <Checkbox checked={leaderForm.batizado} onCheckedChange={() => toggleCheckbox('batizado')} />
                Batizado
              </label>
              <label className="inline-flex items-center gap-2 text-sm">
                <Checkbox checked={leaderForm.encontro} onCheckedChange={() => toggleCheckbox('encontro')} />
                Fez encontro
              </label>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-700 mb-2">Escolas concluídas</p>
              <div className="flex flex-wrap gap-2">
                {SCHOOL_OPTIONS.map((school) => {
                  const selected = leaderForm.escolas.includes(school);
                  return (
                    <button
                      type="button"
                      key={school}
                      onClick={() => toggleSchool(school)}
                      className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
                        selected
                          ? 'bg-primary text-white border border-primary'
                          : 'border border-slate-200 bg-white text-slate-700'
                      }`}
                    >
                      {school}
                    </button>
                  );
                })}
              </div>
            </div>

          </CardContent>
        </Card>

        {showSpouseSection && (
          <Card>
            <CardHeader>
              <CardTitle>Pesquisar e Vincular cônjuge</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="spouse-name">Nome completo do cônjuge</Label>
                <Input
                  id="spouse-name"
                  value={leaderForm.nomeEsposo}
                  onChange={(event) => handleLeaderInput('nomeEsposo')(event.target.value)}
                />
                <p className="text-xs text-slate-500">
                  Preencha quando o cônjuge não estiver cadastrado como líder.
                </p>
              </div>
              {spouseInfo ? (
                <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border bg-white">
                      {spousePhoto ? (
                        <img
                          src={spousePhoto}
                          alt={`Foto de ${spouseInfo?.name ?? 'cônjuge'}`}
                          className="h-16 w-16 rounded-full object-cover"
                        />
                      ) : (
                        <User className="h-8 w-8 text-slate-400" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{spouseInfo.name}</p>
                      <p className="text-xs text-slate-500">{spouseInfo.email || 'E-mail não informado'}</p>
                      <p className="text-xs text-slate-500">
                        {spouseInfo.telefone ? formatPhone(spouseInfo.telefone) : 'Telefone não informado'}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-[11px] uppercase tracking-[0.4em] text-slate-400">Cônjuge vinculado</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleUnlinkSpouse}
                      disabled={unlinkingSpouse}
                    >
                      {unlinkingSpouse ? <Loader2 className="animate-spin h-3 w-3" /> : 'Desvincular'}
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="spouse-contact">E-mail ou telefone do cônjuge ( Caso seja Líder também) </Label>
                  <Input
                    id="spouse-contact"
                    placeholder="nome@dominio.com ou (67) 99999-9999"
                    value={spouseContact}
                    onChange={(event) => {
                      const next = event.target.value;
                      const hasEmailChar = next.includes('@');
                      const hasLetter = /[A-Za-z]/.test(next);
                      if (hasEmailChar || hasLetter) {
                        setSpouseContact(next.replace(/\s+/g, ''));
                      } else {
                        setSpouseContact(formatPhone(next));
                      }
                    }}
                  />
                  </div>
                  <Button
                    onClick={handleLinkSpouse}
                    disabled={linkingSpouse || !allowSpouseLink || !spouseContact.trim()}
                    variant={allowSpouseLink ? undefined : 'outline'}
                  >
                    {linkingSpouse ? <Loader2 className="animate-spin h-4 w-4 mr-2" /> : null}
                    Vincular cônjuge
                  </Button>
                  <p className="text-sm text-slate-500">
                    Nenhum cônjuge vinculado. Use o campo acima para buscar por e-mail ou telefone.
                  </p>
                </>
              )}
            </CardContent>
          </Card>
        )}

        <Button
          onClick={handleSalvarLeader}
          disabled={savingLeader || !canSubmitLeader}
          size="lg"
          className="w-full text-base"
        >
          {savingLeader ? <Loader2 className="animate-spin h-4 w-4 mr-2" /> : null}
          Atualizar dados do líder
        </Button>

        {displayCelulas.length > 0 ? (
          <Card>
            <CardHeader>
              <CardTitle>Listagem de células</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid gap-3 md:grid-cols-2">
                {displayCelulas.map((celula) => (
                  <div
                    key={celula.id}
                    className={`rounded-2xl border p-4 transition ${
                      selectedCelula?.id === celula.id ? 'border-primary bg-primary/5' : 'border-slate-200 bg-white'
                    }`}
                    onClick={() => handleSelectCelula(celula)}
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-slate-900">{celula.celula || 'Célula sem nome'}</p>
                      <Badge variant="secondary">{celula.id.slice(0, 6)}</Badge>
                    </div>
                    <p className="text-sm text-slate-600">Líder padrão: {celula.lider || '-'}</p>
                    <p className="text-sm text-slate-600">E-mail: {celula.email_lider || '-'}</p>
                    <p className="text-sm text-slate-600">
                      Celular: {celula.cel_lider ? formatPhone(celula.cel_lider) : '-'}
                    </p>
                    <a
                      href={phoneQuery ? `/celulas/atualizar?phone=${encodeURIComponent(phoneQuery)}` : undefined}
                      target="_blank"
                      rel="noreferrer"
                      className={`mt-3 inline-flex items-center justify-center rounded-full border px-3 py-1 text-sm font-semibold transition ${
                        phoneQuery
                          ? 'border-primary text-primary hover:bg-primary/10'
                          : 'border-slate-300 text-slate-500 pointer-events-none opacity-60'
                      }`}
                    >
                      {phoneQuery ? 'Abrir Atualizar Célula' : 'Informe o celular do líder'}
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : (
        <Card>
          <CardContent>
            <p className="text-sm text-slate-600">Nenhuma célula ativa encontrada para o contato informado.</p>
          </CardContent>
        </Card>
      )}

     
      </div>
    </div>
  );
}
