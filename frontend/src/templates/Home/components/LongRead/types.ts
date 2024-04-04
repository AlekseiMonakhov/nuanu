import { IBaseComponent } from '@anton.bobrov/react-components';
import { IHomeLongReadProps } from './global';

export interface IProps extends IBaseComponent, IHomeLongReadProps {
  shouldRenderMedia: boolean;
}
