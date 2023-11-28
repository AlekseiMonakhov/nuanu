import { IStoriesFullScreen } from '@/components/Stories/FullScreen/types';
import { IHomeLongReadProps } from './components/LongRead/global';
import { IHomeParagraphsProps } from './components/Paragraphs/types';
import { IHomePersonTypesProps } from './components/PersonTypes/types';
import { IHomeInsideProps } from './components/Inside/types';

export interface IHome {
  stories?: IStoriesFullScreen;
  inside?: IHomeInsideProps;
  longRead?: IHomeLongReadProps;
  paragraphs?: IHomeParagraphsProps;
  personTypes?: IHomePersonTypesProps;
}
