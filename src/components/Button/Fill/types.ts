import { TButtonAnchor } from '@anton.bobrov/react-components';

export type TFillButtonProps = TButtonAnchor & {
  text: string;
  theme: 'light' | 'dark';
  size?: 'medium' | 'large';
  hasArrow?: boolean;
  isSuccess?: boolean;
};
