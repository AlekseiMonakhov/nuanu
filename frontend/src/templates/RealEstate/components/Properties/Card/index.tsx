import React, { FC } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import { IPropertyProps } from './types';


const Card: FC<IPropertyProps> = ({
  name,
  title,
  villas,
  apartments,
  startingPrice,
  totalArea,
  roomSizes,
  roi,
  occupancy,
  delivery,
  image
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>{name}</div>
      <div className={styles.header}>{title}</div>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
        <div className={styles.badges}>
          <div className={styles.badge}>{`${villas} villas`}</div>
          <div className={styles.badge}>{`${apartments} apartments`}</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.infoColumn}>
          <div className={styles.infoRow}>
            <span className={styles.label}>Starting price</span>
            <span className={styles.value}>${startingPrice.toLocaleString()}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.label}>Annual ROI in $</span>
            <span className={styles.value}>{roi}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.label}>Occupancy</span>
            <span className={styles.value}>{occupancy}</span>
          </div>
        </div>
        <div className={styles.infoColumn}>
          <div className={styles.infoRow}>
            <span className={styles.label}>Total area</span>
            <span className={styles.value}>{totalArea} m²</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.label}>Room sizes</span>
            <span className={styles.value}>{roomSizes.join(' m², ')} m²</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.label}>Delivery in</span>
            <span className={styles.value}>{delivery}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
