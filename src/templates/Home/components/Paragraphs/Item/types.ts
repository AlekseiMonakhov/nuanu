import { IMediaVideoOrImageProps } from '@/components/Media/VideoOrImage/types';
import { IBaseComponent, TKey } from '@anton.bobrov/react-components';
import { TActionButtonAction } from '@/components/Button/Action/types';
import { IContentProps } from './Content/types';
import { TStatsItems } from './Stats/types';

export interface IHomeParagraphsItem
  extends IMediaVideoOrImageProps,
    IContentProps {
  key: TKey;
  action?: TActionButtonAction | null;
  stats?: TStatsItems | null;
}

export interface IProps extends IBaseComponent, IHomeParagraphsItem {
  index: number;
}
