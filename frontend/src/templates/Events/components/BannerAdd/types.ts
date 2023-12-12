import { IBaseComponent } from '@anton.bobrov/react-components';

export interface IProps extends IBaseComponent {
  title: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}
