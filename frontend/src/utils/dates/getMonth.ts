export function getMonth(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
  }).format(new Date(date));
}
