import { useId, useMemo } from 'react';
import { TimeZone } from '@/utils/datetime/settings';
import { useEvent } from '@anton.bobrov/react-hooks';
import { IEventsItem } from '../../Item/types';

export function useGroups(itemsProp: IEventsItem[]) {
  const id = useId();

  const items = useMemo(
    () =>
      [...itemsProp].sort(
        (a, b) =>
          new Date(a.startTime).getTime() - new Date(b.startTime).getTime(),
      ),
    [itemsProp],
  );

  const itemsData = useMemo(
    () =>
      items.map((item) => {
        const monthYear = new Intl.DateTimeFormat('en-US', {
          month: 'long',
          year: 'numeric',
          timeZone: TimeZone,
        }).format(new Date(item.startTime));

        return { ...item, monthYear };
      }),
    [items],
  );

  const groups = useMemo(() => {
    const names = itemsData
      .map((item) => item.monthYear)
      .filter((item, index, array) => array.indexOf(item) === index);

    return names.map((name, index) => ({
      key: index,
      name,
      month: name.split(' ')[0],
      year: name.split(' ')[1],
      id: `${id}-${index}`,
      items: itemsData.filter((item) => item.monthYear === name),
      isFirst: index === 0,
      isLast: index === names.length - 1,
    }));
  }, [id, itemsData]);

  const getGroupIndex = useEvent((name: string) =>
    groups.findIndex((group) => group.name === name),
  );

  const getNextGroup = useEvent((name: string) => {
    const index = getGroupIndex(name);

    return groups[index + 1];
  });

  const getPrevGroup = useEvent((name: string) => {
    const index = getGroupIndex(name);

    return groups[index - 1];
  });

  return { groups, getNextGroup, getPrevGroup };
}
