import { ReactElement, ReactNode } from 'react';

export interface IProps {
  datGuiName: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  overlay: ReactElement;
  isDraggable: boolean;
  children?: ReactNode;
}
