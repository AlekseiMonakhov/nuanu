import { IBaseComponent } from '@anton.bobrov/react-components';

export interface IProps extends IBaseComponent {
  /** @default 'light' */
  theme?: 'light' | 'dark';
}
