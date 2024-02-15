import { TButtonAnchor } from '@anton.bobrov/react-components';

export type TFillButtonProps = TButtonAnchor & {
  text: string;
  theme: 'light' | 'dark' | 'blue';
  size: 50 | 60 | 80;
  sup?: string | null;
};
