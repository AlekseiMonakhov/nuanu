import { ImgHTMLAttributes } from 'react';

export type TDynamicImageProps = {
  original: string;
  width: number;
  height: number;
  alt?: string;
};

type TBaseImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  | 'height'
  | 'width'
  | 'loading'
  | 'ref'
  | 'alt'
  | 'src'
  | 'srcSet'
  | 'placeholder'
>;

export type TProps = TDynamicImageProps &
  TBaseImageProps & {
    /** @default cover */
    position?: false | 'cover' | 'contain' | 'fullabs';
    priority?: boolean;
  };
