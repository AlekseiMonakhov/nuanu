import { TKey } from '@anton.bobrov/react-components';
import { IMediaVideoOrImageProps } from '../Media/VideoOrImage/types';
import { IStoriesFrameContentProps } from './Frame/Content/types';

export interface IStoriesItem extends IStoriesFrameContentProps {
  key: TKey;
  media?: IMediaVideoOrImageProps;
}

export interface IStories<Item extends IStoriesItem> {
  items: Item[];
}
