import { IBaseComponent } from '@anton.bobrov/react-components';
import { TImageMarqueeItem } from './ImageMarquee/types';

export interface IProps extends IBaseComponent {
  text: string;
  items: TImageMarqueeItem[];
}
