import { IBaseComponent } from '@anton.bobrov/react-components';
import { TFilter } from '../../utils/useFilters';

export interface IProps extends IBaseComponent {
  filters: TFilter[];
  defaultValues: Record<string, string>;
  onFiltersOpen: () => void;
  onFiltersClose: () => void;
  onChange: (values: Record<string, string>) => void;
}
