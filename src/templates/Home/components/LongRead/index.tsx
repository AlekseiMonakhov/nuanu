import { FC, useRef } from 'react';
import { IProps } from './types';
import styles from './styles.module.scss';
import { Labels } from './Labels';
import { useAnimationState } from './utils/useAnimationState';
import { Media } from './Media';

export const HomeLongRead: FC<IProps> = ({ title, items }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { length } = items;

  const { activeIndex } = useAnimationState(ref, length);

  return (
    <div ref={ref} className={styles.home_long_read}>
      <div className={styles.container}>
        <Media items={items} activeIndex={activeIndex} />

        <p
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <Labels
          className={styles.labels}
          items={items}
          activeIndex={activeIndex}
        />
      </div>
    </div>
  );
};
