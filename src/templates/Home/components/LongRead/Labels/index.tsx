import { FC } from 'react';
import cn from 'classnames';
import { IProps } from './types';
import styles from './styles.module.scss';

export const Labels: FC<IProps> = ({
  className,
  style,
  items,
  activeIndex,
  children,
}) => (
  <div className={cn(className, styles.labels)} style={style}>
    <div className={styles.scene}>
      <div className={styles.track} style={{ '--active-index': activeIndex }}>
        {items.map(({ key, label }, index) => (
          <p
            key={key}
            className={cn(styles.label, index === activeIndex && styles.active)}
          >
            {label}
          </p>
        ))}
      </div>
    </div>

    <div className={styles.children}>{children}</div>
  </div>
);
