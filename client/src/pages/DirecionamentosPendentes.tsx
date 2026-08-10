import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Loader2, RotateCcw, CheckCircle2, AlertCircle, PhoneOff, Clock, RefreshCw, XCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import type { DirecPendente, FeedbackLider } from '@/lib/direcionamentosApi';

// ─── Estilos de badge por status ──────────────────────────────────────────────

const STATUS_BADGE: Record<string, { bg: string; label: string; icon: LucideIcon }> = {
  ENVIO_LIDER_PENDENTE:              { bg: 'bg-muted text-muted-foreground border border-border',            label: 'Sem contato ainda',      icon: PhoneOff },
  ENVIO_LIDER_PENDENTE_WHATS_ERRADO: { bg: 'bg-warning/10 text-warning border border-warning/25',           label: 'WhatsApp inválido',      icon: Clock },
  CONTATO_LIDER_SEM_RETORNO:         { bg: 'bg-warning/10 text-warning border border-warning/25',           label: 'Sem retorno',            icon: Clock },
  EM_CONSOLIDACAO:                   { bg: 'bg-info/10 text-info border border-info/25',                    label: 'Em consolidação',        icon: RefreshCw },
  CONSOLIDACAO_INTERROMPIDA:         { bg: 'bg-destructive/10 text-destructive border border-destructive/25', label: 'Não consolidado',      icon: XCircle },
  CONSOLIDADO_CELULA:                { bg: 'bg-success/10 text-success border border-success/25',           label: 'Consolidado na célula',  icon: CheckCircle2 },
};

const statusBadge = (status?: string) =>
  STATUS_BADGE[status ?? ''] ?? { bg: 'bg-muted text-muted-foreground border border-border', label: 'Pendente', icon: Clock };

// ─── Máquina de estados do wizard ──────────────────────────────────────────────
//
// Árvore linear (4 perguntas). O front só COLETA o feedback; quem deriva o status
// final (e aplica os limites de tentativa/ciclo) é o backend.
//
//   Houve resposta? ──não──▶ [feedback: houveResposta=false]  → confirmar
//        │sim
//   Foi à célula? ──não──▶ Vai na próxima?  → confirmar
//        │sim                     └ (sim/não)
//   Vai continuar? ──(sim/não)──▶ confirmar

type WizardStep =
  | 'q_resposta'
  | 'q_foi_celula'
  | 'q_vai_continuar'
  | 'q_vai_proxima'
  | 'confirmar';

type WizardState = {
  step: WizardStep;
  history: WizardStep[];
  feedback: FeedbackLider;
  observacao: string;
  saving: boolean;
};

const makeInitialWizard = (): WizardState => ({
  step: 'q_resposta',
  history: [],
  feedback: { contatoRealizado: true },
  observacao: '',
  saving: false,
});

// ─── Helpers ──────────────────────────────────────────────────────────────────

