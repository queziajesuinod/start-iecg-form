import { Fragment, useState, useEffect, useMemo, useRef } from 'react';
import { useLocation } from 'wouter';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar, MapPin, Users, Tag, Loader2, ArrowLeft, CreditCard, Plus, Check, X } from 'lucide-react';
import { toast } from 'sonner';
import {
  buscarEventoPublico,
  listarLotesPublicos,
  listarCamposFormulario,
  validarCupom,
  processarInscricao,
  buscarFormasPagamento,
  consultarInscricao,
  type Event,
  type EventBatch,
  type FormField,
  type PaymentOption,
  type RegistrationResponse,
} from '@/lib/eventsApi';
import { maskCPForCNPJ, maskPhone, validateCPForCNPJ, validateEmail, removeNonDigits, maskCreditCard, maskCardExpiry, maskCVV } from '@/lib/masks';
import { isBatchActiveNow } from '@/lib/eventUtils';

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

const getMessageFromPayload = (payload: unknown): string | undefined => {
  if (payload === null || payload === undefined) return undefined;
  if (typeof payload === 'string') return payload;
  if (typeof payload === 'number' || typeof payload === 'boolean') return String(payload);

  if (Array.isArray(payload) && payload.length > 0) {
    return getMessageFromPayload(payload[0]);
  }

  if (isRecord(payload)) {
    if ('Message' in payload && payload.Message) {
      return getMessageFromPayload(payload.Message);
    }
    if ('message' in payload && payload.message) {
      return getMessageFromPayload(payload.message);
    }
    if ('error' in payload && payload.error) {
      return getMessageFromPayload(payload.error);
    }
    if ('payload' in payload && payload.payload) {
      return getMessageFromPayload(payload.payload);
    }
    if ('details' in payload && payload.details) {
      return getMessageFromPayload(payload.details);
    }
    if ('errors' in payload && Array.isArray(payload.errors) && payload.errors.length > 0) {
      return getMessageFromPayload(payload.errors[0]);
    }
  }

  return undefined;
};

const parseCardExpiry = (value: string) => {
  const [monthRaw, yearRaw] = value.split('/');
  const month = Number(monthRaw);
  const year = Number(yearRaw);
  return { month, year };
};

const isCardExpiryValid = (value: string): boolean => {
  if (!/^\d{2}\/\d{4}$/.test(value)) return false;
  const { month, year } = parseCardExpiry(value);
  if (!month || month < 1 || month > 12 || !year || year < 2000) return false;

  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  if (year < currentYear) return false;
  if (year === currentYear && month < currentMonth) return false;
  return true;
};

type DebouncedInputProps = Omit<React.ComponentProps<typeof Input>, 'value' | 'onChange'> & {
  value?: string;
  onValueChange: (value: string) => void;
  debounceMs?: number;
  transform?: (value: string) => string;
};

function DebouncedInput({
  value = '',
  onValueChange,
  debounceMs = 250,
  transform,
  onBlur,
  ...props
}: DebouncedInputProps) {
  const [localValue, setLocalValue] = useState(value);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const scheduleChange = (nextValue: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      onValueChange(nextValue);
      timeoutRef.current = null;
    }, debounceMs);
  };

  const flushChange = (nextValue: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    onValueChange(nextValue);
  };

  return (
    <Input
      {...props}
      value={localValue}
      onChange={(e) => {
        const nextValue = transform ? transform(e.target.value) : e.target.value;
        setLocalValue(nextValue);
        scheduleChange(nextValue);
      }}
      onBlur={(e) => {
        flushChange(localValue);
        onBlur?.(e);
      }}
    />
  );
}

type DebouncedTextareaProps = Omit<React.ComponentProps<typeof Textarea>, 'value' | 'onChange'> & {
  value?: string;
  onValueChange: (value: string) => void;
  debounceMs?: number;
};

function DebouncedTextarea({
  value = '',
  onValueChange,
  debounceMs = 250,
  onBlur,
  ...props
}: DebouncedTextareaProps) {
  const [localValue, setLocalValue] = useState(value);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const scheduleChange = (nextValue: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      onValueChange(nextValue);
      timeoutRef.current = null;
    }, debounceMs);
  };

  const flushChange = (nextValue: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    onValueChange(nextValue);
  };

  return (
    <Textarea
      {...props}
      value={localValue}
      onChange={(e) => {
        const nextValue = e.target.value;
        setLocalValue(nextValue);
        scheduleChange(nextValue);
      }}
      onBlur={(e) => {
        flushChange(localValue);
        onBlur?.(e);
      }}
    />
  );
}

