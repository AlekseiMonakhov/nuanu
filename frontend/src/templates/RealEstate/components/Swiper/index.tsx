import React, { FC, useState } from 'react';
import styles from './styles.module.scss'; 
import sliderImage1 from '../../assets/images/4_real-estate/3_Willow.png';
import sliderImage2 from '../../assets/images/2_slider/2_pic.png';
import sliderImage3 from '../../assets/images/4_real-estate/2_Phi_camp.png';
import sliderImage4 from '../../assets/images/4_real-estate/4_Oxo_2.png';
import Card from './Card';
import { CardProps } from './Card/types';

const slides: CardProps[] = [
  {
    src: sliderImage2,
    alt: 'OXO Ecoverse',
    title: 'OXO Ecoverse',
    city: 'Nuanu City',
    area: '120 m² / 210 m²',
    details: '12 villas • 15 apartments'
  },
  {
    src: sliderImage1,
    alt: 'Willow Hotel & spa',
    title: 'Willow Hotel',
    city: 'Hotel & spa',
    area: '150 m² / 250 m²',
    details: '10 villas • 20 apartments'
  },
  {
    src: sliderImage3,
    alt: 'Phi camp',
    title: 'Phi camp',
    city: 'Eco resort & retreat centre',
    area: '130 m² / 220 m²',
    details: '15 villas • 25 apartments'
  },
  {
    src: sliderImage4,
    alt: 'Oxo 2 Family townhouses',
    title: 'Oxo 2 Family townhouses',
    city: 'Nuanu City',
    area: '140 m² / 230 m²',
    details: '14 villas • 16 apartments'
  },
];

const Swiper: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className={styles.reviewContainer} onClick={nextSlide}>
       {slides.map((slide, index) => (
        <div key={index} className={styles.slideWrapper} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          <Card {...slide} />
        </div>
       ))}
      </div>
  );
};

export default Swiper;