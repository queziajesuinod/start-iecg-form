import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, Check, QrCode, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function PixConfirmation() {
  const [, navigate] = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [checking, setChecking] = useState(false);

  // Pegar dados da URL ou localStorage
  const searchParams = new URLSearchParams(location.split('?')[1]);
  const orderCode = searchParams.get('orderCode');
  const pixCode = searchParams.get('pixCode');
  const pixQrCodeBase64 = searchParams.get('qrCode');

  useEffect(() => {
    if (!orderCode || !pixCode) {
      navigate('/');
    }
  }, [orderCode, pixCode, navigate]);

  const copyToClipboard = async () => {
    if (!pixCode) return;
    
    try {
      await navigator.clipboard.writeText(pixCode);
      setCopied(true);
      toast({
        title: 'Copiado!',
        description: 'Código PIX copiado para a área de transferência',
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: 'Erro',
        description: 'Não foi possível copiar o código',
        variant: 'destructive',
      });
    }
  };

  const checkPaymentStatus = async () => {
    setChecking(true);
    try {
      const response = await fetch(`http://localhost:3005/api/public/registrations/${orderCode}/status`);
      
      if (!response.ok) {
        throw new Error('Não foi possível verificar o status');
      }
      
      const data = await response.json();
      
      if (data.isPaid) {
        toast({
          title: 'Pagamento confirmado!',
          description: 'Redirecionando para o seu ticket...',
        });
        setTimeout(() => {
          navigate(`/ticket/${orderCode}`);
        }, 1500);
      } else {
        toast({
          title: 'Pagamento pendente',
          description: 'Ainda não identificamos o pagamento. Tente novamente em alguns instantes.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Não foi possível verificar o status do pagamento',
        variant: 'destructive',
      });
    } finally {
      setChecking(false);
    }
  };

  if (!orderCode || !pixCode) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="container max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Pagamento PIX</CardTitle>
            <CardDescription>
              Código da inscrição: <span className="font-mono font-bold">{orderCode}</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="qrcode" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="qrcode">
                  <QrCode className="w-4 h-4 mr-2" />
                  QR Code
                </TabsTrigger>
                <TabsTrigger value="copiacola">
                  <Copy className="w-4 h-4 mr-2" />
                  Copia e Cola
                </TabsTrigger>
              </TabsList>

              <TabsContent value="qrcode" className="space-y-4">
                <div className="flex flex-col items-center space-y-4">
                  <p className="text-sm text-muted-foreground text-center">
                    Escaneie o QR Code abaixo com o aplicativo do seu banco
                  </p>
                  {pixQrCodeBase64 && (
                    <div className="bg-white p-4 rounded-lg border">
                      <img
                        src={`data:image/png;base64,${pixQrCodeBase64}`}
                        alt="QR Code PIX"
                        className="w-64 h-64"
                      />
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="copiacola" className="space-y-4">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Copie o código abaixo e cole no aplicativo do seu banco na opção PIX Copia e Cola
                  </p>
                  <div className="relative">
                    <textarea
                      readOnly
                      value={pixCode}
                      className="w-full h-32 p-3 border rounded-md font-mono text-sm resize-none"
                    />
                    <Button
                      onClick={copyToClipboard}
                      className="absolute top-2 right-2"
                      size="sm"
                      variant="outline"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          Copiado
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          Copiar
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-sm mb-2">Instruções:</h3>
                <ol className="text-sm space-y-1 list-decimal list-inside text-muted-foreground">
                  <li>Abra o aplicativo do seu banco</li>
                  <li>Escolha a opção PIX</li>
                  <li>Escaneie o QR Code ou cole o código</li>
                  <li>Confirme o pagamento</li>
                  <li>Clique em "Já paguei" abaixo</li>
                </ol>
              </div>

              <Button
                onClick={checkPaymentStatus}
                className="w-full"
                size="lg"
                disabled={checking}
              >
                {checking ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Verificando...
                  </>
                ) : (
                  'Já paguei - Ver meu ticket'
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Após o pagamento, você será redirecionado para a página do seu ticket
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
