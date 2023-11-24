import { IMediaVideoOrImageProps } from '@/components/Media/VideoOrImage/types';

export interface IProps {
  duration: number;
  isActive: boolean;
  index: number;
  media?: IMediaVideoOrImageProps;
}
