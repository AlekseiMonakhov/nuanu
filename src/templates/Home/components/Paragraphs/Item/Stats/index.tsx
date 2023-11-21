import { FC } from 'react';
import cn from 'classnames';
import { IProps } from './types';
import styles from './styles.module.scss';

export const Stats: FC<IProps> = ({ items, index }) => (
  <div className={cn(styles.stats, styles[`type_${index % 3}`])}>
    {items.map(({ key, title, description }) => (
      <div key={key} className={cn(styles.item)}>
        {title && (
          <p
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}

        {description && (
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
    ))}
  </div>
);
