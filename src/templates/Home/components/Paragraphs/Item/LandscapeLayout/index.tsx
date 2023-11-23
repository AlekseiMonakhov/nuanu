import { FC } from 'react';
import cn from 'classnames';
import { IProps } from './types';
import styles from './styles.module.scss';

export const LandscapeLayout: FC<IProps> = ({
  className,
  style,
  content,
  media,
  factoids,
  isLarge,
  isReverse,
}) => (
  <article
    className={cn(
      className,
      styles.layout,
      isReverse && styles.reverse,
      isLarge && styles.large,
    )}
    style={style}
  >
    <div className={styles.aside}>
      <div className={styles.aside__factoids}>{factoids}</div>

      <div className={styles.aside__media}>
        <div className={styles.media}>{media}</div>
      </div>
    </div>

    <div className={styles.content}>{content}</div>
  </article>
);
