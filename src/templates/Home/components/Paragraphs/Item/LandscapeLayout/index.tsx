import { FC } from 'react';
import cn from 'classnames';
import { IProps } from './types';
import styles from './styles.module.scss';

export const LandscapeLayout: FC<IProps> = ({
  className,
  style,
  content,
  media,
  stats,
}) => (
  <article className={cn(className, styles.layout)} style={style}>
    <div className={styles.container}>
      <div className={styles.aside}>
        <div className={styles.aside__content}>{stats}</div>

        <div className={styles.aside__media}>
          <div className={styles.media}>{media}</div>
        </div>
      </div>

      <div className={styles.content}>{content}</div>
    </div>
  </article>
);
