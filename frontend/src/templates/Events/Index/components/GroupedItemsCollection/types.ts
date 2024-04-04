import { IBaseComponent } from '@anton.bobrov/react-components';
import { IEventsItem } from '../Item/types';
import { IEventsBannerAddProps } from '../BannerAdd/types';

export interface IProps extends IBaseComponent {
  items: IEventsItem[];
  onItemClick?: () => void;
  bannerAdd?: IEventsBannerAddProps;
}
