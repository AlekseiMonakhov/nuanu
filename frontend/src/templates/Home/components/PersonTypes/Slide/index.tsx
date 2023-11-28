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
    {title && (
      <h3
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    )}

    {image && (
      <div className={styles.image}>
        <MediaVideoOrImage
          className={styles.image__wrapper}
          image={image}
          position="contain"
        />
      </div>
    )}

    {description && (
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    )}
  </article>
);
