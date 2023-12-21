import { TButtonAnchor } from '@anton.bobrov/react-components';

export type TArrowButtonProps = TButtonAnchor & {
  text: string;
  theme: 'light' | 'dark' | 'blue';
  size: 60 | 120;
};
