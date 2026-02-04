import { useEffect, useState, useCallback } from 'react';
import { useRoute, useLocation } from 'wouter';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Calendar, MapPin, Users, Download, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import QRCode from 'qrcode';
import jsPDF from 'jspdf';

interface Registration {
  id: string;
  orderCode: string;
  event: {
    id: string;
    name: string;
    eventDate?: string | null;
    startDate?: string | null;
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

const EVENT_DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

const BRAZILIAN_DATE_REGEX =
  /^(\d{2})\/(\d{2})\/(\d{4})(?:[T\s](\d{2}):(\d{2})(?::(\d{2}))?)?$/;

const parseEventDateString = (value?: string | null): Date | null => {
  if (!value) return null;

  const trimmed = value.trim();
  if (!trimmed) return null;

  const brazilMatch = BRAZILIAN_DATE_REGEX.exec(trimmed);
  if (brazilMatch) {
    const [, day, month, year, hour, minute, second] = brazilMatch;
    const parsed = new Date(
      Number(year),
      Number(month) - 1,
      Number(day),
      Number(hour ?? '0'),
      Number(minute ?? '0'),
      Number(second ?? '0')
    );
    if (!Number.isNaN(parsed.getTime())) {
      return parsed;
    }
  }

  const firstSpaceIndex = trimmed.indexOf(' ');
  const normalized =
    firstSpaceIndex > -1 && !trimmed.includes('T')
      ? `${trimmed.substring(0, firstSpaceIndex)}T${trimmed.substring(
          firstSpaceIndex + 1
        )}`
      : trimmed;
  const withTimezone = normalized.replace(/\s+([+-]\d{2}:\d{2})$/, '$1');

  const isoParsed = new Date(withTimezone);
  if (!Number.isNaN(isoParsed.getTime())) {
    return isoParsed;
  }

  const fallbackTimestamp = Date.parse(trimmed);
  if (!Number.isNaN(fallbackTimestamp)) {
    return new Date(fallbackTimestamp);
  }

  return null;
};

const formatEventDateLabel = (event: Registration['event']) => {
  const rawDate =
    event.eventDate?.trim() ||
    event.startDate?.trim() ||
    '';
  if (!rawDate) {
    return 'Data indisponível';
  }
  const parsed = parseEventDateString(rawDate);
  if (parsed) {
    return parsed.toLocaleDateString('pt-BR', EVENT_DATE_FORMAT_OPTIONS);
  }
  return rawDate;
};

const formatEventDateRange = (event: Registration['event']) => {
  const startDate = parseEventDateString(event.startDate);
  const endDate = parseEventDateString(event.eventDate);

  if (startDate && endDate) {
    const start = startDate.toLocaleDateString('pt-BR');
    const end = endDate.toLocaleDateString('pt-BR');
    return `${start} a ${end}`;
  }

  if (startDate) {
    return startDate.toLocaleDateString('pt-BR');
  }

  if (endDate) {
    return endDate.toLocaleDateString('pt-BR');
  }

  return formatEventDateLabel(event);
};

const normalizeStatus = (status?: string | null) =>
  (status ?? '').trim().toLowerCase();

const isCancelledStatus = (status?: string | null) => {
  const normalized = normalizeStatus(status);
  return normalized === 'cancelled' || normalized === 'canceled';
};

export default function Ticket() {
  const [match, params] = useRoute('/ticket/:orderCode');
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [registration, setRegistration] = useState<Registration | null>(null);
  const [attendeeQRCodes, setAttendeeQRCodes] = useState<Record<string, string>>({});
  const [eventImageDataUrl, setEventImageDataUrl] = useState<string | null>(null);

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

      const cancelled = isCancelledStatus(data.paymentStatus);
      setAttendeeQRCodes({});

      if (cancelled) {
        return;
      }

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
    const imageUrl = registration?.event?.imageUrl;
    if (!imageUrl) {
      setEventImageDataUrl(null);
      return;
    }

    let canceled = false;
    (async () => {
      try {
        const res = await fetch(imageUrl);
        if (!res.ok || canceled) return;
        const blob = await res.blob();
        const reader = new FileReader();
        reader.onloadend = () => {
          if (canceled) return;
          if (typeof reader.result === 'string') {
            setEventImageDataUrl(reader.result);
          }
        };
        reader.readAsDataURL(blob);
      } catch {
        setEventImageDataUrl(null);
      }
    })();

    return () => {
      canceled = true;
    };
  }, [registration?.event?.imageUrl]);

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
      
