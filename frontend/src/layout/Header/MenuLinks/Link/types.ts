import { ILinkMenu } from '@/types/Link';
import { IBaseComponent } from '@anton.bobrov/react-components';

export interface IProps extends IBaseComponent, ILinkMenu {
  hasActiveStyles: boolean;
  hasTooltip: boolean;
}
