import { FC } from 'react';
import cn from 'classnames';
import { IProps } from './types';
import styles from './styles.module.scss';

export const Factoids: FC<IProps> = ({ items, index }) => (
  <div className={cn(styles.factoids, styles[`type_${index % 3}`])}>
    {items.map(({ key, title, description }) => (
      <p key={key} className={cn(styles.item)}>
        {title && (
          <b
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}

        {description && (
          <span
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </p>
    ))}
  </div>
);
