import { IBaseComponent } from '@anton.bobrov/react-components';
import { ReactElement, RefObject } from 'react';

export interface IProps extends IBaseComponent {
  belowRef: RefObject<HTMLElement>;
  children: (ReactElement | undefined)[];
}
