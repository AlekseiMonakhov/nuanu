import { IStoriesFullScreen } from '@/components/Stories/FullScreen/types';
import { IEventsItem } from './components/Item/types';

export interface IEvents {
  stories: IStoriesFullScreen;
  items: IEventsItem[];
}
