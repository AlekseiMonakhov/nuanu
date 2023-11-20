import { TButtonAnchor } from '@anton.bobrov/react-components';

export type TButtonSimpleProps = TButtonAnchor & {
  kind: 'outline' | 'fill';
  theme: 'light' | 'dark';
  text: string;
};
