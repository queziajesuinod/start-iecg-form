import { useEffect, useState } from 'react';
import { useRoute, useLocation } from 'wouter';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Calendar, MapPin, Users, Download, Loader2, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import QRCode from 'qrcode';

interface Registration {
  id: string;
  orderCode: string;
  event: {
    id: string;
    name: string;
    eventDate: string;
    location: string;
  };
  attendees: Array<{
    id: string;
    attendeeData: {
      nome_do_inscrito?: string;
      nome?: string;
    };
    batch: {
      name: string;
      price: number;
    };
  }>;
  finalPrice: number;
  paymentStatus: string;
}

export default function Ticket() {
  const [match, params] = useRoute('/ticket/:orderCode');
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [registration, setRegistration] = useState<Registration | null>(null);
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  useEffect(() => {
    if (!match || !params?.orderCode) {
      navigate('/');
      return;
    }

    loadRegistration(params.orderCode);
  }, [match, params]);

  const loadRegistration = async (orderCode: string) => {
    try {
      setLoading(true);
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3005';
      const response = await fetch(`${API_URL}/api/public/events/registrations/${orderCode}`);
      
      if (!response.ok) {
        throw new Error('Inscrição não encontrada');
      }

      const data = await response.json();
      setRegistration(data);

      // Gerar QR Code com o código da inscrição
      const qrUrl = await QRCode.toDataURL(orderCode, {
        width: 300,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
      });
      setQrCodeUrl(qrUrl);
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Não foi possível carregar os dados da inscrição',
        variant: 'destructive',
      });
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  const downloadTicket = () => {
    // TODO: Implementar download do ticket em PDF
    toast({
      title: 'Em breve',
      description: 'A funcionalidade de download estará disponível em breve',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!registration) {
    return null;
  }

  const isPaid = registration.paymentStatus === 'confirmed' || registration.paymentStatus === 'paid';

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">
      <div className="container max-w-2xl mx-auto space-y-6">
        {/* Header de Sucesso */}
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <div className="bg-green-100 p-3 rounded-full">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-green-600">Inscrição Confirmada!</h1>
          <p className="text-muted-foreground">
            Código: <span className="font-mono font-bold">{registration.orderCode}</span>
          </p>
        </div>

        {/* Card do Ticket */}
        <Card>
          <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-white">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">{registration.event.name}</h2>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4" />
                <span>{new Date(registration.event.eventDate).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>{registration.event.location}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            {/* QR Code */}
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-white p-4 rounded-lg border-2 border-dashed">
                {qrCodeUrl && (
                  <img src={qrCodeUrl} alt="QR Code do Ticket" className="w-64 h-64" />
                )}
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Apresente este QR Code na entrada do evento
              </p>
            </div>

            <Separator />

            {/* Inscritos */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Inscritos</h3>
              </div>
              <div className="space-y-2">
                {registration.attendees.map((attendee, index) => (
                  <div key={attendee.id} className="bg-muted/50 p-3 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">
                          {attendee.attendeeData.nome_do_inscrito || attendee.attendeeData.nome || `Inscrito ${index + 1}`}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Lote: {attendee.batch.name}
                        </p>
                      </div>
                      <p className="font-semibold">
                        R$ {attendee.batch.price.toFixed(2).replace('.', ',')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Total */}
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total Pago</span>
              <span className="text-primary">
                R$ {registration.finalPrice.toFixed(2).replace('.', ',')}
              </span>
            </div>

            {/* Status do Pagamento */}
            <div className={`p-3 rounded-lg ${isPaid ? 'bg-green-50' : 'bg-yellow-50'}`}>
              <p className={`text-sm font-medium ${isPaid ? 'text-green-700' : 'text-yellow-700'}`}>
                {isPaid ? '✓ Pagamento Confirmado' : '⏳ Aguardando Pagamento'}
              </p>
            </div>

            {/* Botão de Download */}
            <Button onClick={downloadTicket} className="w-full" size="lg">
              <Download className="w-4 h-4 mr-2" />
              Baixar Ticket (PDF)
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Guarde este ticket! Você precisará dele para entrar no evento.
            </p>
          </CardContent>
        </Card>

        {/* Informações Adicionais */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-3">Informações Importantes</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Chegue com 30 minutos de antecedência</li>
              <li>• Apresente este QR Code na entrada</li>
              <li>• Traga um documento com foto</li>
              <li>• Em caso de dúvidas, entre em contato com a organização</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
