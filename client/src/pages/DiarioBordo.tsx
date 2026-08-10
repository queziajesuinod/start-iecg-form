import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HtmlEditor } from '@/components/HtmlEditor';
import { toast } from 'sonner';
import { Loader2, CheckCircle2, Clock, Star, BookOpen, Send } from 'lucide-react';
import {
  fetchRespostas,
  fetchPendentes,
  submitResposta,
  type Challenge,
  type Resposta,
} from '@/lib/diarioBordoApi';

// ─── Helpers ──────────────────────────────────────────────────────────────────

const formatDate = (iso?: string) => {
  if (!iso) return '-';
  try {
    return new Date(iso).toLocaleDateString('pt-BR', {
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });
  } catch { return iso; }
};

// ─── Componente principal ─────────────────────────────────────────────────────

export default function DiarioBordo() {
  const [email, setEmail]           = useState('');
  const [emailAtivo, setEmailAtivo] = useState('');
  const [loading, setLoading]       = useState(false);
  const [pendentes, setPendentes]   = useState<Challenge[] | null>(null);
  const [respostas, setRespostas]   = useState<Resposta[] | null>(null);

  const buscar = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailTrim = email.trim().toLowerCase();
    if (!emailTrim) return;

    setLoading(true);
    setPendentes(null);
    setRespostas(null);

    try {
      const [pend, resp] = await Promise.all([
        fetchPendentes(emailTrim),
        fetchRespostas(emailTrim),
      ]);
      setPendentes(pend);
      setRespostas(resp);
      setEmailAtivo(emailTrim);
    } catch (err: any) {
      toast.error(err?.message || 'Erro ao carregar os dados.');
    } finally {
      setLoading(false);
    }
  };

  const recarregar = async (emailParam: string) => {
    const [pend, resp] = await Promise.all([
      fetchPendentes(emailParam),
      fetchRespostas(emailParam),
    ]);
    setPendentes(pend);
    setRespostas(resp);
  };

  const onRespondido = () => {
    recarregar(emailAtivo);
  };

  const carregou = pendentes !== null && respostas !== null;

  return (
    <div className="min-h-dvh bg-gradient-to-b from-background to-muted/40">
      <div className="container py-10 animate-fade-in-up">
        <div className="max-w-2xl mx-auto space-y-6">

          <header className="text-center space-y-2">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">START IECG</p>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Diário de Bordo</h1>
            <p className="text-muted-foreground text-sm">Responda os desafios da sua jornada</p>
          </header>

          {/* Formulário de e-mail */}
          <Card className="p-6 shadow-md">
            <form onSubmit={buscar} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-foreground font-medium">Seu e-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="voce@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="bg-muted/50"
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading
                  ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Carregando...</>
                  : <><BookOpen className="mr-2 h-4 w-4" />Ver minha jornada</>}
              </Button>
            </form>
          </Card>

          {/* Conteúdo após carregar */}
          {carregou && (
            <Tabs defaultValue="pendentes" className="space-y-4">
              <TabsList className="w-full grid grid-cols-2">
                <TabsTrigger value="pendentes" className="gap-2">
                  <Clock className="h-4 w-4" />
                  A responder
                  {pendentes.length > 0 && (
                    <span className="ml-1 rounded-full bg-info/10 text-info border border-info/25 text-xs px-2 py-0.5 font-semibold">
                      {pendentes.length}
                    </span>
                  )}
                </TabsTrigger>
                <TabsTrigger value="respondidas" className="gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Respondidas
                  {respostas.length > 0 && (
                    <span className="ml-1 rounded-full bg-success/10 text-success border border-success/25 text-xs px-2 py-0.5 font-semibold">
                      {respostas.length}
                    </span>
                  )}
                </TabsTrigger>
              </TabsList>

              {/* Aba: pendentes */}
              <TabsContent value="pendentes" className="space-y-4">
                {pendentes.length === 0 ? (
                  <Card className="p-8 text-center text-muted-foreground bg-card">
                    <CheckCircle2 className="mx-auto h-8 w-8 text-success mb-3" />
                    <p className="font-medium">Todos os desafios respondidos!</p>
                    <p className="text-sm mt-1">Confira suas respostas na aba "Respondidas".</p>
                  </Card>
                ) : (
                  pendentes.map(challenge => (
                    <ChallengeCard
                      key={challenge.id}
                      challenge={challenge}
                      email={emailAtivo}
                      onRespondido={onRespondido}
                    />
                  ))
                )}
              </TabsContent>

              {/* Aba: respondidas */}
              <TabsContent value="respondidas" className="space-y-4">
                {respostas.length === 0 ? (
                  <Card className="p-8 text-center text-muted-foreground bg-card">
                    <Clock className="mx-auto h-8 w-8 text-muted-foreground mb-3" />
                    <p className="font-medium">Nenhuma resposta aprovada ainda.</p>
                    <p className="text-sm mt-1">Responda os desafios pendentes para acumular pontos!</p>
                  </Card>
                ) : (
                  <>
                    <PontuacaoTotal respostas={respostas} />
                    {respostas.map(r => (
                      <RespostaCard key={r.id} resposta={r} />
                    ))}
                  </>
                )}
              </TabsContent>
            </Tabs>
          )}

        </div>
      </div>
    </div>
  );
}

// ─── Card de pontuação total ───────────────────────────────────────────────────

