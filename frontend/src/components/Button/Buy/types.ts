import { TButtonAnchor } from '@anton.bobrov/react-components';

export type TBuyButtonProps = TButtonAnchor & {
  text: string;
  hoverText: string;
  price?: string | null;
  isHovered?: boolean;
};
