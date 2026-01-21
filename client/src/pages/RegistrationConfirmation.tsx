import { useEffect, useState } from 'react';
import { useRoute, useLocation } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle, Clock, Copy, QrCode } from 'lucide-react';
import { toast } from 'sonner';
import { consultarInscricao } from '@/lib/eventsApi';

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
      console.error('Erro ao carregar inscrição:', error);
      toast.error('Erro ao carregar dados da inscrição');
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
    }, 5000); // Verificar a cada 5 segundos

    // Parar após 10 minutos
    setTimeout(() => {
      clearInterval(interval);
      setPolling(false);
    }, 600000);
  };

  const copiarPixCode = () => {
    if (registration?.pixQrCode) {
      navigator.clipboard.writeText(registration.pixQrCode);
      toast.success('Código PIX copiado!');
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
            <CardTitle>Inscrição não encontrada</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={() => setLocation('/eventos')}>Voltar para Eventos</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const isPix = registration.paymentMethod === 'pix';
  const isPending = registration.paymentStatus === 'pending';
  const isConfirmed = registration.paymentStatus === 'confirmed';

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            {isConfirmed ? (
              <CheckCircle className="h-6 w-6 text-green-600" />
            ) : (
              <Clock className="h-6 w-6 text-yellow-600" />
            )}
            <CardTitle>
              {isConfirmed ? 'Inscrição Confirmada!' : 'Aguardando Pagamento'}
            </CardTitle>
          </div>
          <CardDescription>Código do pedido: {registration.orderCode}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Informações da inscrição */}
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
              <span className={`font-medium ${isConfirmed ? 'text-green-600' : 'text-yellow-600'}`}>
                {isConfirmed ? 'Confirmado' : 'Pendente'}
              </span>
            </div>
          </div>

          {/* PIX - QR Code e Código */}
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
                    <label className="text-sm font-medium">Ou copie o código PIX:</label>
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
                      Aguardando confirmação do pagamento...
                    </span>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Cartão de Crédito - Confirmação */}
          {!isPix && isConfirmed && (
            <div className="border-t pt-6">
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-green-900 font-medium">Pagamento aprovado!</p>
                <p className="text-sm text-green-700 mt-1">
                  Você receberá um e-mail com os detalhes da sua inscrição.
                </p>
              </div>
            </div>
          )}

          {/* Botões */}
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
