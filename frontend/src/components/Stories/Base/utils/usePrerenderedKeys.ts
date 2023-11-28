import { TKey } from '@anton.bobrov/react-components';
import { useEvent } from '@anton.bobrov/react-hooks';
import { useEffect, useState } from 'react';

export function usePrerenderedKeys(activeKey: TKey) {
  const [prerenderedKeys, setPrerenderedKeys] = useState<TKey[]>([activeKey]);

  const add = useEvent((key: TKey) => {
    setPrerenderedKeys((state) => {
      if (state.includes(key)) {
        return state;
      }

      return [...state, key];
    });
  });

  useEffect(() => add(activeKey), [activeKey, add]);

  return { prerenderedKeys, add };
}
