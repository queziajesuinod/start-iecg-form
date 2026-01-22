import { useEffect, useState, useCallback } from 'react';
import { useRoute, useLocation } from 'wouter';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Calendar, MapPin, Users, Download, Loader2, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import QRCode from 'qrcode';
import jsPDF from 'jspdf';

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
  const [attendeeQRCodes, setAttendeeQRCodes] = useState<Record<string, string>>({});

  const loadRegistration = useCallback(async (orderCode: string) => {
    try {
      setLoading(true);
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3005';
      const response = await fetch(`${API_URL}/api/public/events/registrations/${orderCode}`);
      
      if (!response.ok) {
        throw new Error('Inscrição não encontrada');
      }

      const data = await response.json();
      setRegistration(data);

      setAttendeeQRCodes({});

      const qrEntries = await Promise.all(
        data.attendees.map(async (attendee) => {
          try {
            const payload = `${data.orderCode}:${attendee.id}`;
            const url = await QRCode.toDataURL(payload, {
              width: 250,
              margin: 2,
              color: {
                dark: '#000000',
                light: '#FFFFFF',
              },
            });
            return [attendee.id, url] as const;
          } catch {
            return [attendee.id, ''] as const;
          }
        })
      );
      setAttendeeQRCodes(Object.fromEntries(qrEntries));
    } catch (error) {
      toast.error('Erro', {
        description: 'Não foi possível carregar os dados da inscrição',
      });
      navigate('/');
    } finally {
      setLoading(false);
    }
  }, [navigate, toast]);

  useEffect(() => {
    if (!match || !params?.orderCode) {
      navigate('/');
      return;
    }

    loadRegistration(params.orderCode);
  }, [match, params?.orderCode, navigate, loadRegistration]);

  const safeText = (value: unknown) => (value === undefined || value === null ? '' : String(value));

  const downloadTicket = async () => {
    if (!registration) return;

    try {
      const pdf = new jsPDF();
      const pageWidth = pdf.internal.pageSize.getWidth();
      
      // Título
      pdf.setFontSize(20);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Ticket de Inscrição', pageWidth / 2, 20, { align: 'center' });
      
      // Código da inscrição
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      pdf.text(safeText(`Código: ${registration.orderCode}`), pageWidth / 2, 30, { align: 'center' });
      
      // Linha separadora
      pdf.setLineWidth(0.5);
      pdf.line(20, 35, pageWidth - 20, 35);
      
      // Informações do evento
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Evento', 20, 45);
      
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      pdf.text(safeText(registration.event.name), 20, 55);
      
      const eventDate = new Date(registration.event.eventDate).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
      pdf.text(safeText(`Data: ${eventDate}`), 20, 65);
      pdf.text(safeText(`Local: ${registration.event.location}`), 20, 75);
      
      pdf.setFontSize(10);
      pdf.text(
        'Apresente o QR Code correspondente a cada inscrito na entrada do evento',
        pageWidth / 2,
        175,
        {
          align: 'center',
        }
      );
      
      let yPos = 190;
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Inscritos', 20, yPos);

      yPos += 10;
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'normal');

      registration.attendees.forEach((attendee, index) => {
        const nome = attendee.attendeeData.nome_do_inscrito || attendee.attendeeData.nome || `Inscrito ${index + 1}`;
        const attendeeQr = attendeeQRCodes[attendee.id];
        const text = `• ${safeText(nome)} - ${safeText(attendee.batch.name)}`;
        if (attendeeQr) {
          const qrSize = 40;
          pdf.addImage(attendeeQr, 'PNG', 25, yPos, qrSize, qrSize);
          pdf.text(text, 25 + qrSize + 8, yPos + qrSize / 2);
          yPos += qrSize + 8;
        } else {
          pdf.text(text, 25, yPos);
          yPos += 8;
        }
      });
      
      // Total
      yPos += 5;
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text(safeText(`Total Pago: R$ ${Number(registration.finalPrice).toFixed(2).replace('.', ',')}`), 20, yPos);
      
      // Status do pagamento
      yPos += 10;
      const isPaid = registration.paymentStatus === 'confirmed' || registration.paymentStatus === 'paid';
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.text(safeText(`Status: ${isPaid ? 'Pagamento Confirmado' : 'Aguardando Pagamento'}`), 20, yPos);
      
      // Salvar PDF
      pdf.save(`ticket-${registration.orderCode}.pdf`);
      
      toast.success('Sucesso!', {
        description: 'Ticket baixado com sucesso',
      });
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      toast.error('Erro', {
        description: 'Não foi possível gerar o PDF',
      });
    }
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
            {/* QR Code por inscrito */}
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {registration.attendees.map((attendee, index) => {
                  const nome = attendee.attendeeData.nome_do_inscrito || attendee.attendeeData.nome || `Inscrito ${index + 1}`;
                  const attendeeQr = attendeeQRCodes[attendee.id];

                  return (
                    <div key={attendee.id} className="bg-white p-4 rounded-lg border-2 border-dashed flex flex-col items-center">
                      {attendeeQr ? (
                        <img src={attendeeQr} alt={`QR Code de ${nome}`} className="w-48 h-48 object-contain" />
                      ) : (
                        <div className="w-48 h-48 flex items-center justify-center text-xs text-muted-foreground">
                          QR Code sendo gerado...
                        </div>
                      )}
                      <p className="mt-2 font-semibold text-center">{nome}</p>
                      <p className="text-xs text-muted-foreground">Lote: {attendee.batch.name}</p>
                    </div>
                  );
                })}
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Apresente o QR Code correspondente ao seu nome na entrada do evento
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
                        R$ {Number(attendee.batch.price).toFixed(2).replace('.', ',')}
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
                R$ {Number(registration.finalPrice).toFixed(2).replace('.', ',')}
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
