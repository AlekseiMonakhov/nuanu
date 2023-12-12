import { IBaseComponent } from '@anton.bobrov/react-components';
import { IEventsItem } from '../Item/types';

export interface IProps extends IBaseComponent {
  items: IEventsItem[];
}
