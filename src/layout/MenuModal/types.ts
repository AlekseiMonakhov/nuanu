import { Timeline } from '@anton.bobrov/vevet-init';

export interface IWithTimeline {
  timeline?: Timeline;
  scope: [number, number];
}
