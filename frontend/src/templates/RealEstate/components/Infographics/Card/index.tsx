import { FC } from 'react';
import styles from './styles.module.scss';
import { ICardPropsCardProps } from './types';


const Card: FC<ICardProps> = ({ value, label }) => {
  return (
    <div className={styles.card}>
      <span className={styles.cardValue}>{value}</span>
      <span className={styles.cardLabel}>{label}</span>
    </div>
  );
};

export default Card;
