import { FC } from 'react';
import { RichText } from '@/components/Typography/RichText';
import cn from 'classnames';
import { IProps } from './types';
import styles from './styles.module.scss';

export const Content: FC<IProps> = ({
  className,
  style,
  title,
  description,
  children,
}) => (
  <div className={cn(className, styles.content)} style={style}>
    {title && (
      <h2
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    )}

    {description && (
      <RichText className={styles.description} html={description} />
    )}

    {children && <div className={styles.children}>{children}</div>}
  </div>
);
