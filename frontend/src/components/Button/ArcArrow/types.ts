import { TButtonAnchor } from '@anton.bobrov/react-components';

export type TArcArrowButtonArrowPosition = 'bl' | 'br' | 'tl' | 'tr';

export type TArcArrowButtonProps = TButtonAnchor & {
  text: string;
  count: number;
  arrowPosition: TArcArrowButtonArrowPosition;
  isActive?: boolean;
};
