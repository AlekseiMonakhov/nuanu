import { IBaseComponent } from '@anton.bobrov/react-components';
import { ILinkMenu } from '@/types/Link';

export interface IProps extends IBaseComponent {
  links: ILinkMenu[];
}
