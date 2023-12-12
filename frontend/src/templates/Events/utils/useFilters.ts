import { useMemo } from 'react';
import { uniqueeArray } from '@/utils/uniqueeArray';
import { useStoreLexicon } from '@/store/reducers/page';
import { TKey } from '@anton.bobrov/react-components';
import { TFormBaseSelectOption } from '@/components/Form/BaseSelect/types';
import { IEventsItem } from '../components/Item/types';

export type TFilter = {
  key: TKey;
  label: string;
  options: TFormBaseSelectOption[];
};

export function useFilters(items: IEventsItem[]) {
  const {
    events: { filters: lexicon },
  } = useStoreLexicon();

  const types = useMemo(
    () =>
      uniqueeArray(
        items.map((item) => item.type).filter((item) => !!item),
      ) as string[],
    [items],
  );

  const tags = useMemo(
    () =>
      uniqueeArray(
        items
          .map((item) => item.tags)
          .flat()
          .filter((item) => !!item),
      ) as string[],
    [items],
  );

  const filters = useMemo(
    () =>
      [
        {
          key: 'type',
          label: lexicon.type,
          options: types.map((item) => ({ key: item, value: item })),
        },
        {
          key: 'tags',
          label: lexicon.tags,
          options: tags.map((item) => ({ key: item, value: item })),
        },
      ] satisfies TFilter[],
    [lexicon.tags, lexicon.type, tags, types],
  );

  return filters;
}
