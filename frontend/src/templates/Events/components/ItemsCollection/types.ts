import { IEventsItem } from '../Item/types';

export interface IProps {
  items: IEventsItem[];
  bannerTitle?: string;
  itemsClassName?: string;
  onBannerMouseEnter?: () => void;
  onBannerMouseLeave?: () => void;
}
