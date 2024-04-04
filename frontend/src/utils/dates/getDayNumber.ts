export function getDayNumber(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
  }).format(new Date(date));
}
