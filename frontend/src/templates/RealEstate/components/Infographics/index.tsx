import { FC } from 'react';
import styles from './styles.module.scss';
import Card from './Card';


const Infographics: FC = () => {
  return (
    <div className={styles.infographics}>
      <div className={styles.headingContainer}>
        <h1>Elevate living through mindful investment.</h1>
        <p>Nuanu isn't just a place; it's an innovation in living. Invest in a property that grows with the community and the environment, promising more than just financial returns.</p>
      </div>
      <div className={styles.cardsContainer}>
        <Card value="15%" label="annual ROI for an apartment" />
        <Card value="8%" label="annual ROI for a family villa" />
        <Card value="50%" label="growth in value in just over 5 years" />
        <Card value="2–4" label="bedroom houses, apartments, suits" />
      </div>
    </div>
  );
};

export default Infographics;




