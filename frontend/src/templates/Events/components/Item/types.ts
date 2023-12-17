import { TDynamicImageProps } from '@/components/Media/DynamicImage/types';
import { IBaseComponent, TKey } from '@anton.bobrov/react-components';

export interface IEventsItem {
  key: TKey;
  href: string;
  image: TDynamicImageProps;
  startTime: string;
  endTime?: string;
  type?: string;
  tags?: string[];
  /** nl2br */
  title?: string;
  place?: string;
  price?: string | null;
}

export interface IProps extends IEventsItem, IBaseComponent {}