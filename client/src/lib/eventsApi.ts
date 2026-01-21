import axios from 'axios';

// URL da API do portal-iecg
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3005';

const api = axios.create({
  baseURL: API_URL,
});

// ============= EVENTOS PÚBLICOS =============

export interface Event {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  imageUrl?: string;
  maxRegistrations?: number;
  currentRegistrations: number;
  isActive: boolean;
}

export interface EventBatch {
  id: number;
  eventId: number;
  name: string;
  price: number;
  startDate: string;
  endDate: string;
  maxQuantity?: number;
  currentQuantity: number;
  isActive: boolean;
}

export interface FormField {
  id: number;
  eventId: number;
  section: 'buyer' | 'attendee';
  fieldName: string;
  fieldType: string;
  label: string;
  placeholder?: string;
  isRequired: boolean;
  options?: string[];
  orderIndex: number;
}

export interface CouponValidation {
  valid: boolean;
  coupon?: {
    code: string;
    discountType: 'percentage' | 'fixed';
    discountValue: number;
  };
  message?: string;
}

export interface RegistrationData {
  eventId: number;
  batchId: number;
  quantity: number;
  buyerData: Record<string, any>;
  attendeesData: Record<string, any>[];
  couponCode?: string;
  paymentData: {
    cardNumber: string;
    cardHolder: string;
    expirationDate: string;
    securityCode: string;
  };
}

export interface RegistrationResponse {
  success: boolean;
  orderCode: string;
  registration: {
    id: number;
    orderCode: string;
    finalPrice: number;
    paymentStatus: string;
  };
  message: string;
}

// Listar eventos públicos ativos
export const listarEventosPublicos = async (): Promise<Event[]> => {
  const response = await api.get('/api/public/events');
  return response.data;
};

// Buscar detalhes de um evento
export const buscarEventoPublico = async (id: number): Promise<Event> => {
  const response = await api.get(`/api/public/events/${id}`);
  return response.data;
};

// Listar lotes de um evento
export const listarLotesPublicos = async (eventId: number): Promise<EventBatch[]> => {
  const response = await api.get(`/api/public/events/${eventId}/batches`);
  return response.data;
};

// Listar campos do formulário
export const listarCamposFormulario = async (eventId: number): Promise<FormField[]> => {
  const response = await api.get(`/api/public/events/${eventId}/form-fields`);
  return response.data;
};

// Validar cupom de desconto
export const validarCupom = async (
  code: string,
  eventId: number,
  batchId: number
): Promise<CouponValidation> => {
  const response = await api.post('/api/public/events/coupons/validate', {
    code,
    eventId,
    batchId,
  });
  return response.data;
};

// Verificar disponibilidade de lote
export const verificarDisponibilidade = async (
  batchId: number,
  quantity: number
): Promise<{ available: boolean; message?: string }> => {
  const response = await api.get('/api/public/events/batches/check-availability', {
    params: { batchId, quantity },
  });
  return response.data;
};

// Processar inscrição
export const processarInscricao = async (
  data: RegistrationData
): Promise<RegistrationResponse> => {
  const response = await api.post('/api/public/events/register', data);
  return response.data;
};

// Consultar inscrição por código
export const consultarInscricao = async (orderCode: string) => {
  const response = await api.get(`/api/public/events/registrations/${orderCode}`);
  return response.data;
};

export default api;
