import { IMediaVideoOrImageProps } from '@/components/Media/VideoOrImage/types';
import { TKey } from '@anton.bobrov/react-components';

export interface IStoriesBaseItem {
  key: TKey;
  media?: IMediaVideoOrImageProps;
}

export interface IStoriesBase<
  Item extends IStoriesBaseItem = IStoriesBaseItem,
> {
  items: Item[];
}
