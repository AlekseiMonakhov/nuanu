import { IStoriesFullScreen } from '@/components/Stories/FullScreen/types';
import { IEventsItem } from './components/Item/types';
import { IEventsBannerAddProps } from './components/BannerAdd/types';

export interface IEvents {
  stories: IStoriesFullScreen;
  items: IEventsItem[];
  bannerAdd?: IEventsBannerAddProps;
}
