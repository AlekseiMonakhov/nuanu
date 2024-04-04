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
  | 'sizes'
  | 'placeholder'
>;

export type TProps = TDynamicImageProps &
  TBaseImageProps & {
    /** @default cover */
    position?: false | 'cover' | 'contain' | 'fullabs';
    priority?: boolean;
    /** @default '100vw' */
    sizes?: ('none' | '100vw') | (string & {});
  };
