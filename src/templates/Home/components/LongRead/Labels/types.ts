import { IBaseComponent } from '@anton.bobrov/react-components';
import { IHomeLongReadItemProps } from '../global';

export interface IProps extends IBaseComponent {
  items: IHomeLongReadItemProps[];
  activeIndex: number;
}