      const dateRangeLabel = formatEventDateRange(registration.event);
      const sectionHeight = 120;
      let yOffset = 20;
      const circleSize = 60;
      const qrSize = 50;

      registration.attendees.forEach((attendee, index) => {
        if (yOffset + sectionHeight > pdf.internal.pageSize.getHeight() - 30) {
          pdf.addPage();
          yOffset = 20;
        }

        const circleX = 20;
        const circleY = yOffset;
        if (eventImageDataUrl) {
          pdf.setDrawColor(0);
          pdf.addImage(eventImageDataUrl, 'PNG', circleX, circleY, circleSize, circleSize);
        } else {
          pdf.setFillColor(244, 244, 244);
          pdf.setDrawColor(220);
          pdf.circle(circleX + circleSize / 2, circleY + circleSize / 2, circleSize / 2, 'FD');
          pdf.setFontSize(18);
          pdf.setFont('helvetica', 'bold');
          const initial = (registration.event.name?.charAt(0) || '?').toUpperCase();
          pdf.text(initial, circleX + circleSize / 2, circleY + circleSize / 2 + 5, { align: 'center' });
        }

        const centerX = circleX + circleSize + 10;
        const participantName = attendee.attendeeData.nome_do_inscrito || attendee.attendeeData.nome || `Inscrito ${index + 1}`;
        pdf.setFontSize(9);
        pdf.setFont('helvetica', 'normal');
        pdf.text('IGREJA EVANGÉLICA COMUNIDADE GLOBAL', centerX, circleY + 8);
        pdf.setFontSize(11);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(9);
        pdf.setFont('helvetica', 'normal');
        const nameLines = pdf.splitTextToSize(safeText(registration.event.name), 110);
        nameLines.forEach((line, i) => {
          pdf.setFontSize(i === 0 ? 11 : 10);
          pdf.setFont('helvetica', i === 0 ? 'bold' : 'normal');
          pdf.text(line, centerX, circleY + 16 + i * 5);
        });
        const detailLines = pdf.splitTextToSize(
          `${dateRangeLabel} • ${safeText(registration.event.location)}`,
          120
        );
        const detailStartY = circleY + 16 + nameLines.length * 5 + 4;
        detailLines.forEach((line, i) => {
          pdf.setFontSize(9);
          pdf.setFont('helvetica', 'normal');
          pdf.text(line, centerX, detailStartY + i * 5);
        });
        pdf.text(`Lote ${safeText(attendee.batch.name)}`, centerX, circleY + 36);
        pdf.setFontSize(11);
        pdf.setFont('helvetica', 'bold');
        pdf.text(`Participante: ${safeText(participantName)}`, centerX, circleY + 44);
        pdf.setFontSize(14);
        pdf.text(`Código: ${safeText(registration.orderCode)}`, centerX, circleY + 52);

        const qrX = pageWidth - qrSize - 20;
        const qrY = circleY + 5;
        const attendeeQr = attendeeQRCodes[attendee.id];

        if (attendeeQr) {
          pdf.addImage(attendeeQr, 'PNG', qrX, qrY, qrSize, qrSize);
        } else {
          pdf.setDrawColor(200);
          pdf.rect(qrX, qrY, qrSize, qrSize);
        }

        pdf.setFontSize(9);
        pdf.setFont('helvetica', 'normal');
        pdf.text('Apresente na entrada', qrX + qrSize / 2, qrY + qrSize + 6, { align: 'center' });
        pdf.text(safeText(registration.orderCode), qrX + qrSize / 2, qrY + qrSize + 11, { align: 'center' });

        pdf.setLineDash([3, 1]);
        pdf.setDrawColor(200);
        pdf.line(20, circleY + sectionHeight - 5, pageWidth - 20, circleY + sectionHeight - 5);
        pdf.setLineDash([]);
        yOffset += sectionHeight;
      });
      
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

