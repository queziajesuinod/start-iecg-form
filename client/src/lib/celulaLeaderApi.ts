import api from './eventsApi';

export interface LeaderSummary {
  id: string;
  name: string;
  email: string;
  telefone: string;
  username: string;
  isLeader?: boolean;
  is_lider_celula?: boolean;
  data_nascimento?: string;
  cpf?: string;
  estado_civil?: string;
  profissao?: string;
  batizado?: boolean;
  encontro?: boolean;
  escolas?: string[];
  endereco?: string;
  numero?: string;
  bairro?: string;
  cep?: string;
  escolaridade?: string;
  foto?: string;
  image?: string;
  spouse?: LeaderSummary;
  conjuge?: LeaderSummary;
  partner?: LeaderSummary;
  spouseId?: string;
  spouse_id?: string;
  partnerId?: string;
  partner_id?: string;
  conjugeId?: string;
  conjuge_id?: string;
}

export interface LeaderCelulaRecord {
  id: string;
  celula?: string;
  lider?: string;
  email_lider?: string;
  cel_lider?: string;
  leaderUser?: LeaderSummary;
  ativo?: boolean;
}

export interface LeaderContactResponse {
  leader?: LeaderSummary | null;
  celulas?: LeaderCelulaRecord[];
}

export interface LeaderContactParams {
  email?: string;
  telefone?: string;
}

export const buscarLeaderPorContato = async (params: LeaderContactParams) => {
  const response = await api.get<LeaderContactResponse>('/public/celulas/leader/contact', {
    params,
  });
  return response.data;
};

export interface UpsertLeaderPayload {
  celulaId?: string;
  lider?: string;
  email_lider?: string;
  cel_lider?: string;
  perfilId?: string;
  data_nascimento?: string;
  cpf?: string;
  estado_civil?: string;
  profissao?: string;
  batizado?: boolean;
  encontro?: boolean;
  escolas?: string[];
  endereco?: string;
  numero?: string;
  bairro?: string;
  cep?: string;
  escolaridade?: string;
  image?: string;
}

export interface UpsertLeaderResponse {
  leader: LeaderSummary;
  celula?: LeaderCelulaRecord;
}

export const upsertLeaderForCelula = async (payload: UpsertLeaderPayload) => {
  const response = await api.post<UpsertLeaderResponse>('/public/celulas/leader', payload);
  return response.data;
};

export interface LinkSpousePayload {
  leaderId: string;
  email?: string;
  telefone?: string;
}

export interface LinkSpouseResponse {
  leader: LeaderSummary;
  spouse?: LeaderSummary;
}

export const linkLeaderSpouse = async (payload: LinkSpousePayload) => {
  const response = await api.post<LinkSpouseResponse>('/public/celulas/leader/spouse', payload);
  return response.data;
};

export const buscarUsuarioPorId = async (id: string) => {
  const response = await api.get<LeaderSummary>(`/public/users/${id}`);
  return response.data;
};
