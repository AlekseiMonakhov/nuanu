import { TKey } from '@anton.bobrov/react-components';
import { useEvent } from '@anton.bobrov/react-hooks';
import { wrap } from '@anton.bobrov/vevet-init';

export function useSiblingKeys(items: { key: TKey }[], activeKey: TKey) {
  const getActiveIndex = useEvent(() =>
    items.findIndex(({ key }) => key === activeKey),
  );

  const getNextKey = useEvent(() => {
    const activeIndex = getActiveIndex();
    const index = wrap(0, items.length, activeIndex + 1);

    return items[index].key;
  });

  const getPrevKey = useEvent(() => {
    const activeIndex = getActiveIndex();
    const index = wrap(0, items.length, activeIndex - 1);

    return items[index].key;
  });

  return { getNextKey, getPrevKey };
}
