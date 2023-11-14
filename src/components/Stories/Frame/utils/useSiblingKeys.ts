import { TKey } from '@anton.bobrov/react-components';
import { useEvent } from '@anton.bobrov/react-hooks';
import { wrap } from '@anton.bobrov/vevet-init';

export function useSiblingKeys(items: { key: TKey }[]) {
  const getActiveIndex = useEvent((activeKey: TKey) =>
    items.findIndex(({ key }) => key === activeKey),
  );

  const getNextKey = useEvent((activeKey: TKey) => {
    const activeIndex = getActiveIndex(activeKey);
    const index = wrap(0, items.length, activeIndex + 1);

    return items[index].key;
  });

  const getPrevKey = useEvent((activeKey: TKey) => {
    const activeIndex = getActiveIndex(activeKey);
    const index = wrap(0, items.length, activeIndex - 1);

    return items[index].key;
  });

  return { getNextKey, getPrevKey };
}
