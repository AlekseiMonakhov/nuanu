import { FC, useRef } from 'react';
import { useScopedTimelineProgress } from '@anton.bobrov/react-vevet-hooks';
import { IWithTimeline } from '../types';
import styles from './styles.module.scss';

export const MenuModalBackground: FC<IWithTimeline> = ({ timeline, scope }) => {
  const ref = useRef<HTMLDivElement>(null);

  useScopedTimelineProgress({
    onProgress: ({ easing }) => {
      const element = ref.current;
      if (!element) {
        return;
      }

      element.style.opacity = `${easing}`;
      element.style.transform = `scale(1, ${easing})`;
    },
    timeline,
    scope,
  });

  return <div ref={ref} className={styles.menu_background} />;
};
