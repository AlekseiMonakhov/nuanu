import { useMemo } from 'react';
import { IEventsItem } from '../components/Item/types';

export function useFilteredItems(
  itemsProp: IEventsItem[],
  filters: Record<string, string>,
) {
  const items = useMemo(
    () =>
      itemsProp.filter((item) => {
        let isMatchTag = true;
        if ('tags' in filters && filters.tags) {
          isMatchTag = !!item.tags?.some((tag) => filters.tags.includes(tag));
        }

        let isMatchType = true;
        if ('type' in filters && filters.type && item.type) {
          isMatchType = filters.type.split(',').includes(item.type);
        }

        return isMatchTag && isMatchType;
      }),
    [filters, itemsProp],
  );

  return items;
}
