import { IBaseComponent } from '@anton.bobrov/react-components';
import { TOnProgressMove } from '../../utils/useAnimationState';

export interface IProps extends IBaseComponent {
  text: string;
  index: number;
  length: number;
  onProgressMove: TOnProgressMove;
}
