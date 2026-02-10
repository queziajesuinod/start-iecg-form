import { useEffect, useState, useCallback } from 'react';
import { useRoute, useLocation } from 'wouter';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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

const TicketDivider = () => (
  <div className="h-px w-full bg-border/50" role="presentation" />
);

const detectPdfImageFormat = (dataUrl: string): 'PNG' | 'JPEG' | 'WEBP' => {
  const match = dataUrl.match(/^data:image\/([^;]+);base64,/i);
  if (!match) {
    return 'PNG';
  }
  const mime = match[1].toLowerCase();
  if (mime.includes('jpeg') || mime.includes('jpg')) {
    return 'JPEG';
  }
  if (mime.includes('webp')) {
    return 'WEBP';
  }
  return 'PNG';
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

      const eventId = data.event?.id ?? '';
      const qrEntries = await Promise.all(
        data.attendees.map(async (attendee) => {
          try {
            const payload = JSON.stringify({
              orderCode: data.orderCode,
              event_id: eventId,
              attendeeId: attendee.id,
            });
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
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 20;
      const dateRangeLabel = formatEventDateRange(registration.event);
      const headerDetailText = `${dateRangeLabel} • ${safeText(registration.event.location)}`;
      let yOffset = margin;

      const headerImageSize = 60;
      const headerTextGap = 12;

      const drawFullHeader = () => {
        const headerTextX = margin + headerImageSize + headerTextGap;
        const headerTextWidth = pageWidth - headerTextX - margin;
        const headerNameLines = pdf.splitTextToSize(
          safeText(registration.event.name),
          headerTextWidth
        );
        const headerDetailLines = pdf.splitTextToSize(headerDetailText, headerTextWidth);

        if (eventImageDataUrl) {
          const format = detectPdfImageFormat(eventImageDataUrl);
          pdf.addImage(eventImageDataUrl, format, margin, margin, headerImageSize, headerImageSize);
        } else {
          pdf.setFillColor(244, 244, 244);
          pdf.setDrawColor(220);
          pdf.rect(margin, margin, headerImageSize, headerImageSize, 'F');
          pdf.setFont('helvetica', 'bold');
          pdf.setFontSize(26);
          const initial = (registration.event.name?.charAt(0) || '?').toUpperCase();
          pdf.text(
            initial,
            margin + headerImageSize / 2,
            margin + headerImageSize / 2 + 9,
            { align: 'center' }
          );
          pdf.setFillColor(255, 255, 255);
          pdf.setDrawColor(0);
        }

        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(18);
        const textStartY = margin + 18;
        headerNameLines.forEach((line, index) => {
          pdf.text(line, headerTextX, textStartY + index * 8);
        });

        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(11);
        const detailStartY = textStartY + headerNameLines.length * 8 + 6;
        headerDetailLines.forEach((line, index) => {
          pdf.text(line, headerTextX, detailStartY + index * 6);
        });

        const headerTextEndY = detailStartY + headerDetailLines.length * 6;
        const headerHeight = Math.max(headerImageSize, headerTextEndY - margin);
        yOffset = margin + headerHeight + 16;

        pdf.setDrawColor(200);
        pdf.setLineWidth(0.3);
        pdf.line(margin, yOffset - 8, pageWidth - margin, yOffset - 8);
        pdf.setDrawColor(0);
        pdf.setLineWidth(0.2);
        yOffset += 6;
      };

      const drawMiniHeader = () => {
        const miniWidth = pageWidth - margin * 2;
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(14);
        const titleLines = pdf.splitTextToSize(safeText(registration.event.name), miniWidth);
        titleLines.forEach((line, index) => {
          pdf.text(line, margin, margin + 12 + index * 7);
        });

        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(10);
        const detailLines = pdf.splitTextToSize(headerDetailText, miniWidth);
        const detailStartY = margin + 12 + titleLines.length * 7 + 6;
        detailLines.forEach((line, index) => {
          pdf.text(line, margin, detailStartY + index * 6);
        });

        yOffset = detailStartY + detailLines.length * 6 + 8;
        pdf.setDrawColor(200);
        pdf.setLineWidth(0.3);
        pdf.line(margin, yOffset - 6, pageWidth - margin, yOffset - 6);
        pdf.setDrawColor(0);
        pdf.setLineWidth(0.2);
        yOffset += 6;
      };

      drawFullHeader();

      const ensureSpace = (neededHeight: number) => {
        if (yOffset + neededHeight > pageHeight - margin) {
          pdf.addPage();
          drawMiniHeader();
        }
      };

      const qrSize = 60;
      const qrX = pageWidth - margin - qrSize;
      const cardTextWidth = pageWidth - margin * 2 - qrSize - 14;

      registration.attendees.forEach((attendee, index) => {
        const participantName =
          attendee.attendeeData.nome_do_inscrito ||
          attendee.attendeeData.nome ||
          `Inscrito ${index + 1}`;
        const nameLines = pdf.splitTextToSize(
          `Participante: ${safeText(participantName)}`,
          cardTextWidth
        );
        const lotLines = pdf.splitTextToSize(
          `Lote: ${safeText(attendee.batch.name)}`,
          cardTextWidth
        );
        const textHeight =
          nameLines.length * 7 +
          lotLines.length * 6 +
          18;
        const cardHeight = Math.max(textHeight, qrSize + 30) + 24;

        ensureSpace(cardHeight + 6);

        const cardTop = yOffset;
        let currentY = cardTop + 14;

        nameLines.forEach((line, lineIndex) => {
          pdf.setFont('helvetica', lineIndex === 0 ? 'bold' : 'normal');
          pdf.setFontSize(lineIndex === 0 ? 11 : 10);
          pdf.text(line, margin, currentY);
          currentY += 7;
        });

        currentY += 4;
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(10);
        lotLines.forEach((line) => {
          pdf.text(line, margin, currentY);
          currentY += 6;
        });

        currentY += 4;
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(11);
        pdf.text(`Código: ${safeText(registration.orderCode)}`, margin, currentY);

        const qrY = cardTop + 10;
        const attendeeQr = attendeeQRCodes[attendee.id];
        if (attendeeQr) {
          pdf.addImage(attendeeQr, 'PNG', qrX, qrY, qrSize, qrSize);
        } else {
          pdf.setDrawColor(200);
          pdf.rect(qrX, qrY, qrSize, qrSize);
          pdf.setDrawColor(0);
        }

        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(9);
        pdf.text('Apresente na entrada', qrX + qrSize / 2, qrY + qrSize + 6, {
          align: 'center',
        });
        pdf.text(safeText(registration.orderCode), qrX + qrSize / 2, qrY + qrSize + 11, {
          align: 'center',
        });

        pdf.setLineDash([3, 1]);
        pdf.setDrawColor(200);
        pdf.line(margin, cardTop + cardHeight - 6, pageWidth - margin, cardTop + cardHeight - 6);
        pdf.setLineDash([]);
        pdf.setDrawColor(0);

        yOffset = cardTop + cardHeight + 10;
      });

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
  const eventThumbnailSrc = eventImageDataUrl || registration.event.imageUrl;
  const eventInitial = (registration.event.name?.charAt(0) || '?').toUpperCase();

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
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full border border-white/40 bg-white/10 overflow-hidden flex items-center justify-center">
                  {eventThumbnailSrc ? (
                    <img
                      src={eventThumbnailSrc}
                      alt={registration.event.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-white/80">
                      {eventInitial}
                    </span>
                  )}
                </div>
                <div className="space-y-1 text-white">
                  <h2 className="text-2xl font-bold leading-tight">
                    {registration.event.name}
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-white/90">
                    <Calendar className="w-4 h-4" />
                    <span>{eventDateLabel}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/90">
                    <MapPin className="w-4 h-4" />
                    <span>{registration.event.location}</span>
                  </div>
                </div>
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
            <TicketDivider />

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

            <TicketDivider />

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
