import api from './eventsApi';

export type DirecStatus =
  | 'CONTATO_LIDER_SEM_RETORNO'
  | 'EM_CONSOLIDACAO'
  | 'CONSOLIDACAO_INTERROMPIDA'
  | 'CONSOLIDADO_CELULA';

export const STATUS_OPTIONS: { value: DirecStatus; label: string }[] = [
  { value: 'CONTATO_LIDER_SEM_RETORNO', label: 'Líder enviou mensagem, sem retorno' },
  { value: 'EM_CONSOLIDACAO', label: 'Em consolidação' },
  { value: 'CONSOLIDACAO_INTERROMPIDA', label: 'Não consolidado' },
  { value: 'CONSOLIDADO_CELULA', label: 'Consolidado na célula' },
];

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
