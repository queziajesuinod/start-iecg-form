import type { EventBatch } from './eventsApi';

const parseDate = (value: string) => {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
};

export const isBatchActiveNow = (batch: EventBatch, referenceDate = new Date()) => {
  if (!batch.isActive) return false;

  const startDate = parseDate(batch.startDate);
  const endDate = parseDate(batch.endDate);
  if (!startDate || !endDate) return false;

  const withinWindow = referenceDate >= startDate && referenceDate <= endDate;
  if (!withinWindow) return false;

  const seatsAvailable =
    typeof batch.vagasDisponiveis === 'number'
      ? batch.vagasDisponiveis
      : typeof batch.maxQuantity === 'number'
      ? Math.max(0, Number(batch.maxQuantity) - Number(batch.currentQuantity))
      : null;

  return seatsAvailable === null || seatsAvailable > 0;
};

export const hasActiveBatchNow = (batches: EventBatch[], referenceDate = new Date()) =>
  batches.some((batch) => isBatchActiveNow(batch, referenceDate));