  const eventDateLabel = formatEventDateLabel(registration.event);

  const normalizedPaymentStatus = normalizeStatus(registration.paymentStatus);
  const isCancelled = isCancelledStatus(registration.paymentStatus);
  const isPaid =
    !isCancelled &&
    (normalizedPaymentStatus === 'confirmed' ||
      normalizedPaymentStatus === 'paid' ||
      registration.remaining <= 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">
      <div className="container max-w-2xl mx-auto space-y-6">
        {/* Header de Status */}
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <div
              className={`p-3 rounded-full ${
                isCancelled ? 'bg-rose-100' : 'bg-green-100'
              }`}
            >
              {isCancelled ? (
                  <XCircle className="w-12 h-12 text-rose-600" />
              ) : (
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              )}
            </div>
          </div>
          <h1
            className={`text-3xl font-bold ${
              isCancelled ? 'text-rose-600' : 'text-green-600'
            }`}
          >
            {isCancelled ? 'Inscrição Cancelada' : 'Inscrição Confirmada!'}
          </h1>
          <p className={isCancelled ? 'text-rose-600' : 'text-muted-foreground'}>
            Código: <span className="font-mono font-bold">{registration.orderCode}</span>
          </p>
        </div>

        {/* Card do Ticket */}
        <Card>
          <CardHeader
            className={`bg-gradient-to-r ${
              isCancelled
                ? 'from-rose-500 to-rose-600'
                : 'from-primary to-primary/80'
            } text-white`}
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">{registration.event.name}</h2>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4" />
                <span>{eventDateLabel}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>{registration.event.location}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Código: <span className="font-mono font-bold">{registration.orderCode}</span>
              </p>
              {isCancelled && (
                <p className="text-sm text-rose-100 mt-2">
                  Esta inscrição foi cancelada e não possui QR Code válido.
                </p>
              )}
            </div>

            {!isCancelled && (
              <>
                {/* QR Code por inscrito */}
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {registration.attendees.map((attendee, index) => {
                      const nome =
                        attendee.attendeeData.nome_do_inscrito ||
                        attendee.attendeeData.nome ||
                        `Inscrito ${index + 1}`;
                      const attendeeQr = attendeeQRCodes[attendee.id];

                      return (
                        <div
                          key={attendee.id}
                          className="bg-white p-4 rounded-lg border-2 border-dashed flex flex-col items-center"
                        >
                          {attendeeQr ? (
                            <img
                              src={attendeeQr}
                              alt={`QR Code de ${nome}`}
                              className="w-48 h-48 object-contain"
                            />
                          ) : (
                            <div className="w-48 h-48 flex items-center justify-center text-xs text-muted-foreground">
                              QR Code sendo gerado...
                            </div>
                          )}
                          <p className="mt-2 font-semibold text-center">{nome}</p>
                          <p className="text-xs text-muted-foreground">
                            Lote: {attendee.batch.name}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Apresente o QR Code correspondente ao seu nome na entrada do evento
                  </p>
                </div>
              </>
            )}
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
                          {attendee.attendeeData.nome_do_inscrito ||
                            attendee.attendeeData.nome ||
                            `Inscrito ${index + 1}`}
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
            <div
              className={`p-3 rounded-lg ${
                isCancelled ? 'bg-rose-50' : isPaid ? 'bg-green-50' : 'bg-yellow-50'
              }`}
            >
              <p
                className={`text-sm font-medium ${
                  isCancelled
                    ? 'text-rose-700'
                    : isPaid
                    ? 'text-green-700'
                    : 'text-yellow-700'
                }`}
              >
                {isCancelled
                  ? 'Inscrição Cancelada'
                  : isPaid
                  ? '✓ Pagamento Confirmado'
                  : '⌛ Aguardando Pagamento'}
              </p>
            </div>

            {!isCancelled ? (
              <>
                {/* Botão de Download */}
                <Button onClick={downloadTicket} className="w-full" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Baixar Ticket (PDF)
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Guarde este ticket! Você precisará dele para entrar no evento.
                </p>
              </>
            ) : (
              <p className="text-xs text-center text-rose-600">
                Este pedido foi cancelado e não é possível gerar ou apresentar o ticket.
              </p>
            )}
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
