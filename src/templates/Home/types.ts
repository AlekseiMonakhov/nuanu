import { IStoriesFullScreen } from '@/components/Stories/FullScreen/types';
import { IHomeLongReadProps } from './components/LongRead/global';

export interface IHome {
  stories?: IStoriesFullScreen;
  longRead?: IHomeLongReadProps;
}
