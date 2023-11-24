import { IBaseComponent } from '@anton.bobrov/react-components';
import { IHomeParagraphsItem } from '../types';

export interface IProps extends IBaseComponent, IHomeParagraphsItem {
  index: number;
  isLarge: boolean;
  isReverse: boolean;
}
