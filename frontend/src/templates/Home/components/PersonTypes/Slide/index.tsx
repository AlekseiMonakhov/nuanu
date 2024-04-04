import { FC } from 'react';
import cn from 'classnames';
import { MediaVideoOrImage } from '@/components/Media/VideoOrImage';
import { IProps } from './types';
import styles from './styles.module.scss';

export const Slide: FC<IProps> = ({
  className,
  style,
  title,
  description,
  image,
}) => (
  <article className={cn(className, styles.slide)} style={style}>
    {image && (
      <div className={styles.image}>
        <MediaVideoOrImage image={image} position="contain" />
      </div>
    )}

    <div className={styles.content}>
      {title && (
        <h3
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
  </article>
);
