import { FC } from 'react';
import cn from 'classnames';
import { AutoTypeLink } from '@/components/Link/AutoType';
import { IProps } from './types';
import styles from './styles.module.scss';

export const AsideWrapper: FC<IProps> = ({
  className,
  style,
  title,
  value,
  href,
  children,
}) => (
  <div className={cn(className, styles.aside_wrapper)} style={style}>
    <p className={styles.title}>{title}</p>

    {value && (
      <p className={styles.value}>
        {href ? (
          <AutoTypeLink href={href} text={value} target="_blank" />
        ) : (
          value
        )}
      </p>
    )}

    {children && <div className={styles.children}>{children}</div>}
  </div>
);
