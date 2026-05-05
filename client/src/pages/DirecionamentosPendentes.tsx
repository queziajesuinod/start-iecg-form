import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Loader2, RotateCcw, CheckCircle2, AlertCircle } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import type { DirecPendente, DirecStatus } from '@/lib/direcionamentosApi';

// ─── Estilos de badge por status ──────────────────────────────────────────────

const STATUS_BADGE: Record<string, { bg: string; label: string }> = {
  CONTATO_LIDER_SEM_RETORNO: { bg: 'bg-yellow-100 text-yellow-800 border-yellow-300', label: 'Sem retorno' },
  EM_CONSOLIDACAO:           { bg: 'bg-blue-100 text-blue-800 border-blue-300',       label: 'Em consolidação' },
  CONSOLIDACAO_INTERROMPIDA: { bg: 'bg-red-100 text-red-800 border-red-300',          label: 'Não consolidado' },
  CONSOLIDADO_CELULA:        { bg: 'bg-green-100 text-green-800 border-green-300',    label: 'Consolidado na célula' },
};

const statusBadge = (status?: string) =>
  STATUS_BADGE[status ?? ''] ?? { bg: 'bg-slate-100 text-slate-600 border-slate-300', label: 'Pendente' };

// ─── Tipos do wizard ──────────────────────────────────────────────────────────

type WizardStep =
  | 'q_retorno'           // primeiro contato: a pessoa retornou o contato?
  | 'q_insistiu'          // não retornou: o líder já tentou mais de uma vez?
  | 'q_ignorou'           // retornou mas depois ignorou?
  | 'q_manteve_contato'   // em consolidação: manteve o contato?
  | 'q_convite_celula'    // fez o convite para a célula?
  | 'q_aceitou_convite'   // aceitou ou deu negativa ao convite?
  | 'q_foi_celula'        // já foi à célula?
  | 'q_vai_ficar'         // decidiu continuar na célula?
  | 'confirmar';

type WizardState = {
  step: WizardStep;
  history: WizardStep[];
  resolvedStatus: DirecStatus | null;
  motivo: string;
  saving: boolean;
};

