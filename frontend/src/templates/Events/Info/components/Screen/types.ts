import { IEventSharedProps } from '@/templates/Events/global';
import { IBaseComponent } from '@anton.bobrov/react-components';
import { ReactNode } from 'react';

type TPickedProps = Pick<
  IEventSharedProps,
  'image' | 'title' | 'startTime' | 'endTime' | 'location'
>;

export interface IProps extends IBaseComponent, TPickedProps {
  children: ReactNode;
}
