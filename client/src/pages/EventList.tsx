import { useState, useEffect } from 'react';
import { useNavigate } from 'wouter';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Loader2 } from 'lucide-react';
import { listarEventosPublicos, type Event } from '@/lib/eventsApi';

export default function EventList() {
  const [, navigate] = useNavigate();
  const [eventos, setEventos] = useState<Event[]>([]);
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

              return (
                <Card
                  key={evento.id}
                  className="hover:shadow-xl transition-shadow duration-300 flex flex-col"
                >
                  {/* Imagem do Evento */}
                  {evento.imageUrl && (
                    <div className="h-48 overflow-hidden rounded-t-lg">
                      <img
                        src={evento.imageUrl}
                        alt={evento.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
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
                    <CardDescription className="line-clamp-2">
                      {evento.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 space-y-3">
                    {/* Data */}
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{formatarData(evento.startDate)}</span>
                    </div>

                    {/* Local */}
                    {evento.location && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{evento.location}</span>
                      </div>
                    )}

                    {/* Vagas */}
                    {vagasDisponiveis !== null && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="h-4 w-4" />
                        <span>
                          {vagasDisponiveis > 0
                            ? `${vagasDisponiveis} vagas disponíveis`
                            : 'Vagas esgotadas'}
                        </span>
                      </div>
                    )}
                  </CardContent>

                  <CardFooter>
                    <Button
                      onClick={() => navigate(`/evento/${evento.id}`)}
                      disabled={esgotado}
                      className="w-full"
                    >
                      {esgotado ? 'Esgotado' : 'Ver Detalhes'}
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
