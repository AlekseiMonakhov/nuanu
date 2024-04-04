import { IBaseComponent } from '@anton.bobrov/react-components';

export interface IProps extends IBaseComponent {
  progress: number;
  isActive: boolean;
}
