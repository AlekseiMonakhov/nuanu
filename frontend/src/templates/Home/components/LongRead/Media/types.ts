import { IMediaVideoOrImageProps } from '@/components/Media/VideoOrImage/types';
import { TKey } from '@anton.bobrov/react-components';
import { IHomeLongReadItemProps } from '../global';

export interface IItem {
  key: TKey;
  itemIndex: number;
  selfIndex: number;
  media: IMediaVideoOrImageProps;
}

export interface IProps {
  items: IHomeLongReadItemProps[];
  activeIndex: number;
}
