import { TKey } from '@anton.bobrov/react-components';
import { useEventListener } from '@anton.bobrov/react-hooks';
import { RefObject } from 'react';
import { useSiblingKeys } from './useSiblingKeys';

export interface IProps {
  ref: RefObject<HTMLElement>;
  items: { key: TKey }[];
  activeKey: TKey;
  onActiveKey: (key: TKey) => void;
}

export function useTapNavigation({
  ref,
  items,
  activeKey,
  onActiveKey,
}: IProps) {
  const { getNextKey, getPrevKey } = useSiblingKeys(items);

  useEventListener({
    ref,
    target: 'pointerup',
    listener: (event) => {
      if (!ref.current || event.which !== 1) {
        return;
      }

      const bounding = ref.current.getBoundingClientRect();
      const { clientX } = event;
      const x = clientX - bounding.left;

      if (x < bounding.width / 2) {
        onActiveKey(getPrevKey(activeKey));
      } else {
        onActiveKey(getNextKey(activeKey));
      }
    },
  });
}
