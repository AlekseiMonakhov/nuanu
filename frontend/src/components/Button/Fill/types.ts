import { TButtonAnchor } from '@anton.bobrov/react-components';
import { ReactNode } from 'react';

export type TFillButtonProps = TButtonAnchor & {
  text: string;
  theme: 'light' | 'dark' | 'blue' | 'light_outline' | 'white';
  size: 50 | 60 | 80;
  sup?: string | null;
  children?: ReactNode;
};
