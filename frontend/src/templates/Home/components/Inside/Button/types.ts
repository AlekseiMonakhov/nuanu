import { RefObject } from 'react';

export interface IProps {
  index: number;
  isActive: boolean;
  isDisabled: boolean;
  onClick: () => void;
  text: string;
  targetPositionRef: RefObject<HTMLElement>;
}
