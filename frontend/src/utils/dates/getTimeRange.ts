import { getTime } from './getTime';

export function getTimeRange(startDate: string, endDate?: string) {
  if (!endDate) {
    return getTime(startDate);
  }

  const start = getTime(startDate);
  const end = getTime(endDate);

  return `${start} – ${end}`;
}
