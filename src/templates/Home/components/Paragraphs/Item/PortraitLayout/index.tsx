import { FC } from 'react';
import cn from 'classnames';
import { IProps } from './types';
import styles from './styles.module.scss';

export const PortraitLayout: FC<IProps> = ({
  className,
  style,
  content,
  media,
  factoids,
  action,
}) => (
  <article className={cn(className, styles.layout)} style={style}>
    <div className={styles.pad} />

    <div className={styles.container}>
      <div className={styles.content}>{content}</div>

      <div className={styles.factoids}>{factoids}</div>

      <div className={styles.action}>{action}</div>
    </div>

    <div className={styles.media}>{media}</div>
  </article>
);
