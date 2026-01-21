import { useState, useEffect } from 'react';
import { useRoute, useLocation } from 'wouter';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2, Loader2, Home, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';
import { consultarInscricao } from '@/lib/eventsApi';

export default function RegistrationSuccess() {
  const [, params] = useRoute('/inscricao/:orderCode');
  const [, setLocation] = useLocation();
  const orderCode = params?.orderCode;

  const [inscricao, setInscricao] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    if (orderCode) {
      carregarInscricao();
    }
  }, [orderCode]);

  const carregarInscricao = async () => {
    try {
      setLoading(true);
      const data = await consultarInscricao(orderCode!);
      setInscricao(data);
    } catch (error) {
      console.error('Erro ao carregar inscrição:', error);
      toast.error('Erro ao carregar inscrição');
    } finally {
      setLoading(false);
    }
  };

  const copiarCodigo = () => {
    navigator.clipboard.writeText(orderCode!);
    setCopiado(true);
    toast.success('Código copiado!');
    setTimeout(() => setCopiado(false), 2000);
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      pending: 'bg-yellow-500',
      confirmed: 'bg-green-500',
      cancelled: 'bg-red-500',
      refunded: 'bg-gray-500',
    };
    return colors[status] || 'bg-gray-500';
  };

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      pending: 'Pendente',
      confirmed: 'Confirmado',
      cancelled: 'Cancelado',
      refunded: 'Reembolsado',
    };
    return labels[status] || status;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!inscricao) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Inscrição não encontrada</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Não foi possível encontrar a inscrição com o código fornecido.</p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => setLocation('/')} className="w-full">
              <Home className="h-4 w-4 mr-2" />
              Voltar para Eventos
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  const isConfirmed = inscricao.paymentStatus === 'confirmed';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="container max-w-2xl mx-auto">
        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4">
              {isConfirmed ? (
                <CheckCircle2 className="h-20 w-20 text-green-500" />
              ) : (
                <div className="h-20 w-20 rounded-full bg-yellow-100 flex items-center justify-center mx-auto">
                  <Loader2 className="h-12 w-12 text-yellow-600 animate-spin" />
                </div>
              )}
            </div>
            <CardTitle className="text-3xl">
              {isConfirmed ? 'Inscrição Confirmada!' : 'Inscrição Registrada'}
            </CardTitle>
            <CardDescription className="text-base mt-2">
              {isConfirmed
                ? 'Seu pagamento foi processado com sucesso'
                : 'Aguardando confirmação do pagamento'}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Código do Pedido */}
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-600 mb-2">Código do Pedido</p>
              <div className="flex items-center justify-center gap-2">
                <p className="text-2xl font-mono font-bold">{orderCode}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={copiarCodigo}
                  className="h-8 w-8 p-0"
                >
                  {copiado ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Guarde este código para consultar sua inscrição
              </p>
            </div>

            <Separator />

            {/* Informações da Inscrição */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Detalhes da Inscrição</h3>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Evento:</span>
                <span className="font-medium">{inscricao.event?.title}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">Lote:</span>
                <span className="font-medium">{inscricao.batch?.name}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">Quantidade:</span>
                <span className="font-medium">{inscricao.quantity} inscrito(s)</span>
              </div>

              {inscricao.couponCode && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Cupom:</span>
                  <Badge variant="secondary">{inscricao.couponCode}</Badge>
                </div>
              )}

              <div className="flex justify-between items-center">
                <span className="text-gray-600">Status:</span>
                <Badge className={getStatusColor(inscricao.paymentStatus)}>
                  {getStatusLabel(inscricao.paymentStatus)}
                </Badge>
              </div>

              <Separator />

              <div className="flex justify-between items-center text-lg font-bold">
                <span>Valor Total:</span>
                <span className="text-primary">
                  R$ {parseFloat(inscricao.finalPrice).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Informações Adicionais */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Próximos Passos</h4>
              <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                {isConfirmed ? (
                  <>
                    <li>Você receberá um email de confirmação em breve</li>
                    <li>Guarde o código do pedido para consultas futuras</li>
                    <li>Apresente este código no dia do evento</li>
                  </>
                ) : (
                  <>
                    <li>Aguarde a confirmação do pagamento</li>
                    <li>Você receberá um email assim que for confirmado</li>
                    <li>Use o código do pedido para consultar o status</li>
                  </>
                )}
              </ul>
            </div>

            {/* Dados do Comprador */}
            {inscricao.buyerData && Object.keys(inscricao.buyerData).length > 0 && (
              <div className="space-y-2">
                <h4 className="font-semibold">Dados do Comprador</h4>
                <div className="bg-gray-50 p-3 rounded-lg space-y-1 text-sm">
                  {Object.entries(inscricao.buyerData).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-600">{key}:</span>
                      <span className="font-medium">{value as string}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex gap-3">
            <Button variant="outline" onClick={() => setLocation('/')} className="flex-1">
              <Home className="h-4 w-4 mr-2" />
              Voltar para Eventos
            </Button>
            <Button onClick={() => window.print()} variant="secondary" className="flex-1">
              Imprimir Comprovante
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
