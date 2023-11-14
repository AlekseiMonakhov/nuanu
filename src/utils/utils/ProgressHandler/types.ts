import { NCallbacks } from '@anton.bobrov/vevet-init';

export interface IProps {
  container: HTMLElement;
  min: number;
  max: number;
  step: number;
  name?: string;
  ease?: number;
  friction?: number;
  hasDrag?: boolean;
  dragSpeed?: number;
}

export interface ICallbacksTypes extends NCallbacks.ITypes {
  render: undefined;
}

export interface IWithLerp {
  current: number;
  target: number;
}
