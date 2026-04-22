import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Loader2, RotateCcw, CheckCircle2, AlertCircle } from 'lucide-react';
import {
  type DirecPendente,
  type DirecStatus,
  buscarDirecionamentosPendentes,
  atualizarDirecionamento,
} from '@/lib/direcionamentosApi';

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

type WizardStep = 'q_retorno' | 'q_feedback' | 'q_foi_celula' | 'confirmar';

type WizardState = {
  step: WizardStep;
  resolvedStatus: DirecStatus | null;
  motivo: string;
  saving: boolean;
};

const makeInitialWizard = (status?: string): WizardState => ({
  step: status === 'EM_CONSOLIDACAO' ? 'q_feedback' : 'q_retorno',
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
  const [loading, setLoading]     = useState(true);
  const [erro, setErro]           = useState<string | null>(null);
  const [resultados, setResultados] = useState<DirecPendente[]>([]);
  const [wizards, setWizards]     = useState<Record<string, WizardState>>({});

  // ── Lê params da URL e busca ao montar ──

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id       = params.get('id')?.trim();
    const nome     = params.get('nome')?.trim();
    const whatsapp = params.get('whatsapp')?.replace(/\D/g, '').trim();

    if (!id && !nome && !whatsapp) {
      setErro('Link inválido. Nenhum filtro de identificação foi fornecido.');
      setLoading(false);
      return;
    }

    buscarDirecionamentosPendentes({
      id: id || undefined,
      nome: nome || undefined,
      whatsapp: whatsapp || undefined,
    })
      .then(data => {
        setResultados(data);
        const initial: Record<string, WizardState> = {};
        data.forEach(item => { initial[item.id] = makeInitialWizard(item.status); });
        setWizards(initial);
      })
      .catch(err => {
        setErro(err?.response?.data?.message || err?.message || 'Erro ao carregar os dados.');
      })
      .finally(() => setLoading(false));
  }, []);

  // ── Wizard helpers ──

  const getWizard = (item: DirecPendente): WizardState =>
    wizards[item.id] ?? makeInitialWizard(item.status);

  const setWizard = (id: string, patch: Partial<WizardState>) =>
    setWizards(prev => ({ ...prev, [id]: { ...prev[id], ...patch } }));

  const resetWizard = (item: DirecPendente) =>
    setWizards(prev => ({ ...prev, [item.id]: makeInitialWizard(item.status) }));

  // ── Navegação do wizard ──

  const handleRetorno = (item: DirecPendente, tevRetorno: boolean) => {
    if (!tevRetorno) {
      setWizard(item.id, { step: 'confirmar', resolvedStatus: 'CONTATO_LIDER_SEM_RETORNO', motivo: '' });
    } else {
      setWizard(item.id, { step: 'q_foi_celula' });
    }
  };

  const handleFeedback = (item: DirecPendente, tevFeedback: boolean) => {
    if (!tevFeedback) {
      setWizard(item.id, {
        step: 'confirmar',
        resolvedStatus: 'CONSOLIDACAO_INTERROMPIDA',
        motivo: 'Não consolidado, não teve engajamento',
      });
    } else {
      setWizard(item.id, { step: 'q_foi_celula' });
    }
  };

  const handleFoiCelula = (item: DirecPendente, foi: boolean) => {
    setWizard(item.id, {
      step: 'confirmar',
      resolvedStatus: foi ? 'CONSOLIDADO_CELULA' : 'EM_CONSOLIDACAO',
      motivo: foi ? 'Foi na célula' : 'Ainda não foi à célula',
    });
  };

  // ── Salvar ──

  const handleSalvar = async (item: DirecPendente) => {
    const wiz = getWizard(item);
    if (!wiz.resolvedStatus) return;

    setWizard(item.id, { saving: true });
    try {
      const updated = await atualizarDirecionamento(item.id, {
        status: wiz.resolvedStatus,
        motivo: wiz.motivo.trim() || undefined,
      });
      setResultados(prev =>
        prev.map(r => r.id === item.id ? { ...r, status: updated.status, motivo: updated.motivo } : r)
      );
      setWizards(prev => ({ ...prev, [item.id]: makeInitialWizard(updated.status) }));
      toast.success('Acompanhamento atualizado com sucesso!');
    } catch (err: any) {
      toast.error(err?.response?.data?.message || err?.message || 'Erro ao atualizar.');
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

          {/* Carregando */}
          {loading && (
            <div className="flex justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
            </div>
          )}

          {/* Erro / link inválido */}
          {!loading && erro && (
            <Card className="p-6 text-center space-y-2 bg-white border-red-200">
              <AlertCircle className="mx-auto h-8 w-8 text-red-400" />
              <p className="text-slate-700 font-medium">{erro}</p>
              <p className="text-sm text-slate-500">Verifique o link recebido e tente novamente.</p>
            </Card>
          )}

          {/* Sem direcionamentos */}
          {!loading && !erro && resultados.length === 0 && (
            <Card className="p-6 text-center text-slate-500 bg-white">
              Nenhum apelo pendente encontrado para o seu contato.
            </Card>
          )}

          {/* Cards dos direcionamentos */}
          {!loading && resultados.map(item => {
            const badge = statusBadge(item.status);
            const wiz   = getWizard(item);

            return (
              <Card key={item.id} className="shadow-md border border-slate-200 bg-white overflow-hidden">

                {/* Cabeçalho do apelo */}
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

                {/* Wizard */}
                <div className="border-t border-slate-100 px-6 py-5">
                  <WizardAcompanhamento
                    item={item}
                    wiz={wiz}
                    onRetorno={sim => handleRetorno(item, sim)}
                    onFeedback={sim => handleFeedback(item, sim)}
                    onFoiCelula={foi => handleFoiCelula(item, foi)}
                    onMotivoChange={motivo => setWizard(item.id, { motivo })}
                    onSalvar={() => handleSalvar(item)}
                    onReset={() => resetWizard(item)}
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
  item: DirecPendente;
  wiz: WizardState;
  onRetorno: (sim: boolean) => void;
  onFeedback: (sim: boolean) => void;
  onFoiCelula: (foi: boolean) => void;
  onMotivoChange: (v: string) => void;
  onSalvar: () => void;
  onReset: () => void;
}

function WizardAcompanhamento({ item, wiz, onRetorno, onFeedback, onFoiCelula, onMotivoChange, onSalvar, onReset }: WizardProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-700">Atualizar acompanhamento</p>
        {wiz.step === 'confirmar' && (
          <button
            onClick={onReset}
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 transition-colors"
          >
            <RotateCcw className="h-3 w-3" /> Voltar
          </button>
        )}
      </div>

      {wiz.step === 'q_retorno' && (
        <Pergunta
          texto="A pessoa retornou o contato?"
          onSim={() => onRetorno(true)}
          onNao={() => onRetorno(false)}
          labelNao="Não respondeu"
        />
      )}

      {wiz.step === 'q_feedback' && (
        <Pergunta
          texto="Houve algum retorno desde o último contato?"
          descricao="Esse apelo já estava em acompanhamento — conseguiu avançar com essa pessoa?"
          onSim={() => onFeedback(true)}
          onNao={() => onFeedback(false)}
          labelNao="Não houve retorno"
        />
      )}

      {wiz.step === 'q_foi_celula' && (
        <Pergunta
          texto="A pessoa já foi à célula?"
          onSim={() => onFoiCelula(true)}
          onNao={() => onFoiCelula(false)}
          labelNao="Ainda não foi"
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

// ─── Pergunta SIM / NÃO ───────────────────────────────────────────────────────

function Pergunta({
  texto, descricao, onSim, onNao, labelNao = 'Não',
}: {
  texto: string; descricao?: string;
  onSim: () => void; onNao: () => void; labelNao?: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 space-y-3">
      <p className="font-medium text-slate-800">{texto}</p>
      {descricao && <p className="text-sm text-slate-500">{descricao}</p>}
      <div className="flex gap-3">
        <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white" onClick={onSim}>
          Sim
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
  resolvedStatus: DirecStatus; motivo: string; saving: boolean;
  onMotivoChange: (v: string) => void; onSalvar: () => void;
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
        <Label className="text-slate-700">Observação (opcional)</Label>
        <Textarea
          rows={3}
          placeholder="Descreva a situação..."
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
