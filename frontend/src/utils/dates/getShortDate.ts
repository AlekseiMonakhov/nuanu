export function getShortDate(date: string) {
  const source = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date));

  const parts = source.split(' ');

  return `${parts[1].replace(',', '')} ${parts[0]} ${parts[2]}`;
}
