import { TKey } from '@anton.bobrov/react-components';
import { IMediaVideoOrImageProps } from '../Media/VideoOrImage/types';
import { IStoriesFrameContentProps } from './Frame/Content/types';

export interface IStoriesItem
  extends IMediaVideoOrImageProps,
    IStoriesFrameContentProps {
  key: TKey;
}

export interface IStories<Item extends IStoriesItem> {
  items: Item[];
}