function PontuacaoTotal({ respostas }: { respostas: Resposta[] }) {
  const total = respostas.reduce((acc, r) => acc + (r.pointsAwarded ?? 0), 0);
  return (
    <Card className="p-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-md border-0">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-primary-foreground/80 text-sm font-medium">Total de pontos acumulados</p>
          <p className="text-3xl font-bold">{total} pts</p>
        </div>
        <Star className="h-10 w-10 text-primary-foreground/80" />
      </div>
    </Card>
  );
}

// ─── Card de desafio pendente ─────────────────────────────────────────────────

function ChallengeCard({
  challenge,
  email,
  onRespondido,
}: {
  challenge: Challenge;
  email: string;
  onRespondido: () => void;
}) {
  const [resposta, setResposta]   = useState(challenge.userSubmission?.responseText ?? '');
  const [opcaoSel, setOpcaoSel]   = useState('');
  const [enviando, setEnviando]   = useState(false);

  const temOpcoes = (challenge.questionOptions?.length ?? 0) > 0;

  const respostaVazia = !resposta || resposta.replace(/<[^>]*>/g, '').trim() === '';

  const enviar = async () => {
    const texto = temOpcoes ? opcaoSel : resposta;
    if (!texto || (temOpcoes ? !opcaoSel : respostaVazia)) {
      toast.warning('Por favor, preencha sua resposta antes de enviar.');
      return;
    }

    setEnviando(true);
    try {
      await submitResposta(email, challenge.id, texto);
      toast.success('Resposta enviada! Aguardando aprovação.');
      onRespondido();
    } catch (err: any) {
      toast.error(err?.message || 'Erro ao enviar resposta.');
    } finally {
      setEnviando(false);
    }
  };

  const jaEnviou = !!challenge.userSubmission;

  return (
    <Card className="shadow-md overflow-hidden">
      <div className="px-6 py-5 space-y-4">
        {/* Cabeçalho */}
        <div className="flex items-start justify-between gap-3">
          <p className="font-semibold text-foreground leading-snug">{challenge.title}</p>
          <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-info/10 text-info border border-info/25">
            {challenge.points} pts
          </span>
        </div>

        {/* Descrição / pergunta de fato */}
        {challenge.description && (
          <div
            className="prose prose-sm prose-slate dark:prose-invert max-w-none text-foreground"
            dangerouslySetInnerHTML={{ __html: challenge.description }}
          />
        )}

        {/* Feedback de rejeição (se houver) */}
        {jaEnviou && challenge.userSubmission?.status === 'rejected' && challenge.userSubmission.feedback && (
          <div className="rounded-lg bg-destructive/10 border border-destructive/25 px-4 py-3 text-sm text-destructive">
            <span className="font-semibold">Feedback: </span>{challenge.userSubmission.feedback}
          </div>
        )}

        {/* Campo de resposta */}
        {temOpcoes ? (
          <div className="space-y-2">
            {challenge.questionOptions!.map((opt, i) => {
              const val = opt.id ?? opt.text;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setOpcaoSel(val)}
                  className={`w-full text-left rounded-lg border px-4 py-3 text-sm transition-colors ${
                    opcaoSel === val
                      ? 'border-primary bg-primary/10 text-primary font-medium'
                      : 'border-border bg-card text-foreground hover:bg-accent'
                  }`}
                >
                  {opt.text}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="space-y-1.5">
            <Label className="text-muted-foreground text-sm">Sua resposta</Label>
            <HtmlEditor
              value={resposta}
              onChange={setResposta}
              placeholder="Escreva sua resposta aqui..."
            />
          </div>
        )}

        <Button
          onClick={enviar}
          disabled={enviando || (temOpcoes ? !opcaoSel : respostaVazia)}
          className="w-full"
        >
          {enviando
            ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Enviando...</>
            : <><Send className="mr-2 h-4 w-4" />{jaEnviou ? 'Reenviar resposta' : 'Enviar resposta'}</>}
        </Button>

        {jaEnviou && challenge.userSubmission?.status === 'pending' && (
          <p className="text-center text-xs text-warning">
            Você já enviou uma resposta — ela está aguardando aprovação.
          </p>
        )}
      </div>
    </Card>
  );
}

// ─── Card de resposta aprovada ────────────────────────────────────────────────

function RespostaCard({ resposta }: { resposta: Resposta }) {
  return (
    <Card className="shadow-sm overflow-hidden">
      <div className="px-6 py-5 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <p className="font-semibold text-foreground leading-snug">{resposta.challenge?.title ?? '—'}</p>
          <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-success/10 text-success border border-success/25">
            +{resposta.pointsAwarded ?? 0} pts
          </span>
        </div>

        <div
          className="prose prose-sm prose-slate dark:prose-invert max-w-none rounded-lg bg-muted/50 border border-border px-4 py-3 text-foreground"
          dangerouslySetInnerHTML={{ __html: resposta.responseText }}
        />

        {resposta.feedback && (
          <div className="rounded-lg bg-info/10 border border-info/25 px-4 py-3 text-sm text-info">
            <span className="font-semibold">Feedback: </span>{resposta.feedback}
          </div>
        )}

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Enviado em {formatDate(resposta.submittedAt)}</span>
          {resposta.approvedAt && <span>Aprovado em {formatDate(resposta.approvedAt)}</span>}
        </div>
      </div>
    </Card>
  );
}
