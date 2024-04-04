import { IBaseComponent } from '@anton.bobrov/react-components';

export interface IProps extends IBaseComponent {
  text: string;
  href: string;
  target?: '_blank';
}
