import { IBaseComponent } from '@anton.bobrov/react-components';
import { TFilter } from '../../utils/useFilters';

export interface IProps extends IBaseComponent {
  filters: TFilter[];
  onFiltersOpen: () => void;
  onFiltersClose: () => void;
  onChange: (values: Record<string, string>) => void;
}
