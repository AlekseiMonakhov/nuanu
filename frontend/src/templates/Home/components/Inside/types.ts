import { IStoriesFrameItem } from '@/components/Stories/Frame/types';
import { TKey } from '@anton.bobrov/react-components';

interface IItem {
  key: TKey;
  title: string;
  stories: IStoriesFrameItem[];
}

export type TActiveKey = TKey | 'none';

export interface IHomeInsideProps {
  items: IItem[];
}

export interface IProps extends IHomeInsideProps {}