export default function EventDetails() {
  const [, setLocation] = useLocation();
  
  // Extrair ID da URL diretamente (UUID string)
  const pathParts = window.location.pathname.split('/');
  const eventId = pathParts[pathParts.length - 1];

  const [evento, setEvento] = useState<Event | null>(null);
  const [lotes, setLotes] = useState<EventBatch[]>([]);
  const [campos, setCampos] = useState<FormField[]>([]);
  const [formasPagamento, setFormasPagamento] = useState<PaymentOption[]>([]);
  const [loadingEvent, setLoadingEvent] = useState(true);
  const [loadingDetails, setLoadingDetails] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Estado do formulário
  const [cupomCodigo, setCupomCodigo] = useState('');
  const [cupomValido, setCupomValido] = useState<any>(null);
  const [validandoCupom, setValidandoCupom] = useState(false);
  const [dadosComprador, setDadosComprador] = useState<Record<string, any>>({});
  const [inscritos, setInscritos] = useState<Array<{
    dados: Record<string, any>;
    salvo: boolean;
    id: string;
    batchId: string | null;  // Lote específico do inscrito
  }>>([{ dados: {}, salvo: false, id: '1', batchId: null }]);
  const [formaPagamento, setFormaPagamento] = useState<string>(''); // ID da forma de pagamento
  const [parcelas, setParcelas] = useState(1);
  const [valorPagamento, setValorPagamento] = useState('');
  const [valorPagamentoEditado, setValorPagamentoEditado] = useState(false);
  const [dadosPagamento, setDadosPagamento] = useState({
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    securityCode: '',
  });
  const lotesAtivosNoRange = useMemo(
    () => lotes.filter((lote) => isBatchActiveNow(lote)),
    [lotes]
  );
  const lotesById = useMemo(() => {
    const map = new Map<string, EventBatch>();
    for (const lote of lotes) {
      map.set(lote.id, lote);
    }
    return map;
  }, [lotes]);
  const findPaymentOption = (value?: string) =>
    formasPagamento.find((forma) => forma.id.toString() === value);

  const hasLotAvailable = lotesAtivosNoRange.length > 0;
  const paymentUnavailable = !hasLotAvailable || formasPagamento.length === 0;
  const [cardDeniedModalOpen, setCardDeniedModalOpen] = useState(false);
  const [cardDeniedMessage, setCardDeniedMessage] = useState('');
  const PAYMENT_STATUS_MESSAGES: Record<string, string> = {
    Authorized: 'Transação autorizada pelo emissor. Aguardar confirmação final.',
    Paid: 'Pagamento confirmado pela Cielo.',
    Confirmed: 'Pagamento confirmado.',
    Denied: 'Transação negada pelo emissor.',
    DeniedByCielo: 'Transação negada pela Cielo.',
    Aborted: 'Pagamento abortado.',
    NotFinished: 'Pagamento não foi finalizado.',
    Waiting: 'Pagamento pendente de confirmação.',
    Captured: 'Pagamento capturado com sucesso.',
    Failed: 'Pagamento recusado.',
    Canceled: 'Pagamento cancelado.',
  };

  const showPaymentStatusToast = (status?: string, fallback?: string) => {
    const normalized = status
      ? status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()
      : '';
    const message =
      PAYMENT_STATUS_MESSAGES[status || normalized] ||
      fallback ||
      'Status do pagamento atualizado.';

    const key = (status || normalized).toLowerCase();
    if (['paid', 'confirmed', 'captured'].includes(key)) {
      toast.success(message);
    } else if (['denied', 'deniedbycielo', 'failed', 'canceled', 'aborted'].includes(key)) {
      toast.error(message);
    } else {
      toast.info(message);
    }
  };

  const verificarPagamentoCartao = async (
    orderCode: string,
    payload: RegistrationResponse
  ) => {
    try {
      const registration = await consultarInscricao(orderCode);
      const cardPayment = registration.payments?.find((payment: any) => payment.method === 'credit_card');
      const status = cardPayment?.status || registration.paymentStatus;
      const normalizedStatus = String(status || '').toLowerCase();

      if (['confirmed', 'paid', 'captured'].includes(normalizedStatus)) {
        showPaymentStatusToast(status, registration.message);
        setLocation(`/ticket/${orderCode}`);
        return;
      }

      if (['failed', 'canceled', 'cancelled', 'denied', 'deniedbycielo', 'aborted'].includes(normalizedStatus)) {
        const backendMessage =
          cardPayment?.notes ||
          getMessageFromPayload(registration) ||
          payload.message ||
          'Nao autorizado a compra pelo cartao de credito.';
        showPaymentStatusToast(status, backendMessage);
        setCardDeniedMessage(backendMessage);
        setCardDeniedModalOpen(true);
        return;
      }

      toast.info('Pagamento em analise. Acompanhe o status da inscricao.');
      setLocation(`/inscricao/${orderCode}`);
    } catch (error) {
      console.error('Erro ao verificar pagamento do cartao:', error);
      toast.error('Nao foi possivel validar o status do pagamento.');
    }
  };

  useEffect(() => {
    carregarDados();
  }, [eventId]);

  const adicionarInscrito = () => {
    const limite = evento?.maxPerBuyer || 10;
    if (inscritos.length >= limite) {
      toast.error(`Máximo de ${limite} inscrição(ões) por comprador`);
      return;
    }
    setInscritos(prev => [...prev, { dados: {}, salvo: false, id: Date.now().toString(), batchId: null }]);
  };

  const removerInscrito = (id: string) => {
    if (inscritos.length === 1) {
      toast.error('É necessário pelo menos 1 inscrito');
      return;
    }
    // Usar funcional para garantir estado mais recente e evitar problemas de concorrência no DOM
    setInscritos(prev => prev.filter((i) => i.id !== id));
  };

  const salvarInscrito = (id: string) => {
    const inscrito = inscritos.find((i) => i.id === id);
    if (!inscrito) return;

    // Validar campos obrigatórios
    for (const campo of camposInscrito) {
      if (campo.isRequired && !inscrito.dados[campo.fieldName]) {
        toast.error(`Campo obrigatório: ${campo.label}`);
        return;
      }
    }

    // Marcar como salvo
    setInscritos(prev => prev.map((i) => (i.id === id ? { ...i, salvo: true } : i)));
    toast.success('Inscrito salvo!');
  };

  const atualizarDadosInscrito = (id: string, campo: string, valor: any) => {
    setInscritos(prev =>
      prev.map((i) =>
        i.id === id ? { ...i, dados: { ...i.dados, [campo]: valor }, salvo: false } : i
      )
    );
  };

  const carregarDados = async () => {
    setLoadingEvent(true);
    setLoadingDetails(true);

    // ============================================
    // OTIMIZAÇÃO: CARREGAMENTO PARALELO TOTAL
    // ============================================
    // Executar TODAS as APIs em paralelo ao mesmo tempo
    // ANTES: buscarEventoPublico (13s) → depois Promise.all (1s) = 14s
    // DEPOIS: Promise.all de TUDO = max(13s, 1s, 1s, 1s) = 13s
    // GANHO: ~1-3 segundos
    // ============================================

    const promises = [
      // Promise 1: Buscar evento (13s)
      buscarEventoPublico(eventId)
        .then(data => {
          setEvento(data);
          return data;
        })
        .catch(error => {
          console.error('Erro ao carregar evento:', error);
          toast.error('Erro ao carregar evento');
          throw error;
        }),

      // Promise 2: Buscar lotes (1s)
      listarLotesPublicos(eventId)
        .then(data => {
          setLotes(data.filter((l) => l.isActive));
          return data;
        })
        .catch(error => {
          console.error('Erro ao carregar lotes:', error);
          return [];
        }),

      // Promise 3: Buscar campos (1s)
      listarCamposFormulario(eventId)
        .then(data => {
          setCampos(data);
          return data;
        })
        .catch(error => {
          console.error('Erro ao carregar campos:', error);
          return [];
        }),

      // Promise 4: Buscar formas de pagamento (1s)
      buscarFormasPagamento(eventId)
        .then(data => {
          setFormasPagamento(data.filter((f) => f.isActive));
          return data;
        })
        .catch(error => {
          console.error('Erro ao carregar formas de pagamento:', error);
          return [];
        }),
    ];

    try {
      // Aguardar TODAS as promises em paralelo
      // Promise.allSettled garante que todas executem mesmo se alguma falhar
      await Promise.allSettled(promises);
    } catch (error) {
      console.error('Erro geral ao carregar dados:', error);
    } finally {
      setLoadingEvent(false);
      setLoadingDetails(false);
    }
  };

  const handleValidarCupom = async () => {
    const codigoLimpo = cupomCodigo.trim();
    if (!codigoLimpo) return;

    const loteParaValidar = inscritos.find((i) => i.batchId)?.batchId;
    if (!loteParaValidar) {
      toast.error('Selecione um lote antes de validar o cupom');
      return;
    }

    try {
      setValidandoCupom(true);
      const attendeesWithBatch = inscritos.filter((inscrito) => Boolean(inscrito.batchId));
      const attendeesDataForValidation = attendeesWithBatch.map((inscrito) => ({
        batchId: inscrito.batchId as string,
        data: inscrito.dados || {},
      }));
      const attendeesPayload = attendeesWithBatch.map((inscrito) => ({
        batchId: inscrito.batchId as string,
      }));
      const resultado = await validarCupom({
        code: codigoLimpo,
        eventId,
        batchId: loteParaValidar,
        quantity: attendeesWithBatch.length,
        attendees: attendeesPayload,
        attendeesData: attendeesDataForValidation,
      });
      if (resultado.valido) {
        setCupomValido(resultado.coupon);
        toast.success('Cupom aplicado com sucesso!');
      } else {
        setCupomValido(null);
        const resultadoMessage =
          getMessageFromPayload(resultado.message) || 'Cupom inválido';
        toast.error(resultadoMessage);
      }
    } catch (error: unknown) {
      const axiosLikeError = error as {
        response?: { data?: unknown };
        message?: unknown;
      };
      const errorMessage =
        getMessageFromPayload(axiosLikeError.response?.data) ||
        getMessageFromPayload(axiosLikeError.message) ||
        'Erro ao validar cupom';
      setCupomValido(null);
      toast.error(errorMessage);
    } finally {
      setValidandoCupom(false);
    }
  };

  const calcularSubtotal = () =>
    inscritos.reduce((sum, inscrito) => {
      if (!inscrito.batchId) return sum;
      const lote = lotesById.get(inscrito.batchId);
      return sum + (lote ? Number(lote.price) : 0);
    }, 0);

  const calcularDesconto = (subtotal: number) => {
    if (!cupomValido) return 0;
    if (cupomValido.discountType === 'percentage') {
      return subtotal * (Number(cupomValido.discountValue) / 100);
    }
    return Number(cupomValido.discountValue);
  };

  const calcularValorTotal = (installments = parcelas) => {
    // Somar preço de cada inscrito baseado no seu lote específico
    const subtotal = calcularSubtotal();
    if (subtotal === 0) return 0;

    let total = subtotal - calcularDesconto(subtotal);

    // Aplicar taxa apenas uma vez quando houver parcelamento
    if (formaPagamento && installments > 1) {
    const pagamento = findPaymentOption(formaPagamento);
      if (pagamento && pagamento.interestRate > 0) {
        if (pagamento.interestType === 'percentage') {
          total += total * (Number(pagamento.interestRate) / 100);
        } else {
          total += Number(pagamento.interestRate);
        }
      }
    }

    return Math.max(0, total);
  };

  const parseValorPagamento = () => Number(valorPagamento.replace(',', '.'));

  const validarFormulario = () => {
    // Validar que todos os inscritos têm um lote selecionado
    const inscritosSemLote = inscritos.filter((i) => !i.batchId);
    if (inscritosSemLote.length > 0) {
      toast.error(`Selecione um lote para todos os inscritos`);
      return false;
    }

    // Validar campos do comprador
    for (const campo of camposComprador) {
      if (campo.isRequired && !dadosComprador[campo.fieldName]) {
        toast.error(`Campo obrigatório: ${campo.label}`);
        return false;
      }
    }

    // Validar se todos os inscritos foram salvos
    const inscritosNaoSalvos = inscritos.filter((i) => !i.salvo);
    if (inscritosNaoSalvos.length > 0) {
      toast.error(`Existem ${inscritosNaoSalvos.length} inscrito(s) não salvo(s). Salve todos antes de continuar.`);
      return false;
    }

    // Validar forma de pagamento selecionada (somente quando ha valor a pagar)
    if (requiresPayment && !formaPagamento) {
      toast.error('Selecione uma forma de pagamento');
      return false;
    }

    // Validar dados de pagamento apenas para cartao de credito
    const formaSelecionada = findPaymentOption(formaPagamento);
    if (requiresPayment && formaSelecionada?.paymentType === 'credit_card') {
      if (!dadosPagamento.cardNumber || !dadosPagamento.cardHolder || 
          !dadosPagamento.expirationDate || !dadosPagamento.securityCode) {
        toast.error('Preencha todos os dados do cartao');
        return false;
      }

      const cardDigits = removeNonDigits(dadosPagamento.cardNumber || '');
      if (cardDigits.length < 13 || cardDigits.length > 19) {
        toast.error('Numero do cartao invalido');
        return false;
      }

      if (!isCardExpiryValid(dadosPagamento.expirationDate || '')) {
        toast.error('Validade do cartao invalida. Use o formato MM/AAAA');
        return false;
      }

      const cvvDigits = removeNonDigits(dadosPagamento.securityCode || '');
      if (cvvDigits.length < 3 || cvvDigits.length > 4) {
        toast.error('CVV invalido');
        return false;
      }
    }

    if (requiresPayment && evento?.registrationPaymentMode === 'BALANCE_DUE') {
      const total = calcularValorTotal();
      const valor = parseValorPagamento();
      if (!valor || valor <= 0) {
        toast.error('Informe o valor do sinal ou pagamento inicial');
        return false;
      }
      if (valor > total) {
        toast.error('O valor informado não pode ser maior que o total');
        return false;
      }
    }

    return true;
  };

  const ensureSelectedBatchesStillAvailable = async () => {
    try {
      const refreshedLotes = await listarLotesPublicos(eventId);
      setLotes(refreshedLotes.filter((lote) => lote.isActive));

      for (let index = 0; index < inscritos.length; index++) {
        const inscrito = inscritos[index];
        if (!inscrito.batchId) continue;

        const matchingBatch = refreshedLotes.find((lote) => lote.id === inscrito.batchId);
        if (!matchingBatch || !isBatchActiveNow(matchingBatch)) {
          const loteNome = matchingBatch?.name || 'selecionado';
          toast.error(
            `O lote ${loteNome} do Inscrito ${index + 1} não está mais disponível. Escolha outro lote.`
          );
          return false;
        }
      }

      return true;
    } catch (error) {
      console.error('Erro ao verificar lotes disponíveis antes da compra:', error);
      toast.error('Não foi possível validar a disponibilidade dos lotes. Tente novamente em instantes.');
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!hasLotAvailable) {
      toast.error('Inscrições encerradas para este evento.');
      return;
    }

    if (!validarFormulario()) return;
    if (!(await ensureSelectedBatchesStillAvailable())) return;

    try {
      setSubmitting(true);
      const pagamentoInicial =
        evento?.registrationPaymentMode === 'BALANCE_DUE' ? parseValorPagamento() : undefined;
      const resultado = await processarInscricao({
        eventId,
        quantity: inscritos.length,
        buyerData: dadosComprador,
        attendeesData: inscritos.map((i) => ({
          batchId: i.batchId!,
          data: i.dados
        })),
        couponCode: cupomValido ? cupomCodigo.trim() : undefined,
        paymentOptionId: requiresPayment ? formaPagamento : undefined,
        paymentData: requiresPayment
          ? {
              ...dadosPagamento,
              installments: parcelas,
              amount: pagamentoInicial,
            }
          : undefined,
      });

    const isSuccessful = Boolean(
      (resultado as RegistrationResponse & { sucesso?: boolean }).success ||
      (resultado as RegistrationResponse & { sucesso?: boolean }).sucesso
    );

    if (isSuccessful) {
      if (!requiresPayment) {
        setLocation(`/ticket/${resultado.orderCode}`);
        return;
      }
      const formaPagamentoSelecionada = findPaymentOption(formaPagamento);
      console.log('=== DEBUG REDIRECIONAMENTO ==>');
      console.log('formaPagamento (ID selecionado):', formaPagamento);
      console.log('formasPagamento (array completo):', formasPagamento);
      console.log('formaPagamentoSelecionada:', formaPagamentoSelecionada);
      console.log('paymentType:', formaPagamentoSelecionada?.paymentType);
      console.log('resultado.pagamento:', resultado.pagamento);
      console.log('qrCodeString:', resultado.pagamento?.qrCodeString);
      console.log('qrCodeBase64:', resultado.pagamento?.qrCodeBase64);

      if (formaPagamentoSelecionada?.paymentType === 'pix') {
        console.log('ENTRANDO NO IF DO PIX');
        const pixCode = resultado.pagamento?.qrCodeString || '';
        const qrCode = resultado.pagamento?.qrCodeBase64 || '';
        console.log('Redirecionando para:', `/pix-confirmacao?orderCode=${resultado.orderCode}`);
        setLocation(
          `/pix-confirmacao?orderCode=${resultado.orderCode}&pixCode=${encodeURIComponent(
            pixCode
          )}&qrCode=${encodeURIComponent(qrCode)}`
        );
        toast.info('Aguardando confirmação do PIX...');
        setTimeout(async () => {
          try {
            const registration = await consultarInscricao(resultado.orderCode);
            const status = registration.paymentStatus;
            if (status === 'confirmed' || status === 'paid') {
              setLocation(`/ticket/${resultado.orderCode}`);
            } else {
              setLocation(`/inscricao/${resultado.orderCode}`);
            }
          } catch (error) {
            console.error('Erro ao verificar pagamento do PIX:', error);
            setLocation(`/inscricao/${resultado.orderCode}`);
          }
        }, 5000);
      } else {
        console.log('ENTRANDO NO ELSE (CARTÃO)');
        await verificarPagamentoCartao(resultado.orderCode, resultado);
      }
    } else {
      const resultadoMessage =
        getMessageFromPayload(resultado) ||
        getMessageFromPayload((resultado as { message?: unknown }).message) ||
        'Nao foi possivel concluir a inscricao.';
      toast.error(resultadoMessage);
    }
  } catch (error: unknown) {
      console.error('Erro ao processar inscrição:', error);
      const axiosLikeError = error as {
        response?: { data?: unknown };
        message?: unknown;
      };
      const errorMessage =
        getMessageFromPayload(axiosLikeError.response?.data) ||
        getMessageFromPayload(axiosLikeError.message) ||
        'Erro ao processar inscrição';
      toast.error(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  const isCpfField = (campo: FormField) =>
    campo.fieldType === 'cpf' || campo.fieldName.toLowerCase().includes('cpf');
  const isWhatsAppField = (campo: FormField) => {
    const fieldName = campo.fieldName.toLowerCase();
    const label = (campo.label || '').toLowerCase();
    return (
      campo.fieldType === 'phone' ||
      fieldName.includes('whatsapp') ||
      fieldName.includes('telefone') ||
      label.includes('whatsapp')
    );
  };
  const renderCampo = (
    campo: FormField,
    valor: any,
    onChange: (value: any) => void,
    inputId?: string
  ) => {
    const commonProps = {
      id: inputId || campo.fieldName,
      placeholder: campo.placeholder,
      required: campo.isRequired,
    };

    switch (campo.fieldType) {
      case 'text':
        return (
          <DebouncedInput
            {...commonProps}
            type="text"
            value={valor || ''}
            onValueChange={onChange}
            transform={(nextValue) => {
              if (isCpfField(campo)) return maskCPForCNPJ(nextValue);
              if (isWhatsAppField(campo)) return maskPhone(nextValue);
              return nextValue;
            }}
            maxLength={isCpfField(campo) ? 18 : isWhatsAppField(campo) ? 15 : undefined}
          />
        );
      
      case 'email':
        return (
          <DebouncedInput 
            {...commonProps} 
            type="email" 
            value={valor || ''} 
            onValueChange={onChange}
            onBlur={(e) => {
              if (e.target.value && !validateEmail(e.target.value)) {
                toast.error('Email inválido');
              }
            }}
          />
        );
      
      case 'phone':
        return (
          <DebouncedInput 
            {...commonProps} 
            type="tel" 
            value={valor || ''} 
            onValueChange={onChange}
            transform={maskPhone}
            maxLength={15}
          />
        );
      
      case 'cpf':
        return (
          <DebouncedInput 
            {...commonProps} 
            type="text" 
            value={valor || ''} 
            onValueChange={onChange}
            transform={maskCPForCNPJ}
            onBlur={(e) => {
              const digits = removeNonDigits(e.target.value);
              if (digits && !validateCPForCNPJ(e.target.value)) {
                toast.error(digits.length === 11 ? 'CPF inválido' : 'CNPJ inválido');
              }
            }}
            placeholder="CPF ou CNPJ"
            maxLength={18}
          />
        );
      
      case 'number':
        return <Input {...commonProps} type="number" value={valor || ''} onChange={(e) => onChange(e.target.value)} />;
      
      case 'date':
        return <Input {...commonProps} type="date" value={valor || ''} onChange={(e) => onChange(e.target.value)} />;
      
      case 'textarea':
        return <DebouncedTextarea {...commonProps} value={valor || ''} onValueChange={onChange} />;
      
      case 'select':
        return (
          <Select value={valor || ''} onValueChange={onChange}>
            <SelectTrigger>
              <SelectValue placeholder={campo.placeholder || 'Selecione...'} />
            </SelectTrigger>
            <SelectContent>
              {campo.options?.map((opt) => (
                <SelectItem key={opt} value={opt}>{opt}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      
      case 'radio':
        return (
          <RadioGroup value={valor || ''} onValueChange={onChange}>
            {campo.options?.map((opt) => (
              <div key={opt} className="flex items-center space-x-2">
                <RadioGroupItem value={opt} id={`${campo.fieldName}-${opt}`} />
                <Label htmlFor={`${campo.fieldName}-${opt}`}>{opt}</Label>
              </div>
            ))}
          </RadioGroup>
        );
      
      case 'checkbox':
        return (
          <div className="space-y-2">
            {campo.options?.map((opt) => (
              <div key={opt} className="flex items-center space-x-2">
                <Checkbox
                  id={`${campo.fieldName}-${opt}`}
                  checked={Array.isArray(valor) && valor.includes(opt)}
                  onCheckedChange={(checked) => {
                    const newValue = Array.isArray(valor) ? [...valor] : [];
                    if (checked) {
                      newValue.push(opt);
                    } else {
                      const index = newValue.indexOf(opt);
                      if (index > -1) newValue.splice(index, 1);
                    }
                    onChange(newValue);
                  }}
                />
                <Label htmlFor={`${campo.fieldName}-${opt}`}>{opt}</Label>
              </div>
            ))}
          </div>
        );
      
      default:
        return <Input {...commonProps} value={valor || ''} onChange={(e) => onChange(e.target.value)} />;
    }
  };

  const camposComprador = useMemo(
    () => campos.filter((c) => c.section === 'buyer').sort((a, b) => a.orderIndex - b.orderIndex),
    [campos]
  );
  const camposInscrito = useMemo(
    () => campos.filter((c) => c.section === 'attendee').sort((a, b) => a.orderIndex - b.orderIndex),
    [campos]
  );
  const hasLoteSelecionado = inscritos.some((i) => Boolean(i.batchId));
  const cupomDigitado = cupomCodigo.trim();
  const subtotal = calcularSubtotal();
  const desconto = calcularDesconto(subtotal);
  const totalComTaxas = calcularValorTotal();
  const taxasAplicados = Math.max(0, totalComTaxas - Math.max(0, subtotal - desconto));
  const selectedPaymentOption = useMemo(
    () => findPaymentOption(formaPagamento),
    [formasPagamento, formaPagamento]
  );
  const requiresPayment = totalComTaxas > 0;
  const paymentUnavailableEffective = !hasLotAvailable || (requiresPayment && formasPagamento.length === 0);
  const valorPagamentoNumero = parseValorPagamento();
  const pagamentoAgora =
    evento?.registrationPaymentMode === 'BALANCE_DUE' && valorPagamentoNumero > 0
      ? valorPagamentoNumero
      : totalComTaxas;
  const saldoEstimado =
    evento?.registrationPaymentMode === 'BALANCE_DUE'
      ? Math.max(0, totalComTaxas - pagamentoAgora)
      : 0;
  const cardNumberDisplay = dadosPagamento.cardNumber?.trim() || '•••• •••• •••• ••••';
  const cardHolderDisplay = dadosPagamento.cardHolder?.trim() || 'NOME COMPLETO';
  const cardExpDisplay = dadosPagamento.expirationDate?.trim() || 'MM/AAAA';
  const cardCvvDisplay = dadosPagamento.securityCode?.trim() || '•••';

  useEffect(() => {
    if (evento?.registrationPaymentMode !== 'BALANCE_DUE') {
      if (valorPagamento !== '') {
        setValorPagamento('');
      }
      if (valorPagamentoEditado) {
        setValorPagamentoEditado(false);
      }
      return;
    }
    if (valorPagamentoEditado) return;
    if (!totalComTaxas) {
      if (valorPagamento !== '') {
        setValorPagamento('');
      }
      return;
    }
    const sugerido = evento.depositAmount ?? totalComTaxas;
    const proximoValor = sugerido.toFixed(2);
    if (valorPagamento !== proximoValor) {
      setValorPagamento(proximoValor);
    }
  }, [
    evento?.registrationPaymentMode,
    evento?.depositAmount,
    totalComTaxas,
    valorPagamento,
    valorPagamentoEditado,
  ]);

  if (loadingEvent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!evento) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardContent className="pt-6">
            <p>Evento não encontrado</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        <Button variant="ghost" onClick={() => setLocation('/eventos')} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </Button>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informações do Evento */}
          <Card className="overflow-hidden pt-0">
            {evento.imageUrl && (
              <div className="w-full aspect-video overflow-hidden">
                <img
                  src={evento.imageUrl}
                  alt={evento.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <CardHeader className="pt-6">
              <CardTitle className="text-3xl">{evento.title}</CardTitle>
              <CardDescription>{evento.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4" />
                <span>{new Date(evento.startDate).toLocaleDateString('pt-BR')}</span>
              </div>
              {evento.location && (
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>{evento.location}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {!hasLotAvailable && (
            <div className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-center text-sm font-semibold text-destructive">
              Inscrições encerradas — nenhum lote ativo dentro do período vigente.
            </div>
          )}
          {/* Dados do Comprador */}
          {camposComprador.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Dados do Comprador</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="[&>label]:mb-2 [&>label]:block [&>*:not(label)]:mb-4 [&>*:not(label):last-child]:mb-0">
                  {camposComprador.map((campo) => (
                    <Fragment key={campo.id}>
                      <Label htmlFor={campo.fieldName}>
                        {campo.label}
                        {campo.isRequired && <span className="text-red-500 ml-1">*</span>}
                      </Label>
                      {renderCampo(
                        campo,
                        dadosComprador[campo.fieldName],
                        (value) => setDadosComprador((prev) => ({ ...prev, [campo.fieldName]: value })),
                        campo.fieldName
                      )}
                    </Fragment>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Dados dos Inscritos */}
          {camposInscrito.length > 0 && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Dados dos Inscritos</CardTitle>
                    <CardDescription>
                      {inscritos.length} inscrito(s) - {inscritos.filter((i) => i.salvo).length} salvo(s)
                    </CardDescription>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={adicionarInscrito}
                    disabled={!hasLotAvailable || inscritos.length >= (evento?.maxPerBuyer || 10)}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar Inscrito
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {inscritos.map((inscrito, index) => (
                    <AccordionItem key={inscrito.id} value={inscrito.id}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-2 w-full">
                          <span className="font-medium">
                            Inscrito {index + 1}
                            {inscrito.batchId && (
                              <span className="text-muted-foreground font-normal ml-2">
                                - {lotes.find(l => l.id === inscrito.batchId)?.name}
                              </span>
                            )}
                          </span>
                          {inscrito.salvo ? (
                            <Badge variant="secondary" className="ml-2">
                              <Check className="h-3 w-3 mr-1" />
                              Salvo
                            </Badge>
                          ) : (
                            <Badge variant="destructive" className="ml-2">
                              <X className="h-3 w-3 mr-1" />
                              Não salvo
                            </Badge>
                          )}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pt-4">
                          {/* Seletor de Lote */}
                          <div>
                            <Label htmlFor={`lote-${inscrito.id}`}>
                              Lote
                              <span className="text-red-500 ml-1">*</span>
                            </Label>
                            <Select 
                              value={inscrito.batchId || ''} 
                              onValueChange={(v) => {
                                setInscritos(prev => prev.map((i) => 
                                  i.id === inscrito.id ? { ...i, batchId: v } : i
                                ));
                              }}
                              disabled={!lotesAtivosNoRange.length}
                            >
                              <SelectTrigger id={`lote-${inscrito.id}`}>
                                <SelectValue placeholder="Selecione o lote" />
                              </SelectTrigger>
                              <SelectContent>
                                {lotesAtivosNoRange.map((lote) => {
                                  const esgotado = lote.vagasDisponiveis != null && lote.vagasDisponiveis <= 0;
                                  return (
                                    <SelectItem 
                                      key={lote.id} 
                                      value={lote.id}
                                      disabled={esgotado}
                                    >
                                      {lote.name} - R$ {Number(lote.price).toFixed(2)}
                                    </SelectItem>
                                  );
                                })}
                              </SelectContent>
                            </Select>
                            {!lotesAtivosNoRange.length && (
                              <p className="text-xs text-red-600 mt-1">
                                Nenhum lote ativo dentro da data vigente.
                              </p>
                            )}
                          </div>
                          
                          <div className="[&>label]:mb-2 [&>label]:block [&>*:not(label)]:mb-4 [&>*:not(label):last-child]:mb-0">
                            {camposInscrito.map((campo) => (
                              <Fragment key={campo.id}>
                                <Label htmlFor={`${campo.fieldName}-${inscrito.id}`}>
                                  {campo.label}
                                  {campo.isRequired && <span className="text-red-500 ml-1">*</span>}
                                </Label>
                                {renderCampo(
                                  campo,
                                  inscrito.dados[campo.fieldName],
                                  (value) => atualizarDadosInscrito(inscrito.id, campo.fieldName, value),
                                  `${campo.fieldName}-${inscrito.id}`
                                )}
                              </Fragment>
                            ))}
                          </div>
                          <div className="flex gap-2 pt-4">
                            <Button
                              type="button"
                              onClick={() => salvarInscrito(inscrito.id)}
                              disabled={inscrito.salvo}
                            >
                              <Check className="h-4 w-4 mr-2" />
                              Salvar Inscrito
                            </Button>
                            {inscritos.length > 1 && (
                              <Button
                                type="button"
                                variant="destructive"
                                onClick={() => removerInscrito(inscrito.id)}
                              >
                                <X className="h-4 w-4 mr-2" />
                                Remover
                              </Button>
                            )}
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
            </CardContent>
          </Card>
        )}

        {/* Seleção de Lote e Quantidade */}
        <Card>
          <CardHeader>
            <CardTitle>Quantidade de Inscrições</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-900">
                <strong>Quantidade de inscrições:</strong> {inscritos.length}
              </p>
              <p className="text-xs text-blue-700 mt-1">
                Use o botão "Adicionar Inscrito" na seção acima para adicionar mais inscrições
                {evento.maxPerBuyer && ` (máximo ${evento.maxPerBuyer})`}
              </p>
            </div>

            {/* Cupom */}
            <div className="flex gap-2">
              <div className="flex-1">
                <Label>Cupom de Desconto (opcional)</Label>
                <Input
                  value={cupomCodigo}
                  onChange={(e) => {
                    const value = e.target.value.toUpperCase();
                    setCupomCodigo(value);
                    setCupomValido(null);
                  }}
                  placeholder="Digite o código"
                />
                {!hasLoteSelecionado && cupomDigitado && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Selecione um lote antes de aplicar o cupom para que possamos validar o desconto.
                  </p>
                )}
              </div>
              <Button
                type="button"
                onClick={handleValidarCupom}
                disabled={!cupomDigitado || validandoCupom || !hasLoteSelecionado}
                className="mt-auto"
              >
                {validandoCupom ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Aplicar'}
              </Button>
            </div>

            {cupomValido && (
              <Badge variant="secondary" className="w-fit">
                <Tag className="h-3 w-3 mr-1" />
                 Desconto aplicado: {cupomValido.discountType === 'percentage' ? `${cupomValido.discountValue}%` : `R$ ${Number(cupomValido.discountValue).toFixed(2)}`}
              </Badge>
            )}

            {/* Resumo */}
            {inscritos.some(i => i.batchId) && (
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>R$ {subtotal.toFixed(2)}</span>
                </div>
                {cupomValido && (
                  <div className="flex justify-between text-green-600">
                    <span>Desconto:</span>
                    <span>- R$ {Math.min(desconto, subtotal).toFixed(2)}</span>
                  </div>
                )}
                {taxasAplicados > 0 && (
                  <div className="flex justify-between text-orange-600">
                    <span>Taxas:</span>
                    <span>+ R$ {taxasAplicados.toFixed(2)}</span>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total:</span>
                  <span>R$ {totalComTaxas.toFixed(2)}</span>
                </div>
                {formaPagamento && parcelas > 1 && (
                  <div className="text-sm text-muted-foreground">
                    Parcelado em {parcelas}x de R$ {(totalComTaxas / parcelas).toFixed(2)}
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Forma de Pagamento */}
        {requiresPayment && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Forma de Pagamento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {formasPagamento.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  Nenhuma forma de pagamento ativa foi encontrada para este evento.
                </p>
              ) : (
                <>
                <div>
                  <Label>Selecione a forma de pagamento</Label>
                  <Select
                    value={formaPagamento}
                    onValueChange={(value) => {
                      setFormaPagamento(value);
                      const selecionada = findPaymentOption(value);
                      if (selecionada?.paymentType !== 'credit_card') {
                        setParcelas(1);
                      }
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Escolha uma opção" />
                    </SelectTrigger>
                    <SelectContent>
                      {formasPagamento.map((forma) => (
                        <SelectItem key={forma.id} value={forma.id.toString()}>
                          {forma.paymentType === 'credit_card' && 'Cartão de Crédito'}
                          {forma.paymentType === 'pix' && 'PIX'}
                          {forma.paymentType === 'boleto' && 'Boleto'}
                          {forma.paymentType === 'credit_card' && forma.maxInstallments > 1 && ` (até ${forma.maxInstallments}x)`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {evento?.registrationPaymentMode === 'BALANCE_DUE' && (
                  <div className="rounded-lg border bg-blue-50 p-4 space-y-3">
                    <div>
                      <Label htmlFor="valor-pagamento">Valor do sinal/pagamento inicial</Label>
                      <Input
                        id="valor-pagamento"
                        type="number"
                        min="0"
                        step="0.01"
                        max={totalComTaxas}
                        value={valorPagamento}
                        onChange={(e) => {
                          setValorPagamento(e.target.value);
                          setValorPagamentoEditado(true);
                        }}
                        placeholder="0,00"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Você pode pagar apenas um sinal agora e quitar o restante depois.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {evento?.depositAmount && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setValorPagamento(evento.depositAmount?.toFixed(2) ?? '');
                            setValorPagamentoEditado(true);
                          }}
                        >
                          Usar sinal sugerido (R$ {evento.depositAmount.toFixed(2)})
                        </Button>
                      )}
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setValorPagamento(totalComTaxas.toFixed(2));
                          setValorPagamentoEditado(true);
                        }}
                      >
                        Pagar total
                      </Button>
                    </div>
                  </div>
                )}
                
                {/* Parcelas (apenas para cartão) */}
                {formaPagamento && selectedPaymentOption?.paymentType === 'credit_card' && (
                  <div>
                    <Label>Número de Parcelas</Label>
                    <Select value={parcelas.toString()} onValueChange={(v) => setParcelas(parseInt(v))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from(
                          { length: selectedPaymentOption?.maxInstallments || 1 },
                          (_, i) => i + 1
                        ).map((p) => {
                          const pagamento = selectedPaymentOption;
                          const totalParcelado = calcularValorTotal(p);
                          const valorParcela = totalParcelado / p;
                          const semTaxas = !pagamento || pagamento.interestRate === 0 || p === 1;
                          return (
                            <SelectItem key={p} value={p.toString()}>
                              {p}x de R$ {valorParcela.toFixed(2)}
                              {semTaxas ? ' sem taxas' : ` (${pagamento.interestRate}% ${pagamento.interestType === 'percentage' ? 'taxa única' : 'fixo'})`}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                )}
                
                {/* Dados do Cartao (apenas para cartao) */}
                {formaPagamento && selectedPaymentOption?.paymentType === 'credit_card' && (
                  <div className="space-y-4 pt-4 border-t">
                    <h4 className="font-medium">Dados do Cartao</h4>
                    <div className="grid gap-6 md:grid-cols-[1fr,360px] md:items-start">
                      <div className="space-y-4">
                        <div>
                          <Label>Numero do Cartao</Label>
                          <Input
                            placeholder="0000 0000 0000 0000"
                            value={dadosPagamento.cardNumber}
                            onChange={(e) => {
                              const masked = maskCreditCard(e.target.value);
                              setDadosPagamento({ ...dadosPagamento, cardNumber: masked });
                            }}
                            maxLength={19}
                            required
                          />
                        </div>
                        <div>
                          <Label>Nome no Cartao</Label>
                          <Input
                            placeholder="NOME COMPLETO"
                            value={dadosPagamento.cardHolder}
                            onChange={(e) =>
                              setDadosPagamento({
                                ...dadosPagamento,
                                cardHolder: e.target.value.toUpperCase(),
                              })
                            }
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label>Validade (MM/AAAA)</Label>
                            <Input
                              placeholder="12/2030"
                              value={dadosPagamento.expirationDate}
                              onChange={(e) => {
                                const masked = maskCardExpiry(e.target.value);
                                setDadosPagamento({ ...dadosPagamento, expirationDate: masked });
                              }}
                              maxLength={7}
                              required
                            />
                          </div>
                          <div>
                            <Label>CVV</Label>
                            <Input
                              placeholder="123"
                              type="password"
                              value={dadosPagamento.securityCode}
                              onChange={(e) => {
                                const masked = maskCVV(e.target.value);
                                setDadosPagamento({ ...dadosPagamento, securityCode: masked });
                              }}
                              maxLength={4}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:justify-self-end">
                        <div className="mx-auto w-full max-w-[360px]">
                          <div className="relative aspect-[1.586] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-5 text-white shadow-lg">
                        <div className="absolute right-5 top-5 h-10 w-16 rounded-md border border-white/15 bg-white/10" />
                        <div className="flex items-center justify-between">
                          <div className="h-9 w-12 rounded-md bg-gradient-to-br from-amber-300/90 to-amber-500/90 shadow-inner" />
                          <div className="text-xs uppercase tracking-[0.3em] text-white/70">
                            Cartão
                          </div>
                        </div>
                        <div className="mt-6 text-xl font-semibold tracking-[0.2em]">
                          {cardNumberDisplay}
                        </div>
                        <div className="mt-6 grid grid-cols-2 gap-4 text-[11px] uppercase text-white/70">
                          <div>
                            <div className="text-[10px] tracking-[0.4em] text-white/50">Titular</div>
                            <div className="mt-1 text-sm text-white">{cardHolderDisplay}</div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <div className="text-[10px] tracking-[0.4em] text-white/50">Validade</div>
                              <div className="mt-1 text-sm text-white">{cardExpDisplay}</div>
                            </div>
                            <div>
                              <div className="text-[10px] tracking-[0.4em] text-white/50">CVV</div>
                              <div className="mt-1 text-sm text-white">{cardCvvDisplay}</div>
                            </div>
                          </div>
                        </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Mensagem para PIX/Boleto */}
                {formaPagamento && ['pix', 'boleto'].includes(selectedPaymentOption?.paymentType || '') && (
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-900">
                      {selectedPaymentOption?.paymentType === 'pix'
                        ? 'Apos finalizar a inscrição, voce recebera o QR Code do PIX para pagamento.'
                        : 'Apos finalizar a inscrição, voce recebera o boleto para pagamento.'}
                    </p>
                  </div>
                )}
                </>
              )}
            </CardContent>
          </Card>
        )}

          {/* Botao de Envio */}
          <Button type="submit" size="lg" className="w-full" disabled={submitting || paymentUnavailableEffective}>
            {paymentUnavailableEffective ? (
              !hasLotAvailable ? 'ENCERRADO' : 'Forma de pagamento indisponivel'
            ) : submitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Processando...
              </>
            ) : (
              `Finalizar Inscrição - R$ ${pagamentoAgora.toFixed(2)}`
            )}
          </Button>
        </form>
        <Dialog open={cardDeniedModalOpen} onOpenChange={setCardDeniedModalOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Pagamento não autorizado</DialogTitle>
              <DialogDescription>
                {cardDeniedMessage || 'Nao foi possivel autorizar a compra pelo cartao de crédito.'}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button onClick={() => setCardDeniedModalOpen(false)} className="w-full">
                Fechar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
