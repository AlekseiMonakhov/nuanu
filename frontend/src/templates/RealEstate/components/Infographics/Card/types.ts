export interface ICardProps {
  value: string;
  label: string;
}

export interface InfographicsProps {
  title: string;
  subtitle: string;
  cards: { value: string; label: string }[];
}
