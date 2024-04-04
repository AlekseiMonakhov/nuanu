export function getTime(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    timeStyle: 'short',
    hour12: false,
  }).format(new Date(date));
}
