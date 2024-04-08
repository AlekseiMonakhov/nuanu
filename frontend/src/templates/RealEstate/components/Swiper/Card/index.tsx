import { FC } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import { CardProps } from './types';


const Card: FC<CardProps> = ({ src, alt, title, city, area, details }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={src} alt={alt} layout="fill" objectFit="cover" />
      </div>
      <div className={styles.info}>
        <div className={styles.mainInfo} >
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.city}>{city}</p>
          <p className={styles.area}>{area}</p>
        </div>
        <p className={styles.details}>{details}</p>
      </div>
    </div>
  );
};

export default Card;
