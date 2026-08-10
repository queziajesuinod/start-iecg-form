import api from './apiClient';

// Situações que o backend pode derivar a partir do feedback do líder.
export type DirecStatus =
  | 'ENVIO_LIDER_PENDENTE'
  | 'ENVIO_LIDER_PENDENTE_WHATS_ERRADO'
  | 'CONTATO_LIDER_SEM_RETORNO'
  | 'EM_CONSOLIDACAO'
  | 'CONSOLIDACAO_INTERROMPIDA'
  | 'CONSOLIDADO_CELULA';

export const STATUS_OPTIONS: { value: DirecStatus; label: string }[] = [
  { value: 'ENVIO_LIDER_PENDENTE', label: 'Líder ainda não fez contato' },
  { value: 'ENVIO_LIDER_PENDENTE_WHATS_ERRADO', label: 'Número de WhatsApp inválido' },
  { value: 'CONTATO_LIDER_SEM_RETORNO', label: 'Líder enviou mensagem, sem retorno' },
  { value: 'EM_CONSOLIDACAO', label: 'Em consolidação' },
  { value: 'CONSOLIDACAO_INTERROMPIDA', label: 'Não consolidado' },
  { value: 'CONSOLIDADO_CELULA', label: 'Consolidado na célula' },
];

// Feedback cru enviado pelo líder. O backend deriva a situação — o front só coleta.
export interface FeedbackLider {
  contatoRealizado: boolean;
  numeroInvalido?: boolean;
  houveResposta?: boolean;
  foiCelula?: boolean;
  vaiContinuar?: boolean;
  vaiNaProxima?: boolean;
  conviteFeito?: boolean;
  conviteAceito?: boolean;
  observacao?: string;
}

export interface DirecPendente {
  id: string;
  nome: string;
  whatsapp: string;
  decisao: string;
  rede: string;
  idade?: number;
  campus_iecg?: string;
  bairro_apelo?: string;
  cidade_apelo?: string;
  estado_apelo?: string;
  cep_apelo?: string;
  bairro_proximo?: string[];
  dias_semana?: string[];
  direcionar_celula?: boolean;
  celula_casal?: boolean;
  conjuge_apelo_id?: string;
  observacao?: string;
  status?: string;
  motivo?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface BuscarPendentesParams {
  id?: string;
  nome?: string;
  whatsapp?: string;
}

export const buscarDirecionamentosPendentes = async (
  params: BuscarPendentesParams
): Promise<DirecPendente[]> => {
  const response = await api.get('/public/direcionamentos/pendentes', { params });
  const data = response.data;
  return Array.isArray(data) ? data : data ? [data] : [];
};

export interface AtualizarDirecionamentoPayload {
  status: DirecStatus;
  motivo?: string;
}

export const atualizarDirecionamento = async (
  id: string,
  payload: AtualizarDirecionamentoPayload
): Promise<DirecPendente> => {
  const response = await api.patch(`/public/direcionamentos/${id}/status`, payload);
  return response.data;
};
