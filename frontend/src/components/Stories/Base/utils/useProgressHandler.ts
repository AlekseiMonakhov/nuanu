import { useEvent } from '@anton.bobrov/react-hooks';
import { Callbacks } from '@anton.bobrov/vevet-init';
import { useEffect, useRef, useState } from 'react';

interface ICallbackTypes {
  update: { progress: number };
}

export function useProgressHandler(onProgressProp: (progress: number) => void) {
  const progressRef = useRef(0);

  const [callbacks, setCallbacks] = useState<
    Callbacks<ICallbackTypes> | undefined
  >();

  const onProgress = useEvent(onProgressProp);

  useEffect(() => {
    const instance = new Callbacks<ICallbackTypes>();
    setCallbacks(instance);

    instance.add('update', ({ progress }) => onProgress(progress));

    return () => {
      setCallbacks(undefined);
      instance.destroy();
    };
  }, [onProgress]);

  const setProgress = useEvent((value: number) => {
    progressRef.current = value;
    callbacks?.tbt('update', { progress: value });
  });

  return { callbacks, setProgress };
}
