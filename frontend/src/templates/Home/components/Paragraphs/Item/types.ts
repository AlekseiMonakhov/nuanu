import { IMediaVideoOrImageProps } from '@/components/Media/VideoOrImage/types';
import { IBaseComponent, TKey } from '@anton.bobrov/react-components';
import { TActionButtonAction } from '@/components/Button/Action/types';
import { IContentProps } from './Content/types';
import { TFactoidsItems } from './Factoids/types';

export interface IHomeParagraphsItem extends IContentProps {
  key: TKey;
  media?: IMediaVideoOrImageProps;
  action?: TActionButtonAction | null;
  factoids?: TFactoidsItems | null;
}

export interface IProps extends IBaseComponent, IHomeParagraphsItem {
  index: number;
}
