import { TRegistryComponentsAPI } from 'rc-api-registry';
import { registry } from './registry';

export interface IHome {
  components: TRegistryComponentsAPI<typeof registry>;
}
