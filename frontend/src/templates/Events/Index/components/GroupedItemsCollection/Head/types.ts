import { IBaseComponent } from '@anton.bobrov/react-components';

export interface IProps extends IBaseComponent {
  name: string;
  isFirst: boolean;
  isLast: boolean;
  onPrevClick: () => void;
  onNextClick: () => void;
}
