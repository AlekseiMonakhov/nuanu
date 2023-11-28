import { HTMLAttributes } from 'react';
import { TDynamicImageProps } from '../DynamicImage/types';

export interface IMediaVideoOrImageProps {
  image?: null | TDynamicImageProps;
  video?: null | string;
}

export interface IProps
  extends IMediaVideoOrImageProps,
    HTMLAttributes<HTMLDivElement> {
  onLoad?: () => void;
  isPlaying?: boolean;
  placeholderTheme?: 'light' | 'dark';
  position?: 'cover' | 'contain';
}
