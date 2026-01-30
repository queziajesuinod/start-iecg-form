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
  buscarInscricaoPorId,
  criarPagamentoInscricao,
  type RegistrationDetails,
  type RegistrationPayment,
} from '@/lib/eventsApi';

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
};

const paymentStatusVariant: Record<RegistrationDetails['paymentStatus'], 'default' | 'secondary' | 'destructive'> = {
  pending: 'secondary',
  partial: 'default',
  paid: 'default',
  confirmed: 'default',
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

export default function RegistrationView() {
  const [, params] = useRoute('/inscricao/:id/visualizacao');
  const [, setLocation] = useLocation();
  const registrationId = params?.id;

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [registration, setRegistration] = useState<RegistrationDetails | null>(null);
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState<'pix' | 'credit_card'>('pix');

  const carregarInscricao = async () => {
    if (!registrationId) return;
    try {
      setLoading(true);
      const data = await buscarInscricaoPorId(registrationId);
      setRegistration(data);
    } catch (error) {
      console.error('Erro ao carregar inscrição:', error);
      toast.error('Não foi possível carregar os dados da inscrição');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!registrationId) return;
    carregarInscricao();
  }, [registrationId]);

  const sortedPayments = useMemo(() => {
    if (!registration) return [];
    const payments = Array.isArray(registration.payments) ? registration.payments : [];
    return [...payments].sort((a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }, [registration]);

  const isPaid = registration
    ? registration.paymentStatus === 'paid' ||
      registration.paymentStatus === 'confirmed' ||
      registration.remaining <= 0
    : false;

  const canPay =
    registration &&
    registration.event.registrationPaymentMode === 'BALANCE_DUE' &&
    !isPaid &&
    registration.remaining > 0;

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

    try {
      setSubmitting(true);
      const updated = await criarPagamentoInscricao(registration.id, {
        amount: parsedAmount,
        method,
      });
      setRegistration(updated);
      setAmount('');
      toast.success('Pagamento enviado com sucesso.');
    } catch (error) {
      console.error('Erro ao criar pagamento:', error);
      toast.error('Não foi possível registrar o pagamento.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!registrationId) {
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
              Evento: <span className="font-medium">{registration.event.title}</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span>ID da inscrição: {registration.id}</span>
              <span>
                Modo de pagamento:{' '}
                {registration.event.registrationPaymentMode === 'BALANCE_DUE'
                  ? 'Saldo a quitar'
                  : 'Pagamento único'}
              </span>
            </div>
          </CardContent>
        </Card>

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

        {registration.pixQrCodeBase64 && !isPaid && (
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
                  </div>
                </div>
                <Button type="submit" disabled={submitting} className="w-full">
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
