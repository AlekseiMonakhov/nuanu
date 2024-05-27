import { FC } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import { CardProps } from './types';


const Card: FC<CardProps> = ({ src, apartments, title, city, area, villas }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={src} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className={styles.info}>
        <div className={styles.mainInfo} >
          <p className={styles.title}>{title}</p>
          <p className={styles.city}>{city}</p>
          <p className={styles.area}>{area}</p>
        </div>
        <div className={styles.numberOfItems}>
          <p className={styles.villas}>{villas} villas</p>
          <p className={styles.apartments}>{apartments} apartments</p></div>
      </div>
    </div>
  );
};

export default Card;
