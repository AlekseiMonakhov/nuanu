import { IBaseComponent } from '@anton.bobrov/react-components';

export type TFormBaseSelectOption = {
  key: string;
  value: string;
};

export type TFormBaseSelectFullOption = {
  key: string;
  value: string;
  id: string;
};

export interface IFormBaseSelectProps extends IBaseComponent {
  placeholder: string;
  value: string | undefined;
  onChange: (value: string) => void;
  options: TFormBaseSelectOption[];
  isMultiple?: boolean;
  isOpened?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}
