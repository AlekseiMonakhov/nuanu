import { RefObject } from 'react';

export interface IProps {
  index: number;
  isActive: boolean;
  onClick: () => void;
  text: string;
  targetPositionRef: RefObject<HTMLElement>;
}
