import { FC } from 'react';
import styles from './styles.module.scss';
import Card from './Card';
import { InfographicsProps } from "./Card/types"


const Infographics: FC<InfographicsProps> = ({ title, subtitle, cards }) => {
  return (
    <div className={styles.infographics}>
      <div className={styles.headingContainer}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className={styles.cardsContainer}>
        {cards.map((card, index) => (
          <Card key={index} value={card.value} label={card.label} />
        ))}
      </div>
    </div>
  );
};

export default Infographics;

