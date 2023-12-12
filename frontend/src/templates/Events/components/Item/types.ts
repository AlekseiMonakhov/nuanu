import { TDynamicImageProps } from '@/components/Media/DynamicImage/types';
import { IBaseComponent, TKey } from '@anton.bobrov/react-components';

export interface IEventsItem {
  key: TKey;
  href: string;
  image: TDynamicImageProps;
  startTime: string;
  endTime?: string;
  /** nl2br */
  type?: string;
  /** nl2br */
  title?: string;
  place?: string;
  price?: number;
}

export interface IProps extends IEventsItem, IBaseComponent {}
