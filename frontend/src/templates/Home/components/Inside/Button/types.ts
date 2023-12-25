import { IBaseComponent } from '@anton.bobrov/react-components';
import { RefObject } from 'react';

export interface IProps extends IBaseComponent {
  index: number;
  isActive: boolean;
  onClick: () => void;
  text: string;
  count: number;
  targetPositionRef: RefObject<HTMLElement>;
}
