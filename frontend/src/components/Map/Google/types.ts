import { IBaseComponent } from '@anton.bobrov/react-components';

export interface IProps extends IBaseComponent {
  lat: number;
  lng: number;
  label: string;
}
