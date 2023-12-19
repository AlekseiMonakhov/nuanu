import { IBaseComponent } from '@anton.bobrov/react-components';
import { ReactNode } from 'react';
import { IHomeLongReadItemProps } from '../global';
import { TOnProgressMove } from '../utils/useAnimationState';

export interface IProps extends IBaseComponent {
  items: IHomeLongReadItemProps[];
  onProgressMove: TOnProgressMove;
  children: ReactNode;
}
