import {
  IImagePaths,
  IImageAdaptivePaths,
} from '@anton.bobrov/react-components';
import { HTMLAttributes } from 'react';

export interface IMediaVideoOrImageProps {
  image?: null | IImagePaths | IImageAdaptivePaths;
  video?: null | string;
}

export interface IProps
  extends IMediaVideoOrImageProps,
    HTMLAttributes<HTMLDivElement> {
  onLoad?: () => void;
  isPlaying?: boolean;
}
