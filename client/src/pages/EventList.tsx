import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Loader2 } from 'lucide-react';
import { listarEventosPublicos, listarLotesPublicos, type Event } from '@/lib/eventsApi';
import { getActiveBatches, sumAvailableSeats } from '@/lib/eventUtils';

export default function EventList() {
  const [, setLocation] = useLocation();
  const [eventos, setEventos] = useState<Event[]>([]);
  type BatchAvailability = {
    hasActiveBatch: boolean;
    availableSeats: number | null;
    activeBatchNames: string[];
  };
  const [batchAvailability, setBatchAvailability] = useState<Record<string, BatchAvailability>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    carregarEventos();
  }, []);

  const carregarEventos = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await listarEventosPublicos();
      setEventos(data);
      await verificarDisponibilidadeLotes(data);
    } catch (err) {
      console.error('Erro ao carregar eventos:', err);
      setError('Erro ao carregar eventos. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  const verificarDisponibilidadeLotes = async (eventos: Event[]) => {
    if (!eventos.length) {
      setBatchAvailability({});
      return;
    }

    const hoje = new Date();
    const availabilityEntries = await Promise.all(
      eventos.map(async (evento) => {
        try {
          const lotes = await listarLotesPublicos(evento.id);
          const activeBatches = getActiveBatches(lotes, hoje);
          return {
            id: evento.id,
            hasActiveBatch: activeBatches.length > 0,
            availableSeats: sumAvailableSeats(activeBatches),
            activeBatchNames: activeBatches.map((batch) => batch.name).filter(Boolean),
          };
        } catch (batchError) {
          console.error('Erro ao verificar lotes do evento:', evento.id, batchError);
          return {
            id: evento.id,
            hasActiveBatch: false,
            availableSeats: null,
            activeBatchNames: [],
          };
        }
      })
    );

    const availabilityByEvent: Record<string, BatchAvailability> = {};
    availabilityEntries.forEach((entry) => {
      availabilityByEvent[entry.id] = {
        hasActiveBatch: entry.hasActiveBatch,
        availableSeats: entry.availableSeats,
        activeBatchNames: entry.activeBatchNames,
      };
    });
    setBatchAvailability(availabilityByEvent);
  };

  const formatarData = (data: string) => {
    return new Date(data).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const calcularVagasDisponiveis = (evento: Event) => {
    if (!evento.maxRegistrations) return null;
    return evento.maxRegistrations - evento.currentRegistrations;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-lg text-gray-600">Carregando eventos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle className="text-red-600">Erro</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{error}</p>
          </CardContent>
          <CardFooter>
            <Button onClick={carregarEventos} className="w-full">
              Tentar Novamente
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Eventos Disponíveis
          </h1>
          <p className="text-lg text-gray-600">
            Escolha um evento e faça sua inscrição
          </p>
        </div>

        {/* Lista de Eventos */}
        {eventos.length === 0 ? (
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6 text-center">
              <p className="text-gray-600">Nenhum evento disponível no momento.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventos.map((evento) => {
              const vagasDisponiveis = calcularVagasDisponiveis(evento);
              const esgotado = vagasDisponiveis !== null && vagasDisponiveis <= 0;
              const availability = batchAvailability[evento.id];
              const possuiLoteAtivo = availability?.hasActiveBatch ?? false;
              const podeIrDetalhes = possuiLoteAtivo && !esgotado;
              const botaoLabel = esgotado ? 'Esgotado' : possuiLoteAtivo ? 'Ver Detalhes' : 'Encerrado';

              return (
                <Card
                  key={evento.id}
                  className="hover:shadow-xl transition-shadow duration-300 flex flex-col pt-0"
                >
                  {evento.imageUrl && (
                    <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-t-lg">
                      <img
                        src={evento.imageUrl}
                        alt={evento.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </AspectRatio>
                  )}

                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-xl">{evento.title}</CardTitle>
                      {esgotado && (
                        <Badge variant="destructive" className="shrink-0">
                          Esgotado
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="line-clamp-2">{evento.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{formatarData(evento.startDate)}</span>
                    </div>

                    {evento.location && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{evento.location}</span>
                      </div>
                    )}
                  </CardContent>

                  <CardFooter className="flex flex-col gap-2">
                   
                    <Button
                      onClick={() => setLocation(`/eventos/${evento.id}`)}
                      disabled={!podeIrDetalhes}
                      className="w-full"
                    >
                      {botaoLabel}
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
