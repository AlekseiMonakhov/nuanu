import { TKey } from '@anton.bobrov/react-components';

type TItem = {
  key: TKey;
  /** nl2br */
  title?: string;
  /** nl2br */
  description?: string;
};

export type TFactoidsItems = TItem[];

export interface IProps {
  index: number;
  items: TFactoidsItems;
}
