import { IMediaVideoOrImageProps } from '@/components/Media/VideoOrImage/types';
import { TKey } from '@anton.bobrov/react-components';

interface IMedia extends IMediaVideoOrImageProps {
  key: TKey;
}

export interface IHomeLongReadItemProps {
  key: TKey;
  label: string;
  media: IMedia[];
}

export interface IHomeLongReadProps {
  /** nl2br */
  title: string;
  items: IHomeLongReadItemProps[];
}
