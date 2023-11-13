import { useEffect, useRef } from 'react';
import { routerCallbacks } from 'src/router';

export function useOnRouterPush(action: () => void) {
  const actionRef = useRef(action);

  useEffect(() => {
    const callback = routerCallbacks.add('push', () => {
      actionRef.current();
    });

    return () => callback.remove();
  }, []);
}
