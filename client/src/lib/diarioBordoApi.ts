const BASE = import.meta.env.VITE_API_URL ?? '';
export const JOURNAL_ID = '429af8f7-c9dd-4e74-adeb-c1af41afc81a';

export interface QuestionOption {
  id?: string;
  text: string;
  isCorrect?: boolean;
}

export interface Challenge {
  id: string;
  title: string;
  description?: string;
  points: number;
  challengeType: string;
  questionOptions?: QuestionOption[];
  userSubmission?: {
    id: string;
    responseText: string;
    status: 'pending' | 'rejected';
    feedback?: string;
  } | null;
}

export interface Resposta {
  id: string;
  challengeId: string;
  responseType: string;
  responseText: string;
  status: string;
  submittedAt: string;
  approvedAt?: string;
  pointsAwarded?: number;
  feedback?: string;
  challenge: Challenge;
}

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`);
  if (!res.ok) throw new Error(`Erro ${res.status}: ${await res.text()}`);
  return res.json();
}

async function post<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Erro ${res.status}: ${await res.text()}`);
  return res.json();
}

export function fetchRespostas(email: string): Promise<Resposta[]> {
  const q = new URLSearchParams({ email, journalId: JOURNAL_ID });
  return get(`/api/public/diario-bordo/respostas?${q}`);
}

export function fetchPendentes(email: string): Promise<Challenge[]> {
  const q = new URLSearchParams({ email, journalId: JOURNAL_ID });
  return get(`/api/public/diario-bordo/pendentes?${q}`);
}

export function submitResposta(email: string, challengeId: string, responseText: string) {
  return post('/api/public/diario-bordo/submissoes', {
    email,
    journalId: JOURNAL_ID,
    challengeId,
    responseText,
  });
}
