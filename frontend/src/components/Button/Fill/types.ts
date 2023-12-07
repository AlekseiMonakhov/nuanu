import { TButtonAnchor } from '@anton.bobrov/react-components';

export type TFillButtonProps = TButtonAnchor & {
  text: string;
  theme: 'light' | 'dark';
  isSuccess?: boolean;
};
