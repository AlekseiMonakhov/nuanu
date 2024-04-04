import { FC, useRef } from 'react';
import cn from 'classnames';
import { IProps } from './types';
import styles from './styles.module.scss';
import { Labels } from './Labels';
import { useAnimationState } from './utils/useAnimationState';
import { Media } from './Media';

export const HomeLongRead: FC<IProps> = ({
  className,
  style,
  title,
  items,
  shouldRenderMedia,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { length } = items;
  const { activeIndex, onProgressMove } = useAnimationState(ref, length);

  return (
    <div
      ref={ref}
      className={cn(className, styles.home_long_read)}
      style={style}
    >
      <div className={styles.container}>
        {shouldRenderMedia && <Media items={items} activeIndex={activeIndex} />}

        <Labels
          className={styles.labels}
          items={items}
          onProgressMove={onProgressMove}
        >
          <p
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Labels>
      </div>
    </div>
  );
};
