import { IImagePaths } from '@anton.bobrov/react-components';
import { IImageAdaptivePaths } from '@anton.bobrov/vevet-init';
import { HTMLAttributes } from 'react';

export interface IMediaVideoOrImageProps {
  image?: null | IImagePaths | IImageAdaptivePaths;
  video?: null | string;
}

export interface IProps
  extends IMediaVideoOrImageProps,
    HTMLAttributes<HTMLDivElement> {
  onLoad?: () => void;
}
