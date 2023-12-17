import { IBaseComponent } from '@anton.bobrov/react-components';
import { IUseBaseNavigation } from './utils/useBaseNavigation';

export type TFormBaseSelectOption = {
  key: string;
  value: string;
};

export type TFormBaseSelectFullOption = {
  key: string;
  value: string;
  id: string;
};

export interface IFormBaseSelectProps
  extends IBaseComponent,
    IUseBaseNavigation {
  placeholder: string;
  counterPostfix: string;
  value: string | undefined;
  onChange: (value: string) => void;
  options: TFormBaseSelectOption[];
  isMultiple?: boolean;
  isOpened?: boolean;
}
