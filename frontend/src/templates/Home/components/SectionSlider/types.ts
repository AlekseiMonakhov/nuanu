import { IBaseComponent } from '@anton.bobrov/react-components';
import { ReactElement, RefObject } from 'react';

export interface IProps extends IBaseComponent {
  belowRef: RefObject<HTMLElement>;
  onTargetUpdate: (index: number) => void;
  children: (ReactElement | undefined)[];
}