const makeInitialWizard = (status?: string): WizardState => ({
  step: status === 'EM_CONSOLIDACAO' ? 'q_manteve_contato' : 'q_retorno',
  history: [],
  resolvedStatus: null,
  motivo: '',
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

  const atualizarStatus = trpc.direcionamentos.atualizarStatus.useMutation();

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
    data.forEach(item => { initial[item.id] = makeInitialWizard(item.status); });
    setWizards(initial);
  }, [busca.data]);

  useEffect(() => {
    if (busca.error) setErro(busca.error.message || 'Erro ao carregar os dados.');
  }, [busca.error]);

  const loading = busca.isFetching;

  // ── Wizard helpers ──

  const getWizard = (item: DirecPendente): WizardState =>
    wizards[item.id] ?? makeInitialWizard(item.status);

  const setWizard = (id: string, patch: Partial<WizardState>) =>
    setWizards(prev => ({ ...prev, [id]: { ...prev[id], ...patch } }));

  const goTo = (id: string, currentStep: WizardStep, nextStep: WizardStep, extras: Partial<WizardState> = {}) =>
    setWizards(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        step: nextStep,
        history: [...(prev[id]?.history ?? []), currentStep],
        ...extras,
      },
    }));

  const resolve = (id: string, currentStep: WizardStep, status: DirecStatus, motivo: string) =>
    goTo(id, currentStep, 'confirmar', { resolvedStatus: status, motivo });

  const goBack = (item: DirecPendente) => {
    setWizards(prev => {
      const wiz = prev[item.id];
      if (!wiz || wiz.history.length === 0) return { ...prev, [item.id]: makeInitialWizard(item.status) };
      const history = [...wiz.history];
      const step = history.pop()!;
      return { ...prev, [item.id]: { ...wiz, step, history, resolvedStatus: null, motivo: '' } };
    });
  };

  // ── Handlers de cada pergunta ──

  // Cenário 2/3: primeiro contato — a pessoa retornou?
  const handleRetorno = (item: DirecPendente, retornou: boolean) => {
    if (!retornou) {
      // Não respondeu — verificar se já insistiu mais de uma vez
      goTo(item.id, 'q_retorno', 'q_insistiu');
    } else {
      // Retornou — verificar se manteve o contato ou passou a ignorar
      goTo(item.id, 'q_retorno', 'q_ignorou');
    }
  };

  // Não retornou: o líder já tentou mais de uma vez?
  const handleInsistiu = (item: DirecPendente, insistiu: boolean) => {
    if (insistiu) {
      resolve(item.id, 'q_insistiu', 'CONSOLIDACAO_INTERROMPIDA', 'Tentou contato mais de uma vez sem retorno');
    } else {
      resolve(item.id, 'q_insistiu', 'CONTATO_LIDER_SEM_RETORNO', 'Líder enviou mensagem, sem retorno do apelo');
    }
  };

  // Retornou mas depois passou a ignorar?
  const handleIgnorou = (item: DirecPendente, ignorou: boolean) => {
    if (ignorou) {
      resolve(item.id, 'q_ignorou', 'CONSOLIDACAO_INTERROMPIDA', 'Respondeu inicialmente mas passou a ignorar o contato');
    } else {
      goTo(item.id, 'q_ignorou', 'q_convite_celula');
    }
  };

  // Cenário 1: em consolidação — manteve o contato?
  const handleManteveCont = (item: DirecPendente, manteve: boolean) => {
    if (!manteve) {
      resolve(item.id, 'q_manteve_contato', 'CONTATO_LIDER_SEM_RETORNO', 'Perdeu o contato após o início da consolidação');
    } else {
      goTo(item.id, 'q_manteve_contato', 'q_foi_celula');
    }
  };

  // Cenário 2: fez o convite para a célula?
  const handleConviteCelula = (item: DirecPendente, fez: boolean) => {
    if (!fez) {
      // Teve contato mas ainda não convidou
      resolve(item.id, 'q_convite_celula', 'EM_CONSOLIDACAO', 'Teve contato inicial, convite para a célula pendente');
    } else {
      goTo(item.id, 'q_convite_celula', 'q_aceitou_convite');
    }
  };

  // Cenário 4: aceitou o convite ou deu negativa?
  const handleAceitouConvite = (item: DirecPendente, aceitou: boolean) => {
    if (!aceitou) {
      // Cenário 4: não foi e deu negativa
      resolve(item.id, 'q_aceitou_convite', 'CONSOLIDACAO_INTERROMPIDA', 'Recusou o convite para a célula');
    } else {
      goTo(item.id, 'q_aceitou_convite', 'q_foi_celula');
    }
  };

  // Já foi à célula?
  const handleFoiCelula = (item: DirecPendente, foi: boolean) => {
    if (!foi) {
      resolve(item.id, 'q_foi_celula', 'EM_CONSOLIDACAO', 'Aceitou o convite, aguardando a primeira ida à célula');
    } else {
      goTo(item.id, 'q_foi_celula', 'q_vai_ficar');
    }
  };

  // Vai continuar/ficar na célula?
  const handleVaiFicar = (item: DirecPendente, vai: boolean) => {
    if (vai) {
      resolve(item.id, 'q_vai_ficar', 'CONSOLIDADO_CELULA', 'Foi à célula e decidiu continuar');
    } else {
      resolve(item.id, 'q_vai_ficar', 'CONSOLIDACAO_INTERROMPIDA', 'Foi à célula mas não quer continuar');
    }
  };

  // ── Salvar ──

  const handleSalvar = async (item: DirecPendente) => {
    const wiz = getWizard(item);
    if (!wiz.resolvedStatus) return;

    setWizard(item.id, { saving: true });
    try {
      const updated = await atualizarStatus.mutateAsync({
        id: item.id,
        status: wiz.resolvedStatus,
        motivo: wiz.motivo.trim() || undefined,
      });
      const novoStatus = (updated as any)?.status ?? wiz.resolvedStatus;
      const novoMotivo = (updated as any)?.motivo ?? wiz.motivo;
      setResultados(prev =>
        prev.map(r => r.id === item.id ? { ...r, status: novoStatus, motivo: novoMotivo } : r)
      );
      setWizards(prev => ({ ...prev, [item.id]: makeInitialWizard(novoStatus) }));
      toast.success('Acompanhamento atualizado com sucesso!');
    } catch (err: any) {
      toast.error(err?.message || 'Erro ao atualizar.');
      setWizard(item.id, { saving: false });
    }
  };

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="container py-10">
        <div className="max-w-2xl mx-auto space-y-6">

          <header className="text-center space-y-2">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold">START IECG</p>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Acompanhamento de Apelos</h1>
          </header>

          {loading && (
            <div className="flex justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
            </div>
          )}

          {!loading && erro && (
            <Card className="p-6 text-center space-y-2 bg-white border-red-200">
              <AlertCircle className="mx-auto h-8 w-8 text-red-400" />
              <p className="text-slate-700 font-medium">{erro}</p>
              <p className="text-sm text-slate-500">Verifique o link recebido e tente novamente.</p>
            </Card>
          )}

          {!loading && !erro && resultados.length === 0 && (
            <Card className="p-6 text-center text-slate-500 bg-white">
              Nenhum apelo pendente encontrado para o seu contato.
            </Card>
          )}

          {!loading && resultados.map(item => {
            const badge = statusBadge(item.status);
            const wiz   = getWizard(item);

            return (
              <Card key={item.id} className="shadow-md border border-slate-200 bg-white overflow-hidden">

                <div className="px-6 py-5 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-lg font-bold text-slate-900">{item.nome}</p>
                      <p className="text-sm text-slate-500">{formatPhone(item.whatsapp)}</p>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border shrink-0 ${badge.bg}`}>
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
                  <p className="text-xs text-slate-400">Cadastrado em {formatDate(item.createdAt)}</p>
                </div>

                <div className="border-t border-slate-100 px-6 py-5">
                  <WizardAcompanhamento
                    wiz={wiz}
                    isEmConsolidacao={item.status === 'EM_CONSOLIDACAO'}
                    onManteveCont={sim => handleManteveCont(item, sim)}
                    onRetorno={sim => handleRetorno(item, sim)}
                    onInsistiu={insistiu => handleInsistiu(item, insistiu)}
                    onIgnorou={ignorou => handleIgnorou(item, ignorou)}
                    onConviteCelula={fez => handleConviteCelula(item, fez)}
                    onAceitouConvite={aceitou => handleAceitouConvite(item, aceitou)}
                    onFoiCelula={foi => handleFoiCelula(item, foi)}
                    onVaiFicar={vai => handleVaiFicar(item, vai)}
                    onMotivoChange={motivo => setWizard(item.id, { motivo })}
                    onSalvar={() => handleSalvar(item)}
                    onBack={() => goBack(item)}
                    onReset={() => setWizards(prev => ({ ...prev, [item.id]: makeInitialWizard(item.status) }))}
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
  onManteveCont: (sim: boolean) => void;
  onRetorno: (sim: boolean) => void;
  onInsistiu: (insistiu: boolean) => void;
  onIgnorou: (ignorou: boolean) => void;
  onConviteCelula: (fez: boolean) => void;
  onAceitouConvite: (aceitou: boolean) => void;
  onFoiCelula: (foi: boolean) => void;
  onVaiFicar: (vai: boolean) => void;
  onMotivoChange: (v: string) => void;
  onSalvar: () => void;
  onBack: () => void;
  onReset: () => void;
}

function WizardAcompanhamento({
  wiz, isEmConsolidacao,
  onManteveCont, onRetorno, onInsistiu, onIgnorou, onConviteCelula, onAceitouConvite,
  onFoiCelula, onVaiFicar, onMotivoChange, onSalvar, onBack, onReset,
}: WizardProps) {
  const podeVoltar = wiz.history.length > 0;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-700">Atualizar acompanhamento</p>
        {podeVoltar && wiz.step !== 'confirmar' && (
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 transition-colors"
          >
            <RotateCcw className="h-3 w-3" /> Voltar
          </button>
        )}
        {wiz.step === 'confirmar' && (
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 transition-colors"
          >
            <RotateCcw className="h-3 w-3" /> Voltar
          </button>
        )}
      </div>

      {/* Cenário 1 — Em consolidação: manteve o contato? */}
      {wiz.step === 'q_manteve_contato' && (
        <Pergunta
          texto="Manteve o contato desde o último registro?"
          descricao="Essa pessoa já estava em acompanhamento — houve alguma conversa desde então?"
          onSim={() => onManteveCont(true)}
          onNao={() => onManteveCont(false)}
          labelNao="Perdeu o contato"
        />
      )}

      {/* Cenário 2/3 — Primeiro contato: a pessoa retornou? */}
      {wiz.step === 'q_retorno' && (
        <Pergunta
          texto="A pessoa retornou o contato?"
          descricao="O líder fez contato — a pessoa respondeu ou está em conversa?"
          onSim={() => onRetorno(true)}
          onNao={() => onRetorno(false)}
          labelNao="Não respondeu"
        />
      )}

      {/* Não retornou: líder já insistiu mais de uma vez? */}
      {wiz.step === 'q_insistiu' && (
        <Pergunta
          texto="O líder já tentou contato mais de uma vez?"
          descricao="Após não obter resposta, o líder voltou a tentar entrar em contato?"
          onSim={() => onInsistiu(true)}
          onNao={() => onInsistiu(false)}
          labelSim="Sim, já insistiu"
          labelNao="Não, foi o primeiro contato"
        />
      )}

      {/* Retornou mas depois ignorou? */}
      {wiz.step === 'q_ignorou' && (
        <Pergunta
          texto="A pessoa continua respondendo?"
          descricao="Após o contato inicial, ela manteve a conversa ou passou a ignorar as mensagens?"
          onSim={() => onIgnorou(false)}
          onNao={() => onIgnorou(true)}
          labelSim="Continua respondendo"
          labelNao="Passou a ignorar"
        />
      )}

      {/* Fez o convite para a célula? */}
      {wiz.step === 'q_convite_celula' && (
        <Pergunta
          texto="Já fez o convite para a célula?"
          descricao="Além do contato inicial, a pessoa já foi convidada a participar de uma célula?"
          onSim={() => onConviteCelula(true)}
          onNao={() => onConviteCelula(false)}
          labelNao="Ainda não convidou"
        />
      )}

      {/* Aceitou o convite ou deu negativa? */}
      {wiz.step === 'q_aceitou_convite' && (
        <Pergunta
          texto="Como a pessoa respondeu ao convite?"
          descricao="Ela demonstrou interesse em ir à célula ou recusou o convite?"
          onSim={() => onAceitouConvite(true)}
          onNao={() => onAceitouConvite(false)}
          labelSim="Aceitou o convite"
          labelNao="Deu negativa"
        />
      )}

      {/* Já foi à célula? */}
      {wiz.step === 'q_foi_celula' && (
        <Pergunta
          texto="A pessoa já foi à célula?"
          descricao={isEmConsolidacao
            ? 'Desde o início do acompanhamento, ela chegou a ir à célula?'
            : 'Ela aceitou o convite — já foi à célula alguma vez?'}
          onSim={() => onFoiCelula(true)}
          onNao={() => onFoiCelula(false)}
          labelNao="Ainda não foi"
        />
      )}

      {/* Vai continuar/ficar na célula? */}
      {wiz.step === 'q_vai_ficar' && (
        <Pergunta
          texto="A pessoa decidiu continuar na célula?"
          descricao="Depois de ir à célula, ela demonstrou interesse em permanecer e participar regularmente?"
          onSim={() => onVaiFicar(true)}
          onNao={() => onVaiFicar(false)}
          labelSim="Sim, quer ficar"
          labelNao="Não quer continuar"
        />
      )}

      {wiz.step === 'confirmar' && wiz.resolvedStatus && (
        <ConfirmarStep
          resolvedStatus={wiz.resolvedStatus}
          motivo={wiz.motivo}
          saving={wiz.saving}
          onMotivoChange={onMotivoChange}
          onSalvar={onSalvar}
        />
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
    <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 space-y-3">
      <p className="font-medium text-slate-800">{texto}</p>
      {descricao && <p className="text-sm text-slate-500">{descricao}</p>}
      <div className="flex gap-3">
        <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white" onClick={onSim}>
          {labelSim}
        </Button>
        <Button variant="outline" className="flex-1 border-red-300 text-red-700 hover:bg-red-50" onClick={onNao}>
          {labelNao}
        </Button>
      </div>
    </div>
  );
}

// ─── Confirmação ──────────────────────────────────────────────────────────────

const STATUS_CONFIRM: Record<DirecStatus, { icon: string; cor: string; titulo: string }> = {
  CONTATO_LIDER_SEM_RETORNO: { icon: '📵', cor: 'border-yellow-300 bg-yellow-50',  titulo: 'Líder enviou mensagem, sem retorno' },
  EM_CONSOLIDACAO:           { icon: '🔄', cor: 'border-blue-300 bg-blue-50',      titulo: 'Em consolidação' },
  CONSOLIDACAO_INTERROMPIDA: { icon: '⛔', cor: 'border-red-300 bg-red-50',        titulo: 'Não consolidado' },
  CONSOLIDADO_CELULA:        { icon: '✅', cor: 'border-green-300 bg-green-50',    titulo: 'Consolidado na célula' },
};

function ConfirmarStep({
  resolvedStatus, motivo, saving, onMotivoChange, onSalvar,
}: {
  resolvedStatus: DirecStatus;
  motivo: string;
  saving: boolean;
  onMotivoChange: (v: string) => void;
  onSalvar: () => void;
}) {
  const info = STATUS_CONFIRM[resolvedStatus];
  return (
    <div className={`rounded-xl border px-5 py-4 space-y-4 ${info.cor}`}>
      <div className="flex items-center gap-2">
        <span className="text-xl">{info.icon}</span>
        <div>
          <p className="font-semibold text-slate-800">{info.titulo}</p>
          <p className="text-xs text-slate-500">Status que será salvo</p>
        </div>
      </div>

      <div className="space-y-1">
        <Label className="text-slate-700">Observação</Label>
        <Textarea
          rows={3}
          placeholder="Descreva a situação com mais detalhes..."
          value={motivo}
          onChange={e => onMotivoChange(e.target.value)}
          className="bg-white"
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
      <span className="text-slate-500 font-medium">{label}: </span>
      <span className="text-slate-700">{value}</span>
    </div>
  );
}
