import React from 'react';
import styles from './styles.module.scss';
import { TitleProps } from './types';


const Title: React.FC<TitleProps> = ({ mainTitle, subtitle }) => {
  return (
    <div className={styles.titleContainer}>
      <h2 className={styles.mainTitle}>{mainTitle}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

export default Title;
