import { useEffect, useState } from 'react';
import { useRoute, useLocation } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle, Clock, Copy, QrCode } from 'lucide-react';
import { toast } from 'sonner';
import { consultarInscricao } from '@/lib/eventsApi';
import { getCieloDeniedMessage } from '@/lib/paymentDenialReason';

export default function RegistrationConfirmation() {
  const [, params] = useRoute('/inscricao/:orderCode');
  const [, setLocation] = useLocation();
  const orderCode = params?.orderCode;

  const [loading, setLoading] = useState(true);
  const [registration, setRegistration] = useState<any>(null);
  const [polling, setPolling] = useState(false);

  useEffect(() => {
    if (!orderCode) {
      setLocation('/eventos');
      return;
    }
    carregarInscricao();
  }, [orderCode]);

  const carregarInscricao = async () => {
    try {
      setLoading(true);
      const data = await consultarInscricao(orderCode!);
      setRegistration(data);

      // Se for PIX e estiver pendente, iniciar polling
      if (data.paymentMethod === 'pix' && data.paymentStatus === 'pending') {
        iniciarPolling();
      }
    } catch (error) {
      console.error('Erro ao carregar inscricao:', error);
      toast.error('Erro ao carregar dados da inscricao');
    } finally {
      setLoading(false);
    }
  };

  const iniciarPolling = () => {
    setPolling(true);
    const interval = setInterval(async () => {
      try {
        const data = await consultarInscricao(orderCode!);
        setRegistration(data);

        if (data.paymentStatus !== 'pending') {
          clearInterval(interval);
          setPolling(false);
          if (data.paymentStatus === 'confirmed') {
            toast.success('Pagamento confirmado!');
          }
        }
      } catch (error) {
        console.error('Erro no polling:', error);
      }
    }, 5000);

    // Parar apos 10 minutos
    setTimeout(() => {
      clearInterval(interval);
      setPolling(false);
    }, 600000);
  };

  const copiarPixCode = () => {
    if (registration?.pixQrCode) {
      navigator.clipboard.writeText(registration.pixQrCode);
      toast.success('Codigo PIX copiado!');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!registration) {
    return (
      <div className="container mx-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle>Inscricao nao encontrada</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={() => setLocation('/eventos')}>Voltar para Eventos</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const isPix = registration.paymentMethod === 'pix';
  const normalizedStatus = String(registration.paymentStatus || '').toLowerCase();
  const isPending = ['pending', 'waiting', 'authorized', 'notfinished'].includes(normalizedStatus);
  const isConfirmed = ['confirmed', 'paid', 'captured'].includes(normalizedStatus);
  const isDenied = ['failed', 'denied', 'deniedbycielo', 'canceled', 'cancelled', 'aborted'].includes(normalizedStatus);
  const deniedReasonMessage = getCieloDeniedMessage(registration);

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            {isConfirmed ? (
              <CheckCircle className="h-6 w-6 text-green-600" />
            ) : isDenied ? (
              <Clock className="h-6 w-6 text-red-600" />
            ) : (
              <Clock className="h-6 w-6 text-yellow-600" />
            )}
            <CardTitle>
              {isConfirmed
                ? 'Inscricao Confirmada!'
                : isDenied
                  ? 'Pagamento nao autorizado'
                  : 'Aguardando Pagamento'}
            </CardTitle>
          </div>
          <CardDescription>Codigo do pedido: {registration.orderCode}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Quantidade:</span>
              <span className="font-medium">{registration.quantity} inscrito(s)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Valor Total:</span>
              <span className="font-medium">R$ {Number(registration.finalPrice).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Status:</span>
              <span className={`font-medium ${isConfirmed ? 'text-green-600' : isDenied ? 'text-red-600' : 'text-yellow-600'}`}>
                {isConfirmed ? 'Confirmado' : isDenied ? 'Negado' : 'Pendente'}
              </span>
            </div>
          </div>

          {isPix && isPending && (
            <>
              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <QrCode className="h-5 w-5" />
                  Pagar com PIX
                </h3>

                {registration.pixQrCodeBase64 && (
                  <div className="flex justify-center mb-4">
                    <img
                      src={`data:image/png;base64,${registration.pixQrCodeBase64}`}
                      alt="QR Code PIX"
                      className="w-64 h-64 border rounded"
                    />
                  </div>
                )}

                {registration.pixQrCode && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ou copie o codigo PIX:</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={registration.pixQrCode}
                        readOnly
                        className="flex-1 p-2 border rounded text-sm font-mono"
                      />
                      <Button onClick={copiarPixCode} variant="outline">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {polling && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span className="text-sm text-blue-900">
                      Aguardando confirmacao do pagamento...
                    </span>
                  </div>
                )}
              </div>
            </>
          )}

          {!isPix && isConfirmed && (
            <div className="border-t pt-6">
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-green-900 font-medium">Pagamento aprovado!</p>
                <p className="text-sm text-green-700 mt-1">
                  Voce recebera um e-mail com os detalhes da sua inscricao.
                </p>
              </div>
            </div>
          )}

          {isDenied && (
            <div className="border-t pt-6">
              <div className="p-4 bg-red-50 rounded-lg">
                <p className="text-red-900 font-medium">Pagamento nao autorizado.</p>
                <p className="text-sm text-red-700 mt-1">
                  {deniedReasonMessage || 'Revise os dados de pagamento e tente novamente.'}
                </p>
              </div>
            </div>
          )}

          <div className="flex gap-2 pt-4">
            <Button onClick={() => setLocation('/eventos')} variant="outline" className="flex-1">
              Voltar para Eventos
            </Button>
            {isPending && (
              <Button onClick={carregarInscricao} variant="outline">
                Atualizar Status
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
