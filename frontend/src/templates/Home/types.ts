import { IStoriesFullScreen } from '@/components/Stories/FullScreen/types';
import { IHomeLongReadProps } from './components/LongRead/global';
import { IHomeParagraphsProps } from './components/Paragraphs/types';

export interface IHome {
  stories?: IStoriesFullScreen;
  longRead?: IHomeLongReadProps;
  paragraphs?: IHomeParagraphsProps;
}
