import { FC } from 'react';
import { RichText } from '@/components/Typography/RichText';
import { IProps } from './types';
import styles from './styles.module.scss';

export const Content: FC<IProps> = ({ title, description, children }) => (
  <div className={styles.content}>
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
