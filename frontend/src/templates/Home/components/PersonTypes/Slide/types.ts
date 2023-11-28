import { TDynamicImageProps } from '@/components/Media/DynamicImage/types';
import { IBaseComponent, TKey } from '@anton.bobrov/react-components';

export interface ISlideProps {
  key: TKey;
  /** nl2br */
  title?: string;
  /** nl2br */
  description?: string;
  image?: TDynamicImageProps;
}

export interface IProps extends IBaseComponent, ISlideProps {}
