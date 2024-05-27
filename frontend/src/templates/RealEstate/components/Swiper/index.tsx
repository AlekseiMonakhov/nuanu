import React, { FC, useState } from 'react';
import styles from './styles.module.scss'; 
import Card from './Card';
import { IProperty } from './types';

interface Props {
  properties: IProperty[]; 
}

const Swiper: FC<Props> = ({ properties }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % properties.length);
  };

  return (
    <div className={styles.reviewContainer} onClick={nextSlide}>
      {properties.map((property, index) => (
        <div key={index} className={styles.slideWrapper} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          <Card {...property} />
        </div>
      ))}
    </div>
  );
};

export default Swiper;
