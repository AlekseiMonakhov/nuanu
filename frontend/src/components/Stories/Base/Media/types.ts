import { TDynamicImageProps } from '@/components/Media/DynamicImage/types';
import { IMediaVideoOrImageProps } from '@/components/Media/VideoOrImage/types';

interface ISharedProps {
  isActive: boolean;
  onProgress: (progress: number) => void;
  hasProgress: boolean;
  isProgressEnabled: boolean;
}

export interface IProps extends ISharedProps {
  index: number;
  media?: IMediaVideoOrImageProps;
  progressDuration: number;
}

export type TImageProps = TDynamicImageProps &
  ISharedProps & {
    priority: boolean;
    hasProgress: boolean;
    progressDuration: number;
  };

export type TVideoProps = ISharedProps & {
  src: string;
  isLoop: boolean;
};