const formatPhone = (digits: string) => {
  const d = digits.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

const DECISAO_LABEL: Record<string, string> = {
  encaminhamento_celula: 'Encaminhamento de Célula',
  apelo_decisao:         'Apelo',
  apelo_volta:           'Reconciliação',
};

const formatDecisao = (decisao?: string) =>
  decisao ? (DECISAO_LABEL[decisao] ?? decisao) : '-';

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

export default function DirecionamentosPendentes() {
  const [erro, setErro]             = useState<string | null>(null);
  const [resultados, setResultados] = useState<DirecPendente[]>([]);
  const [wizards, setWizards]       = useState<Record<string, WizardState>>({});
  const [filtros, setFiltros]       = useState<{ id?: string; nome?: string; whatsapp?: string } | null>(null);

  const enviarFeedback = trpc.direcionamentos.enviarFeedback.useMutation();

  const busca = trpc.direcionamentos.buscarPendentes.useQuery(filtros ?? {}, {
    enabled: filtros !== null,
    retry: false,
  });

  useEffect(() => {
    const params   = new URLSearchParams(window.location.search);
    const id       = params.get('id')?.trim();
    const nome     = params.get('nome')?.trim();
    const whatsapp = params.get('whatsapp')?.replace(/\D/g, '').trim();

    if (!id && !nome && !whatsapp) {
      setErro('Link inválido. Nenhum filtro de identificação foi fornecido.');
      return;
    }

    setFiltros({ id: id || undefined, nome: nome || undefined, whatsapp: whatsapp || undefined });
  }, []);

  useEffect(() => {
    if (!busca.data) return;
    const data = busca.data as DirecPendente[];
    setResultados(data);
    const initial: Record<string, WizardState> = {};
    data.forEach(item => { initial[item.id] = makeInitialWizard(); });
    setWizards(initial);
  }, [busca.data]);

  useEffect(() => {
    if (busca.error) setErro(busca.error.message || 'Erro ao carregar os dados.');
  }, [busca.error]);

  const loading = busca.isFetching;

  // ── Wizard helpers ──

  const getWizard = (item: DirecPendente): WizardState =>
    wizards[item.id] ?? makeInitialWizard();

  const resetWizard = (id: string) =>
    setWizards(prev => ({ ...prev, [id]: makeInitialWizard() }));

  const setObservacao = (id: string, observacao: string) =>
    setWizards(prev => ({ ...prev, [id]: { ...prev[id], observacao } }));

  // Avança para o próximo passo, acumulando respostas no feedback.
  const goTo = (
    id: string,
    currentStep: WizardStep,
    nextStep: WizardStep,
    feedbackPatch: Partial<FeedbackLider> = {},
  ) =>
    setWizards(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        step: nextStep,
        history: [...(prev[id]?.history ?? []), currentStep],
        feedback: { ...prev[id].feedback, ...feedbackPatch },
      },
    }));

  const goBack = (item: DirecPendente) => {
    setWizards(prev => {
      const wiz = prev[item.id];
      if (!wiz || wiz.history.length === 0) return { ...prev, [item.id]: makeInitialWizard() };
      const history = [...wiz.history];
      const step = history.pop()!;
      // Ao voltar, limpamos os flags de escape para não vazarem numa nova ramificação.
      const { numeroInvalido, ...feedback } = wiz.feedback;
      return { ...prev, [item.id]: { ...wiz, step, history, feedback: { ...feedback, contatoRealizado: true } } };
    });
  };

  // ── Handlers das perguntas ──

  const handleResposta = (item: DirecPendente, houveResposta: boolean) => {
    if (houveResposta) {
      goTo(item.id, 'q_resposta', 'q_foi_celula', { houveResposta: true });
    } else {
      goTo(item.id, 'q_resposta', 'confirmar', { houveResposta: false });
    }
  };

  const handleFoiCelula = (item: DirecPendente, foi: boolean) => {
    if (foi) {
      goTo(item.id, 'q_foi_celula', 'q_vai_continuar', { foiCelula: true });
    } else {
      goTo(item.id, 'q_foi_celula', 'q_vai_proxima', { foiCelula: false });
    }
  };

  const handleVaiContinuar = (item: DirecPendente, vai: boolean) =>
    goTo(item.id, 'q_vai_continuar', 'confirmar', { vaiContinuar: vai });

  const handleVaiProxima = (item: DirecPendente, vai: boolean) =>
    goTo(item.id, 'q_vai_proxima', 'confirmar', { vaiNaProxima: vai });

  // Escapes — disponíveis a qualquer momento, saltam direto para a confirmação.
  const handleNumeroErrado = (item: DirecPendente) => {
    const wiz = getWizard(item);
    goTo(item.id, wiz.step, 'confirmar', { contatoRealizado: false, numeroInvalido: true });
  };

  const handleSemContato = (item: DirecPendente) => {
    const wiz = getWizard(item);
    goTo(item.id, wiz.step, 'confirmar', { contatoRealizado: false, numeroInvalido: false });
  };

  // ── Salvar ──

  const handleSalvar = async (item: DirecPendente) => {
    const wiz = getWizard(item);
    setWizards(prev => ({ ...prev, [item.id]: { ...prev[item.id], saving: true } }));
    try {
      const updated = await enviarFeedback.mutateAsync({
        id: item.id,
        ...wiz.feedback,
        observacao: wiz.observacao.trim() || undefined,
      });
      const novoStatus = (updated as any)?.status;
      const novoMotivo = (updated as any)?.motivo;
      setResultados(prev =>
        prev.map(r => r.id === item.id ? { ...r, status: novoStatus ?? r.status, motivo: novoMotivo ?? r.motivo } : r)
      );
      resetWizard(item.id);
      toast.success(`Feedback registrado — ${statusBadge(novoStatus).label}`);
    } catch (err: any) {
      toast.error(err?.message || 'Erro ao registrar feedback.');
      setWizards(prev => ({ ...prev, [item.id]: { ...prev[item.id], saving: false } }));
    }
  };

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="min-h-dvh bg-gradient-to-b from-background to-muted/40">
      <div className="container py-10">
        <div className="max-w-2xl mx-auto space-y-6 animate-fade-in-up">

          <header className="text-center space-y-2">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">START IECG</p>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Acompanhamento de Apelos</h1>
          </header>

          {loading && (
            <div className="flex justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}

          {!loading && erro && (
            <Card className="p-6 text-center space-y-2 bg-card border-destructive/25">
              <AlertCircle className="mx-auto h-8 w-8 text-destructive" />
              <p className="text-foreground font-medium">{erro}</p>
              <p className="text-sm text-muted-foreground">Verifique o link recebido e tente novamente.</p>
            </Card>
          )}

          {!loading && !erro && resultados.length === 0 && (
            <Card className="p-6 text-center text-muted-foreground bg-card">
              Nenhum apelo pendente encontrado para o seu contato.
            </Card>
          )}

          {!loading && resultados.map(item => {
            const badge = statusBadge(item.status);
            const wiz   = getWizard(item);

            return (
              <Card key={item.id} className="shadow-md border border-border overflow-hidden">

                <div className="px-6 py-5 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-lg font-bold text-foreground">{item.nome}</p>
                      <p className="text-sm text-muted-foreground">{formatPhone(item.whatsapp)}</p>
                    </div>
                    <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${badge.bg}`}>
                      <badge.icon className="h-3.5 w-3.5" />
                      {badge.label}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <InfoItem label="Decisão"  value={formatDecisao(item.decisao)} />
                    <InfoItem label="Rede"     value={item.rede || '-'} />
                    <InfoItem label="Bairro"   value={item.bairro_apelo || '-'} />
                    <InfoItem label="Cidade"   value={[item.cidade_apelo, item.estado_apelo].filter(Boolean).join(' - ') || '-'} />
                    {item.dias_semana && item.dias_semana.length > 0 && (
                      <div className="col-span-2">
                        <InfoItem label="Dias disponíveis" value={item.dias_semana.join(', ')} />
                      </div>
                    )}
                    {item.observacao && (
                      <div className="col-span-2">
                        <InfoItem label="Observação" value={item.observacao} />
                      </div>
                    )}
                    {item.motivo && (
                      <div className="col-span-2">
                        <InfoItem label="Último registro" value={item.motivo} />
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">Cadastrado em {formatDate(item.createdAt)}</p>
                </div>

                <div className="border-t border-border px-6 py-5">
                  <WizardAcompanhamento
                    wiz={wiz}
                    isEmConsolidacao={item.status === 'EM_CONSOLIDACAO'}
                    onResposta={sim => handleResposta(item, sim)}
                    onFoiCelula={foi => handleFoiCelula(item, foi)}
                    onVaiContinuar={vai => handleVaiContinuar(item, vai)}
                    onVaiProxima={vai => handleVaiProxima(item, vai)}
                    onNumeroErrado={() => handleNumeroErrado(item)}
                    onSemContato={() => handleSemContato(item)}
                    onObservacaoChange={obs => setObservacao(item.id, obs)}
                    onSalvar={() => handleSalvar(item)}
                    onBack={() => goBack(item)}
                    onReset={() => resetWizard(item.id)}
                  />
                </div>

              </Card>
            );
          })}

        </div>
      </div>
    </div>
  );
}

// ─── Wizard ───────────────────────────────────────────────────────────────────

interface WizardProps {
  wiz: WizardState;
  isEmConsolidacao: boolean;
  onResposta: (sim: boolean) => void;
  onFoiCelula: (foi: boolean) => void;
  onVaiContinuar: (vai: boolean) => void;
  onVaiProxima: (vai: boolean) => void;
  onNumeroErrado: () => void;
  onSemContato: () => void;
  onObservacaoChange: (v: string) => void;
  onSalvar: () => void;
  onBack: () => void;
  onReset: () => void;
}

function WizardAcompanhamento({
  wiz, isEmConsolidacao,
  onResposta, onFoiCelula, onVaiContinuar, onVaiProxima,
  onNumeroErrado, onSemContato, onObservacaoChange, onSalvar, onBack,
}: WizardProps) {
  const podeVoltar = wiz.history.length > 0;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-foreground">Atualizar acompanhamento</p>
        {podeVoltar && (
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <RotateCcw className="h-3 w-3" /> Voltar
          </button>
        )}
      </div>

      {/* Pergunta 1 — Houve resposta? */}
      {wiz.step === 'q_resposta' && (
        <Pergunta
          texto={isEmConsolidacao ? 'Houve resposta desde o último contato?' : 'A pessoa respondeu o contato?'}
          descricao="O líder enviou a mensagem — a pessoa respondeu ou está em conversa?"
          onSim={() => onResposta(true)}
          onNao={() => onResposta(false)}
          labelNao="Não respondeu"
        />
      )}

      {/* Pergunta 2 — Foi à célula? */}
      {wiz.step === 'q_foi_celula' && (
        <Pergunta
          texto="A pessoa já foi à célula?"
          descricao="Desde o contato, ela chegou a participar de uma reunião de célula?"
          onSim={() => onFoiCelula(true)}
          onNao={() => onFoiCelula(false)}
          labelNao="Ainda não foi"
        />
      )}

      {/* Pergunta 3a — Foi: vai continuar? */}
      {wiz.step === 'q_vai_continuar' && (
        <Pergunta
          texto="A pessoa decidiu continuar na célula?"
          descricao="Depois de ir, ela demonstrou interesse em permanecer e participar regularmente?"
          onSim={() => onVaiContinuar(true)}
          onNao={() => onVaiContinuar(false)}
          labelSim="Sim, quer ficar"
          labelNao="Não quer continuar"
        />
      )}

      {/* Pergunta 3b — Não foi: vai na próxima? */}
      {wiz.step === 'q_vai_proxima' && (
        <Pergunta
          texto="Ela pretende ir na próxima?"
          descricao="Mesmo sem ter ido ainda, existe intenção de participar da próxima reunião?"
          onSim={() => onVaiProxima(true)}
          onNao={() => onVaiProxima(false)}
          labelSim="Sim, vai na próxima"
          labelNao="Não pretende ir"
        />
      )}

      {wiz.step === 'confirmar' && (
        <ConfirmarStep
          feedback={wiz.feedback}
          observacao={wiz.observacao}
          saving={wiz.saving}
          onObservacaoChange={onObservacaoChange}
          onSalvar={onSalvar}
        />
      )}

      {/* Escape — sempre disponível enquanto ainda responde às perguntas */}
      {wiz.step !== 'confirmar' && (
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 pt-1">
          <button
            onClick={onSemContato}
            className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2"
          >
            Ainda não consegui fazer contato
          </button>
          <button
            onClick={onNumeroErrado}
            className="flex items-center gap-1 text-xs text-warning hover:text-warning/80 underline underline-offset-2"
          >
            <PhoneOff className="h-3 w-3" /> Número errado / não existe
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Pergunta ─────────────────────────────────────────────────────────────────

function Pergunta({
  texto, descricao, onSim, onNao,
  labelSim = 'Sim', labelNao = 'Não',
}: {
  texto: string;
  descricao?: string;
  onSim: () => void;
  onNao: () => void;
  labelSim?: string;
  labelNao?: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-muted/40 px-5 py-4 space-y-3">
      <p className="font-medium text-foreground">{texto}</p>
      {descricao && <p className="text-sm text-muted-foreground">{descricao}</p>}
      <div className="flex gap-3">
        <Button className="flex-1 bg-success hover:brightness-105 text-success-foreground" onClick={onSim}>
          {labelSim}
        </Button>
        <Button variant="outline" className="flex-1 border-destructive/40 text-destructive hover:bg-destructive/10" onClick={onNao}>
          {labelNao}
        </Button>
      </div>
    </div>
  );
}

// ─── Confirmação ──────────────────────────────────────────────────────────────
//
// O front não decide o status final (isso é do backend, que aplica os limites de
// tentativa/ciclo). Aqui só resumimos as respostas e coletamos a observação.

function resumoFeedback(f: FeedbackLider): { icon: LucideIcon; texto: string } {
  if (f.numeroInvalido)        return { icon: PhoneOff, texto: 'Número de WhatsApp errado ou inexistente' };
  if (!f.contatoRealizado)     return { icon: Clock, texto: 'Ainda não conseguiu fazer o contato' };
  if (!f.houveResposta)        return { icon: Clock, texto: 'Enviou mensagem, mas não houve resposta' };
  if (f.foiCelula)             return f.vaiContinuar
    ? { icon: CheckCircle2, texto: 'Foi à célula e quer continuar' }
    : { icon: XCircle, texto: 'Foi à célula, mas não quer continuar' };
  return f.vaiNaProxima
    ? { icon: RefreshCw, texto: 'Ainda não foi, mas pretende ir à próxima' }
    : { icon: XCircle, texto: 'Ainda não foi e não pretende ir' };
}

function ConfirmarStep({
  feedback, observacao, saving, onObservacaoChange, onSalvar,
}: {
  feedback: FeedbackLider;
  observacao: string;
  saving: boolean;
  onObservacaoChange: (v: string) => void;
  onSalvar: () => void;
}) {
  const resumo = resumoFeedback(feedback);
  const ResumoIcon = resumo.icon;
  return (
    <div className="rounded-xl border border-border bg-muted/40 px-5 py-4 space-y-4">
      <div className="flex items-center gap-2">
        <ResumoIcon className="h-5 w-5 text-muted-foreground" />
        <div>
          <p className="font-semibold text-foreground">{resumo.texto}</p>
          <p className="text-xs text-muted-foreground">Será registrado no acompanhamento</p>
        </div>
      </div>

      <div className="space-y-1">
        <Label className="text-foreground">Observação (opcional)</Label>
        <Textarea
          rows={3}
          placeholder="Descreva a situação com mais detalhes..."
          value={observacao}
          onChange={e => onObservacaoChange(e.target.value)}
          className="bg-card"
        />
      </div>

      <Button className="w-full" onClick={onSalvar} disabled={saving}>
        {saving
          ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Salvando...</>
          : <><CheckCircle2 className="mr-2 h-4 w-4" />Confirmar e salvar</>}
      </Button>
    </div>
  );
}

// ─── Utilitário ───────────────────────────────────────────────────────────────

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-sm">
      <span className="text-muted-foreground font-medium">{label}: </span>
      <span className="text-foreground">{value}</span>
    </div>
  );
}
