import { TButtonAnchor } from '@anton.bobrov/react-components';

export type TCtaButtonProps = TButtonAnchor & {
  theme: 'dark' | 'light';
  text: string;
  sup?: string | null;
  kind?: 'simple' | 'play';
};
