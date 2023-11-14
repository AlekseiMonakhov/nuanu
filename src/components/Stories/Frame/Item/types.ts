import { IMediaVideoOrImageProps } from '@/components/Media/VideoOrImage/types';
import { IBaseComponent } from '@anton.bobrov/react-components';

export interface IProps extends IMediaVideoOrImageProps, IBaseComponent {
  duration: number;
  isActive: boolean;
  onHidden: () => void;
}
