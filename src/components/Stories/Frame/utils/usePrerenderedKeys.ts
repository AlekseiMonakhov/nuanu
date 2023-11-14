import { TKey } from '@anton.bobrov/react-components';
import { useEvent } from '@anton.bobrov/react-hooks';
import { useEffect, useState } from 'react';

export function usePrerenderedKeys(length: number, activeKey: TKey) {
  const [keys, setKeys] = useState<TKey[]>([activeKey]);

  const add = useEvent((key: TKey) => {
    setKeys((state) => [...state, key]);
  });

  const remove = useEvent((key: TKey) => {
    setKeys((state) => state.filter((i) => i !== key));
  });

  useEffect(() => add(activeKey), [activeKey, add]);

  return { keys, add, remove };
}
