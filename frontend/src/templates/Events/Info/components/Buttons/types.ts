import { IEventSharedProps } from '@/templates/Events/global';
import { IBaseComponent } from '@anton.bobrov/react-components';

type TPickedProps = Pick<
  IEventSharedProps,
  'title' | 'startTime' | 'endTime' | 'location' | 'price' | 'buyHref'
>;

export interface IProps extends IBaseComponent, TPickedProps {
  buyButtonTheme: 'light' | 'dark';
  calendarButtonTheme: 'light' | 'light_outline';
}
