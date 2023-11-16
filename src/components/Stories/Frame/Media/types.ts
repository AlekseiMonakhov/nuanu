import { IMediaVideoOrImageProps } from '@/components/Media/VideoOrImage/types';

export interface IProps extends IMediaVideoOrImageProps {
  duration: number;
  isActive: boolean;
  index: number;
  onHidden: () => void;
}
