import { useEffect, useMemo, useState } from 'react';
import { useLocation, useRoute } from 'wouter';
import { ArrowLeft, CheckCircle2, CreditCard, Loader2, QrCode } from 'lucide-react';
import { toast } from 'sonner';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import {
  buscarFormasPagamento,
  consultarInscricao,
  criarPagamentoInscricao,
  type CreateRegistrationPaymentPayload,
  type PaymentOption,
  type RegistrationDetails,
  type RegistrationPayment,
} from '@/lib/eventsApi';
import { maskCardExpiry, maskCreditCard, maskCVV, removeNonDigits } from '@/lib/masks';

const normalizeStatus = (status?: string | null) =>
  (status ?? '').trim().toLowerCase();

const isCancelledStatus = (status?: string | null) => {
  const normalized = normalizeStatus(status);
  return normalized === 'canceled' || normalized === 'cancelled';
};

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const formatCurrency = (value: number) => currencyFormatter.format(value || 0);

const formatDateTime = (value: string) => {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const paymentStatusLabel: Record<RegistrationDetails['paymentStatus'], string> = {
  pending: 'Pendente',
  partial: 'Parcial',
  paid: 'Pago',
  confirmed: 'Confirmado',
  canceled: 'Cancelado',
  cancelled: 'Cancelado',
};

const paymentStatusVariant: Record<RegistrationDetails['paymentStatus'], 'default' | 'secondary' | 'destructive'> = {
  pending: 'secondary',
  partial: 'default',
  paid: 'default',
  confirmed: 'default',
  canceled: 'destructive',
  cancelled: 'destructive',
};

const methodLabel: Record<RegistrationPayment['method'], string> = {
  pix: 'PIX',
  credit_card: 'Cartão',
  cash: 'Dinheiro',
};

const channelLabel: Record<RegistrationPayment['channel'], string> = {
  ONLINE: 'Online',
  OFFLINE: 'Presencial',
};

const channelBadgeVariant: Record<RegistrationPayment['channel'], 'default' | 'secondary'> = {
  ONLINE: 'default',
  OFFLINE: 'secondary',
};

const statusBadgeVariant: Record<RegistrationPayment['status'], 'default' | 'secondary' | 'destructive'> = {
  pending: 'secondary',
  confirmed: 'default',
  failed: 'destructive',
  canceled: 'destructive',
};

const statusLabel: Record<RegistrationPayment['status'], string> = {
  pending: 'Pendente',
  confirmed: 'Confirmado',
  failed: 'Falhou',
  canceled: 'Cancelado',
};

const initialCardData = {
  cardNumber: '',
  cardHolder: '',
  expirationDate: '',
  securityCode: '',
};

const formatNumberInput = (value: number) => value.toFixed(2);

export default function RegistrationView() {
  const [, params] = useRoute('/inscricao/:orderCode/visualizacao');
  const [, setLocation] = useLocation();
  const orderCode = params?.orderCode;

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [registration, setRegistration] = useState<RegistrationDetails | null>(null);
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState<'pix' | 'credit_card'>('pix');
  const [paymentOptions, setPaymentOptions] = useState<PaymentOption[]>([]);
  const [selectedPaymentOptionId, setSelectedPaymentOptionId] = useState('');
  const [loadingPaymentOptions, setLoadingPaymentOptions] = useState(false);
  const [installments, setInstallments] = useState(1);
  const [cardData, setCardData] = useState(initialCardData);
  const [copyingPixCode, setCopyingPixCode] = useState(false);

  const handleCopyPixCode = async () => {
    if (!registration?.pixQrCode) {
      toast.error('Código PIX não disponível');
      return;
    }
    try {
      setCopyingPixCode(true);
      await navigator.clipboard.writeText(registration.pixQrCode);
      toast.success('Código PIX copiado');
    } catch (error) {
      console.error('Erro ao copiar PIX code', error);
      toast.error('Não foi possível copiar o código PIX');
    } finally {
      setCopyingPixCode(false);
    }
  };

  const carregarInscricao = async () => {
    if (!orderCode) return;
    try {
      setLoading(true);
      const data = await consultarInscricao(orderCode);
      setRegistration(data);
    } catch (error) {
      console.error('Erro ao carregar inscrição:', error);
      toast.error('Não foi possível carregar os dados da inscrição');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!orderCode) return;
    carregarInscricao();
  }, [orderCode]);

  useEffect(() => {
    if (method !== 'credit_card') {
      setCardData(initialCardData);
      setInstallments(1);
    }
  }, [method]);

  useEffect(() => {
    const eventId = registration?.event?.id;
    if (!eventId) {
      setPaymentOptions([]);
      setSelectedPaymentOptionId('');
      return;
    }

    let cancelled = false;

    (async () => {
      try {
        setLoadingPaymentOptions(true);
        const options = await buscarFormasPagamento(eventId);
        if (cancelled) return;
        const activeOptions = options.filter(
          (opt) => opt.isActive && opt.eventId === eventId
        );
        setPaymentOptions(activeOptions);
      } catch (error) {
        console.error('Erro ao carregar formas de pagamento:', error);
      } finally {
        if (!cancelled) {
          setLoadingPaymentOptions(false);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [registration?.event?.id]);

  const sortedPayments = useMemo(() => {
    if (!registration) return [];
    const payments = Array.isArray(registration.payments) ? registration.payments : [];
    return [...payments].sort((a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }, [registration]);

  const normalizedPaymentStatus = normalizeStatus(registration?.paymentStatus);
  const isCancelled = isCancelledStatus(registration?.paymentStatus);
  const isPaid = registration
    ? !isCancelled &&
      (normalizedPaymentStatus === 'paid' ||
        normalizedPaymentStatus === 'confirmed' ||
        registration.remaining <= 0)
    : false;

  const eventPaymentMode = registration?.event?.registrationPaymentMode;
  const isBalanceDueMode = eventPaymentMode === 'BALANCE_DUE';
  const eventTitle = registration?.event?.title ?? 'Evento';
  const paymentModeLabel = eventPaymentMode
    ? isBalanceDueMode
      ? 'Saldo a quitar'
      : 'Pagamento único'
      : 'Modo de pagamento indisponível';

  const canPay =
    registration &&
    isBalanceDueMode &&
    !isPaid &&
    !isCancelled &&
    registration.remaining > 0;

  const eventIdForRegistration = registration?.event?.id;
  const optionsForMethod = paymentOptions.filter(
    (option) => option.paymentType === method && option.eventId === eventIdForRegistration
  );

  useEffect(() => {
    if (!optionsForMethod.length) {
      setSelectedPaymentOptionId('');
      return;
    }
    if (!optionsForMethod.some((option) => option.id === selectedPaymentOptionId)) {
      setSelectedPaymentOptionId(optionsForMethod[0].id);
    }
  }, [method, optionsForMethod]);

  const selectedPaymentOption = paymentOptions.find((option) => option.id === selectedPaymentOptionId);
  const showCreditCardFields =
    method === 'credit_card' && selectedPaymentOption?.paymentType === 'credit_card';
  const maxInstallments = Math.max(1, selectedPaymentOption?.maxInstallments ?? 1);
  const installmentOptions = Array.from({ length: maxInstallments }, (_, index) => index + 1);
  const interestDescription =
    selectedPaymentOption && selectedPaymentOption.interestRate > 0
      ? selectedPaymentOption.interestType === 'percentage'
        ? `${selectedPaymentOption.interestRate}% ao mês`
        : `R$ ${selectedPaymentOption.interestRate.toFixed(2)} fixo`
      : 'Sem juros';

  useEffect(() => {
    if (method === 'credit_card' && installments > maxInstallments) {
      setInstallments(maxInstallments);
    }
  }, [installments, method, maxInstallments]);

  const handleSubmitPayment = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!registration) return;

    const parsedAmount = Number(amount.replace(',', '.'));
    if (!parsedAmount || parsedAmount <= 0) {
      toast.error('Informe um valor válido para pagamento.');
      return;
    }

    if (parsedAmount > registration.remaining) {
      toast.error('O valor informado é maior que o saldo restante.');
      return;
    }

    if (!selectedPaymentOptionId) {
      toast.error('Selecione uma opção de pagamento ativa.');
      return;
    }

    const selectedPaymentOption = paymentOptions.find((option) => option.id === selectedPaymentOptionId);
    if (!selectedPaymentOption) {
      toast.error('Opção de pagamento inválida.');
      return;
    }

    if (method === 'credit_card') {
      const sanitizedCardNumber = removeNonDigits(cardData.cardNumber);
      if (!sanitizedCardNumber || !cardData.cardHolder.trim() || !cardData.expirationDate || !cardData.securityCode) {
        toast.error('Preencha todos os dados do cartão.');
        return;
      }
    }

    try {
      setSubmitting(true);
      const payload: CreateRegistrationPaymentPayload = {
        amount: parsedAmount,
        method,
        paymentOptionId: selectedPaymentOption.id,
      };

      if (method === 'credit_card') {
        payload.paymentData = {
          cardNumber: removeNonDigits(cardData.cardNumber),
          cardHolder: cardData.cardHolder.trim(),
          expirationDate: cardData.expirationDate,
          securityCode: cardData.securityCode,
          installments,
          amount: parsedAmount,
        };
      }

      const updated = await criarPagamentoInscricao(registration.id, payload);
      setRegistration(updated);
      setAmount('');
      if (method === 'credit_card') {
        setCardData(initialCardData);
        setInstallments(1);
      }
      toast.success('Pagamento enviado com sucesso.');
    } catch (error) {
      console.error('Erro ao criar pagamento:', error);
      toast.error('Não foi possível registrar o pagamento.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!orderCode) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle>Inscrição não encontrada</CardTitle>
            <CardDescription>Não foi possível identificar a inscrição.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => setLocation('/eventos')} className="w-full">
              Voltar para eventos
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  if (!registration) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle>Erro ao carregar inscrição</CardTitle>
            <CardDescription>Tente novamente mais tarde.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button onClick={carregarInscricao} className="w-full">
              Recarregar
            </Button>
            <Button onClick={() => setLocation('/eventos')} variant="outline" className="w-full">
              Voltar para eventos
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="container max-w-4xl mx-auto space-y-6">
        <Button variant="ghost" onClick={() => setLocation('/eventos')}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar para eventos
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="flex flex-wrap items-center gap-3">
              Visualização da Inscrição
              <Badge variant={paymentStatusVariant[registration.paymentStatus]}>
                {paymentStatusLabel[registration.paymentStatus]}
              </Badge>
            </CardTitle>
            <CardDescription>
              Evento: <span className="font-medium">{eventTitle}</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span>ID da inscrição: {registration.id}</span>
              <span>Modo de pagamento: {paymentModeLabel}</span>
            </div>
          </CardContent>
        </Card>

        {isCancelled && (
          <Card>
            <CardHeader>
              <CardTitle className="text-rose-600">Inscrição cancelada</CardTitle>
              <CardDescription>
                Esta inscrição foi cancelada e não pode ser atualizada ou reaberta.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-rose-700">
              Qualquer parcela ou QR Code gerado anteriormente não deve ser utilizado.
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Status financeiro</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border bg-white p-4">
                <p className="text-xs text-muted-foreground">Total</p>
                <p className="text-lg font-semibold">{formatCurrency(registration.finalPrice)}</p>
              </div>
              <div className="rounded-lg border bg-white p-4">
                <p className="text-xs text-muted-foreground">Pago</p>
                <p className="text-lg font-semibold text-green-700">
                  {formatCurrency(registration.paidTotal)}
                </p>
              </div>
              <div className="rounded-lg border bg-white p-4">
                <p className="text-xs text-muted-foreground">Restante</p>
                <p className="text-lg font-semibold text-amber-700">
                  {formatCurrency(registration.remaining)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {registration.attendees && registration.attendees.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Dados dos Inscritos</CardTitle>
              <CardDescription>verifique o nome e os dados cadastrados.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {registration.attendees.map((attendee, index) => {
                const entries = Object.entries(attendee.attendeeData);
                return (
                  <div key={attendee.id} className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-semibold">
                        Inscrito {attendee.attendeeNumber || index + 1}
                      </span>
                      {attendee.batch?.name && (
                        <Badge variant="secondary" className="text-xs">
                          Lote: {attendee.batch.name}
                        </Badge>
                      )}
                    </div>
                    <div className="grid gap-3 md:grid-cols-2">
                      {entries.map(([field, value]) => (
                        <div key={`${attendee.id}-${field}`} className="text-sm space-y-1">
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">
                            {field}
                          </p>
                          <p className="font-medium">{value}</p>
                        </div>
                      ))}
                    </div>
                    {index < registration.attendees!.length - 1 && <Separator />}
                  </div>
                );
              })}
            </CardContent>
          </Card>
        )}

        {registration.pixQrCodeBase64 && !isPaid && !isCancelled && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <QrCode className="h-5 w-5" />
                PIX pendente
              </CardTitle>
              <CardDescription>
                Use o QR Code abaixo para concluir o pagamento pendente.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <img
                src={`data:image/png;base64,${registration.pixQrCodeBase64}`}
                alt="QR Code PIX"
                className="w-56 h-56 border rounded-lg bg-white"
              />
              <p className="text-sm text-muted-foreground text-center">
                Após o pagamento, esta tela será atualizada automaticamente.
              </p>
              {registration.pixQrCode && (
                <div className="w-full max-w-xl space-y-2">
                  <Label className="text-xs uppercase tracking-wide">Código PIX</Label>
                  <div className="flex gap-2">
                    <Input value={registration.pixQrCode} readOnly className="flex-1" />
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleCopyPixCode}
                      disabled={copyingPixCode}
                    >
                      {copyingPixCode ? 'Copiando...' : 'Copiar código'}
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {isPaid && registration.checkinQrCode && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                Inscrição quitada
              </CardTitle>
              <CardDescription>Apresente o QR Code no check-in.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <img
                src={`data:image/png;base64,${registration.checkinQrCode}`}
                alt="QR Code de check-in"
                className="w-56 h-56 border rounded-lg bg-white"
              />
              <p className="text-sm text-green-700 font-medium">Pagamento concluído.</p>
            </CardContent>
          </Card>
        )}

        {canPay && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Realizar novo pagamento
              </CardTitle>
              <CardDescription>
                Informe o valor que deseja pagar agora. O saldo restante será atualizado automaticamente.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitPayment} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="payment-amount">Valor do pagamento</Label>
                    <Input
                      id="payment-amount"
                      type="number"
                      min="0"
                      step="0.01"
                      max={registration.remaining}
                      value={amount}
                      onChange={(event) => setAmount(event.target.value)}
                      placeholder="0,00"
                    />
                    {method === 'pix' && registration && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          type="button"
                          onClick={() => setAmount(formatNumberInput(registration.remaining))}
                        >
                          Pagar total agora (R$ {formatCurrency(registration.remaining)})
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          type="button"
                          onClick={() => setAmount('')}
                        >
                          Registrar outra parcela
                        </Button>
                      </div>
                    )}
                    <p className="text-xs text-muted-foreground">
                      Saldo restante: {formatCurrency(registration.remaining)}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label>Método de pagamento</Label>
                    <Select value={method} onValueChange={(value) => setMethod(value as 'pix' | 'credit_card')}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pix">PIX</SelectItem>
                        <SelectItem value="credit_card">Cartão</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="space-y-1">
                      <Label htmlFor="payment-option">Opção ativa</Label>
                      <Select
                        id="payment-option"
                        value={selectedPaymentOptionId}
                        onValueChange={(value) => setSelectedPaymentOptionId(value)}
                        disabled={loadingPaymentOptions || !optionsForMethod.length}
                      >
                        <SelectTrigger>
                          <SelectValue
                            placeholder={
                              loadingPaymentOptions
                                ? 'Carregando opções...'
                                : optionsForMethod.length
                                ? 'Selecione uma opção'
                                : 'Nenhuma opção disponível'
                            }
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {optionsForMethod.map((option) => {
                            const methodLabel = option.paymentType === 'pix' ? 'PIX' : 'Cartão';
                            const interestText =
                              option.interestRate > 0
                                ? option.interestType === 'percentage'
                                  ? `${option.interestRate}% ao mês`
                                  : `R$ ${option.interestRate.toFixed(2)} fixo`
                                : 'Sem juros';
                            return (
                              <SelectItem key={option.id} value={option.id}>
                                {methodLabel} — {interestText}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                      {!loadingPaymentOptions && !optionsForMethod.length && (
                        <p className="text-xs text-destructive">
                          Nenhuma forma ativa encontrada para {method === 'pix' ? 'PIX' : 'Cartão'}.
                        </p>
                      )}
                </div>
              </div>
            </div>
            {showCreditCardFields && selectedPaymentOption && (
              <div className="space-y-6 pt-4 border-t">
                {maxInstallments > 1 && (
                  <div className="space-y-2">
                    <Label>Número de parcelas</Label>
                    <Select value={installments.toString()} onValueChange={(value) => setInstallments(Number(value))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Quantidade de parcelas" />
                      </SelectTrigger>
                      <SelectContent>
                        {installmentOptions.map((option) => (
                          <SelectItem key={option} value={option.toString()}>
                            {option}x
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">Juros do plano: {interestDescription}</p>
                  </div>
                )}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium">Dados do Cartão</h4>
                    <span className="text-xs text-muted-foreground">
                      {selectedPaymentOption.interestRate > 0 ? 'Pagamento com juros' : 'Sem juros'}
                    </span>
                  </div>
                  <div>
                    <Label>Número do Cartão</Label>
                    <Input
                      placeholder="0000 0000 0000 0000"
                      value={cardData.cardNumber}
                      onChange={(event) => {
                        const masked = maskCreditCard(event.target.value);
                        setCardData((prev) => ({ ...prev, cardNumber: masked }));
                      }}
                      maxLength={19}
                    />
                  </div>
                  <div>
                    <Label>Nome no Cartão</Label>
                    <Input
                      placeholder="NOME COMPLETO"
                      value={cardData.cardHolder}
                      onChange={(event) =>
                        setCardData((prev) => ({ ...prev, cardHolder: event.target.value.toUpperCase() }))
                      }
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Validade (MM/AAAA)</Label>
                      <Input
                        placeholder="MM/AAAA"
                        value={cardData.expirationDate}
                        onChange={(event) => {
                          const masked = maskCardExpiry(event.target.value);
                          setCardData((prev) => ({ ...prev, expirationDate: masked }));
                        }}
                        maxLength={7}
                      />
                    </div>
                    <div>
                      <Label>CVV</Label>
                      <Input
                        placeholder="123"
                        type="password"
                        value={cardData.securityCode}
                        onChange={(event) => {
                          const masked = maskCVV(event.target.value);
                          setCardData((prev) => ({ ...prev, securityCode: masked }));
                        }}
                        maxLength={4}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {method === 'pix' && (
              <div className="space-y-2 rounded-lg border border-dashed border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
                <p>
                  Após gerar o pagamento via PIX, o QR Code será exibido abaixo para você concluir o pagamento
                  diretamente pelo seu aplicativo bancário.
                </p>
                <p className="text-xs text-blue-800">
                  A atualização do status e do saldo ocorrerá automaticamente assim que o PIX for confirmado.
                </p>
              </div>
            )}
            <Button
              type="submit"
              disabled={
                submitting ||
                loadingPaymentOptions ||
                !optionsForMethod.length ||
                !selectedPaymentOptionId
              }
              className="w-full"
            >
              {submitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Processando...
                </span>
              ) : (
                'Pagar agora'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    )}

        <Card>
          <CardHeader>
            <CardTitle>Histórico de pagamentos</CardTitle>
            <CardDescription>
              {sortedPayments.length === 0
                ? 'Nenhum pagamento registrado até o momento.'
                : 'Confira os pagamentos já realizados.'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {sortedPayments.length === 0 ? (
              <p className="text-sm text-muted-foreground">Sem pagamentos registrados.</p>
            ) : (
              sortedPayments.map((payment, index) => (
                <div key={payment.id} className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="font-medium">{formatCurrency(payment.amount)}</p>
                      <p className="text-xs text-muted-foreground">
                        {formatDateTime(payment.createdAt)}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge>{methodLabel[payment.method]}</Badge>
                      <Badge variant={channelBadgeVariant[payment.channel]}>
                        {channelLabel[payment.channel]}
                      </Badge>
                      <Badge variant={statusBadgeVariant[payment.status]}>
                        {statusLabel[payment.status]}
                      </Badge>
                    </div>
                  </div>
                  {payment.notes && (
                    <p className="text-sm text-muted-foreground">{payment.notes}</p>
                  )}
                  {index < sortedPayments.length - 1 && <Separator />}
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
