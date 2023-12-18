import { TButtonAnchor } from '@anton.bobrov/react-components';

export type TBuyButtonProps = TButtonAnchor & {
  text: string;
  price?: string | null;
  /** @default true */
  hasOverlayHover?: boolean;
  /** @default 'buy' */
  overlayHoverText?: string;
  isHovered?: boolean;
};
