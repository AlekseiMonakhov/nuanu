import { TDynamicImageProps } from '@/components/Media/DynamicImage/types';
import { IBaseComponent, TKey } from '@anton.bobrov/react-components';

export type TImageMarqueeItem = TDynamicImageProps & {
  key: TKey;
};

export interface IProps extends IBaseComponent {
  items: TImageMarqueeItem[];
}
