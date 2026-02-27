const CIELO_RETURN_CODE_REASON: Record<string, string> = {
  '05': 'Transacao nao autorizada (generica). Contate o banco emissor',
  '14': 'Numero do cartao invalido',
  '51': 'Saldo ou limite insuficiente',
  '57': 'Transacao nao permitida para o cartao',
  '61': 'Valor excedido para a operacao',
  '78': 'Cartao novo sem desbloqueio',
  '82': 'Transacao nao autorizada devido a regra do emissor',
  '83': 'Transacao suspeita de fraude pelo banco emissor',
  '91': 'Emissor fora do ar',
  '96': 'Falha de sistema/comunicacao com o emissor',
  '5C': 'Bloqueio preventivo antifraude do banco do cliente',
  AI: 'Autenticacao nao foi realizada pelo portador',
  N7: 'Violacao de seguranca (CVV invalido ou nao informado)',
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

const getObjectValue = (obj: unknown, key: string): unknown => {
  if (!isRecord(obj)) return undefined;
  return obj[key];
};

const sanitizeCode = (code: unknown): string | undefined => {
  if (code === null || code === undefined) return undefined;
  const normalized = String(code).trim().toUpperCase();
  return normalized || undefined;
};

const getPaymentSource = (registration: unknown): unknown => {
  const payments = getObjectValue(registration, 'payments');
  if (Array.isArray(payments)) {
    const creditCardPayment = payments.find((payment) => {
      const method = String(getObjectValue(payment, 'method') || '').toLowerCase();
      return method === 'credit_card';
    });
    if (creditCardPayment) {
      return getObjectValue(creditCardPayment, 'providerPayload') || creditCardPayment;
    }
  }
  return getObjectValue(registration, 'cieloResponse');
};

const getPaymentNode = (source: unknown): unknown =>
  getObjectValue(source, 'Payment') || source;

export const extractCieloReturnCode = (registration: unknown): string | undefined => {
  const source = getPaymentSource(registration);
  const paymentNode = getPaymentNode(source);
  return sanitizeCode(getObjectValue(paymentNode, 'ReturnCode'));
};

export const extractCieloReturnMessage = (registration: unknown): string | undefined => {
  const source = getPaymentSource(registration);
  const paymentNode = getPaymentNode(source);
  const rawMessage = getObjectValue(paymentNode, 'ReturnMessage');
  if (rawMessage === null || rawMessage === undefined) return undefined;
  const normalized = String(rawMessage).trim();
  return normalized || undefined;
};

export const getCieloDeniedReason = (registration: unknown): string | undefined => {
  const code = extractCieloReturnCode(registration);
  if (!code) return undefined;
  return CIELO_RETURN_CODE_REASON[code];
};

export const getCieloDeniedMessage = (registration: unknown): string | undefined => {
  const code = extractCieloReturnCode(registration);
  const mappedReason = getCieloDeniedReason(registration);
  const returnMessage = extractCieloReturnMessage(registration);

  if (mappedReason && code) {
    return `Pagamento negado. ${mappedReason} (codigo ${code}).`;
  }

  if (returnMessage && code) {
    return `Pagamento negado. ${returnMessage} (codigo ${code}).`;
  }

  if (mappedReason) {
    return `Pagamento negado. ${mappedReason}.`;
  }

  if (returnMessage) {
    return `Pagamento negado. ${returnMessage}.`;
  }

  return undefined;
};
