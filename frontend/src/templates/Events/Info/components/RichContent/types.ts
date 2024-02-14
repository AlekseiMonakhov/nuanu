import { IBaseComponent, TKey } from '@anton.bobrov/react-components';
import { TSoundCloud as TSoundCloudBase } from './SoundCloud/types';
import { TYouTube as TYouTubeBase } from './YouTube/types';
import { TPoster as TPosterBase } from './Poster/types';
import { TText as TTextBase } from './Text/types';

type TSoundCloud = TSoundCloudBase & {
  key: TKey;
  kind: 'soundcloud';
};

type TYouTube = TYouTubeBase & {
  key: TKey;
  kind: 'youtube';
};

type TPoster = TPosterBase & {
  key: TKey;
  kind: 'poster';
};

type TText = TTextBase & {
  key: TKey;
  kind: 'text';
};

export type TEventsInfoRichContentItem =
  | TSoundCloud
  | TYouTube
  | TPoster
  | TText;

export interface IProps extends IBaseComponent {
  items: TEventsInfoRichContentItem[];
}
