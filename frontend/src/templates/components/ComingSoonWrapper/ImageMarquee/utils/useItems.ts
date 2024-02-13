import { repeatItems } from '@/utils/repeatItems';
import { TKey } from '@anton.bobrov/react-components';
import { useOnElementResize } from '@anton.bobrov/react-hooks';
import { RefObject, useState } from 'react';

interface IProps<T> {
  ref: RefObject<HTMLElement>;
  items: T[];
}

type TGroup<T> = {
  key: TKey;
  items: T[];
};

export function useItems<T>({ ref, items: itemsProp }: IProps<T>) {
  const [groups, setGroups] = useState<TGroup<T>[]>([
    { key: 0, items: itemsProp },
  ]);

  const [groupWidth, setGroupWidth] = useState(0);

  useOnElementResize(
    ref,
    () => {
      const parent = ref.current;
      const firstGroup = ref.current?.children[0];

      if (!parent || !firstGroup) {
        return;
      }

      const refWidth = parent.clientWidth;

      const firstGroupWidth = firstGroup.clientWidth;
      setGroupWidth(firstGroupWidth);

      const repeatTimes = Math.max(3, Math.ceil(refWidth / firstGroupWidth));

      const { items: newGroups } = repeatItems(
        [{ key: 0, items: itemsProp }],
        repeatTimes,
      );

      setGroups(newGroups);
    },
    { delay: 16 },
  );

  return { groups, groupWidth };
}
