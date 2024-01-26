import { IEventsBannerAddProps } from '../BannerAdd/types';
import { IEventsItem } from '../Item/types';

export interface IProps {
  items: IEventsItem[];
  monthName: string;
  bannerAdd?: IEventsBannerAddProps;
  itemsClassName?: string;
  onBannerMouseEnter?: () => void;
  onBannerMouseLeave?: () => void;
}
