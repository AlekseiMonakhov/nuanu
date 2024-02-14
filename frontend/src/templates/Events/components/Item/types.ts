import { IBaseComponent, TKey } from '@anton.bobrov/react-components';
import { IEventSharedProps } from '../../global';

export interface IEventsItem extends IEventSharedProps {
  key: TKey;
}

export interface IProps extends IEventsItem, IBaseComponent {}
