import { IEventSharedProps } from '../global';
import { TEventsInfoRichContentItem } from './components/RichContent/types';

export interface IEventsInfo extends IEventSharedProps {
  richContent: TEventsInfoRichContentItem[];
}
