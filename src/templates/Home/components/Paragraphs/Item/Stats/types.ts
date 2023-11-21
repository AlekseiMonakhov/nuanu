import { TKey } from '@anton.bobrov/react-components';

type TItem = {
  key: TKey;
  /** nl2br */
  title?: string;
  /** nl2br */
  description?: string;
};

export type TStatsItems = TItem[];

export interface IProps {
  index: number;
  items: TStatsItems;
}
