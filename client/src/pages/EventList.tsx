import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';
import { listarEventosPublicos, listarLotesPublicos, type Event } from '@/lib/eventsApi';
import { getActiveBatches, sumAvailableSeats } from '@/lib/eventUtils';

type BatchAvailability = {
  hasActiveBatch: boolean;
  availableSeats: number | null;
  activeBatchNames: string[];
};

export default function EventList() {
  const [, setLocation] = useLocation();
  const [eventos, setEventos] = useState<Event[]>([]);
  const [batchAvailability, setBatchAvailability] = useState<Record<string, BatchAvailability>>({});
  const [loadingBatchAvailability, setLoadingBatchAvailability] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const verificarDisponibilidadeLotes = async (listaEventos: Event[]) => {
    if (!listaEventos.length) {
      setBatchAvailability({});
      setLoadingBatchAvailability({});
      return;
    }

    setLoadingBatchAvailability(
      Object.fromEntries(listaEventos.map((evento) => [evento.id, true]))
    );

    const hoje = new Date();
    const availabilityEntries = await Promise.all(
      listaEventos.map(async (evento) => {
        try {
          const lotes = await listarLotesPublicos(evento.id, { skipCache: true });
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
    setLoadingBatchAvailability(
      Object.fromEntries(listaEventos.map((evento) => [evento.id, false]))
    );
  };

  const agendarVerificacaoLotes = (listaEventos: Event[]) => {
    if (!listaEventos.length) {
      setBatchAvailability({});
      setLoadingBatchAvailability({});
      return;
    }

    // Yield para permitir paint inicial antes da verificacao de disponibilidade.
    setTimeout(() => {
      void verificarDisponibilidadeLotes(listaEventos);
    }, 0);
  };

  useEffect(() => {
    let mounted = true;

    const carregar = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await listarEventosPublicos();
        if (!mounted) return;
        setEventos(data);
        setBatchAvailability({});
        setLoadingBatchAvailability({});
        setLoading(false);
        agendarVerificacaoLotes(data);
      } catch (err) {
        if (!mounted) return;
        console.error('Erro ao carregar eventos:', err);
        setError('Erro ao carregar eventos. Tente novamente mais tarde.');
        setLoading(false);
      }
    };

    void carregar();

    return () => {
      mounted = false;
    };
  }, []);

  const carregarEventos = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await listarEventosPublicos();
      setEventos(data);
      setBatchAvailability({});
      setLoadingBatchAvailability({});
      setLoading(false);
      agendarVerificacaoLotes(data);
    } catch (err) {
      console.error('Erro ao carregar eventos:', err);
      setError('Erro ao carregar eventos. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Eventos Disponiveis
          </h1>
          <p className="text-lg text-gray-600">
            Escolha um evento e faca sua inscricao
          </p>
        </div>

        {error ? (
          <Card className="max-w-md mx-auto">
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
        ) : loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <Card key={`event-skeleton-${index}`} className="pt-0">
                <div className="aspect-[16/9] w-full animate-pulse rounded-t-lg bg-slate-200" />
                <CardHeader className="space-y-3">
                  <div className="h-6 w-3/4 animate-pulse rounded bg-slate-200" />
                  <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="h-4 w-1/2 animate-pulse rounded bg-slate-200" />
                  <div className="h-4 w-2/3 animate-pulse rounded bg-slate-200" />
                </CardContent>
                <CardFooter>
                  <div className="h-9 w-full animate-pulse rounded bg-slate-200" />
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : eventos.length === 0 ? (
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6 text-center">
              <p className="text-gray-600">Nenhum evento disponivel no momento.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventos.map((evento) => {
              const vagasDisponiveis = calcularVagasDisponiveis(evento);
              const esgotado = vagasDisponiveis !== null && vagasDisponiveis <= 0;
              const availability = batchAvailability[evento.id];
              const availabilityLoading = loadingBatchAvailability[evento.id] ?? true;
              const possuiLoteAtivo = availability?.hasActiveBatch ?? false;
              const podeIrDetalhes = !availabilityLoading && possuiLoteAtivo && !esgotado;
              const botaoLabel = availabilityLoading
                ? 'Verificando...'
                : esgotado
                  ? 'Esgotado'
                  : possuiLoteAtivo
                    ? 'Ver Detalhes'
                    : 'Encerrado';

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
                        loading="lazy"
                        decoding="async"
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
