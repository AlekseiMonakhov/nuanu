import { TDynamicImageProps } from '@/components/Media/DynamicImage/types';
import { IBaseComponent } from '@anton.bobrov/react-components';

export interface IEventsBannerAddProps {
  title: string;
  href: string;
  image?: TDynamicImageProps;
}

export interface IProps extends IBaseComponent, IEventsBannerAddProps {
  patterns: { name: string; value: string }[];
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}
