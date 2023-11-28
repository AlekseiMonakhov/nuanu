import { IBaseComponent } from '@anton.bobrov/react-components';

export interface IProps extends IBaseComponent {
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
  onPrevClick: () => void;
  onNextClick: () => void;
}
