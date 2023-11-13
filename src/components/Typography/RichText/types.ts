import { TRichTextContentProps } from '@anton.bobrov/nextjs-sp-helpers';

export type TProps = TRichTextContentProps & {
  /** @default true */
  hasSpacings?: boolean;
  /** @default true */
  hasStyles?: boolean;
};
