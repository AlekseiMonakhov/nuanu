import { FC, useEffect, useRef, useState } from 'react';
import { Preloader as PreloaderModule } from '@anton.bobrov/vevet-init';
import store from '@/store/store';
import { layoutSlice } from '@/store/reducers/layout';
import styles from './styles.module.scss';

export const Preloader: FC = () => {
  const parentRef = useRef<HTMLDivElement>(null);

  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const container = parentRef.current;
    if (isDone || !container) {
      return () => {};
    }

    const preloader = new PreloaderModule({
      container,
      hideAnimation: 350,
    });

    preloader.addCallback('hidden', () => {
      store.dispatch(layoutSlice.actions.setIsFirstLoaded());
      setIsDone(true);
    });

    return () => preloader.destroy();
  }, [parentRef, isDone]);

  return <div ref={parentRef} className={styles.container} />;
};
