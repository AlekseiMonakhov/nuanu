import { FC } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import { IGalleryItemProps } from './types';
import InfoCard from '../InfoCard';
import classNames from 'classnames';

const GalleryItem: FC<IGalleryItemProps> = ({ src, title, subtitle, alt, isHalfWidth, isNotRounded }) => {
  const itemClasses = classNames(styles.galleryItem, {
    [styles.halfWidth]: isHalfWidth, 
    [styles.notRounded]: isNotRounded, 
  });

  return (
    <div className={itemClasses}>
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
      <div className={styles.infoCardContainer}>
        <InfoCard title={title} subtitle={subtitle} />
      </div>
    </div>
  );
};

export default GalleryItem;
