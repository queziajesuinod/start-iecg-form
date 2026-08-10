import api from './apiClient';

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
  nome_esposo?: string;
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
  // Cadeia de cobertura (Liderança Apostólica → Pastor de Geração → Pastor de Campus)
  liderancaApostolicaMemberId?: string | null;
  liderancaApostolica?: MemberRef | null;
  pastorGeracaoMemberId?: string | null;
  pastorGeracao?: MemberRef | null;
  pastorCampusMemberId?: string | null;
  pastorCampus?: MemberRef | null;
}

export interface MemberRef {
  id: string;
  fullName: string;
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
  nome_esposo?: string;
  image?: string;
  // Cadeia de cobertura gravada no cadastro do membro (fonte da verdade;
  // cascateia para as células onde ele é líder).
  liderancaApostolicaMemberId?: string;
  pastorGeracaoMemberId?: string;
  pastorCampusMemberId?: string;
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

export const unlinkLeaderSpouse = async (leaderId: string) => {
  const response = await api.delete('/public/celulas/leader/spouse', {
    data: { leaderId },
  });
  return response.data;
};

export const searchPublicUser = async (params: { email?: string; telefone?: string }) => {
  const response = await api.get<LeaderSummary | null>('/public/users', { params });
  return response.data;
};

export const buscarUsuarioPorId = async (id: string) => {
  const response = await api.get<LeaderSummary>(`/public/users/${id}`);
  return response.data;
};
