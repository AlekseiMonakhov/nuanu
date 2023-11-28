import { IBaseComponent } from '@anton.bobrov/react-components';
import { ReactElement, ReactNode } from 'react';

export interface IProps extends IBaseComponent {
  datGuiName: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  overlay: ReactElement;
  isDraggable: boolean;
  children?: ReactNode;
}
