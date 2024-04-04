export function getIsoDateWithoutTimezone(date: Date) {
  return date.toISOString().split('.')[0];
}
