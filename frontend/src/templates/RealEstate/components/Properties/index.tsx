import React, { FC } from 'react';
import styles from './styles.module.scss';
import sliderImage1 from '../../assets/images/4_real-estate/3_Willow.png';
import sliderImage2 from '../../assets/images/2_slider/2_pic.png';
import sliderImage3 from '../../assets/images/4_real-estate/2_Phi_camp.png';
import sliderImage4 from '../../assets/images/4_real-estate/4_Oxo_2.png';
import Card from './Card';
import { CardProps } from './Card/types';

const mockProperties = [
  {
    "name": "OXO — Ecoverse",
    "title": "Eco-friendly tropical residences",
    "villas": 13,
    "apartments": 15,
    "startingPrice": 170000,
    "totalArea": 2512,
    "roomSizes": [52, 24],
    "roi": "up to 31.3%",
    "occupancy": "5-6 years",
    "delivery": "2024 year",
    "image": sliderImage2
  },
  {
    "name": "Phi camp",
    "title": "Eco resort & retreat centre",
    "villas": 13,
    "apartments": 15,
    "startingPrice": 170000,
    "totalArea": 2512,
    "roomSizes": [52, 24],
    "roi": "up to 31.3%",
    "occupancy": "5-6 years",
    "delivery": "2024 year",
    "image": sliderImage3
  },
  {
    "name": "Willow",
    "title": "Hotel & spa",
    "villas": 13,
    "apartments": 15,
    "startingPrice": 170000,
    "totalArea": 2512,
    "roomSizes": [52, 24],
    "roi": "up to 31.3%",
    "occupancy": "5-6 years",
    "delivery": "2024 year",
    "image": sliderImage1
  },
  {
    "name": "Oxo 2",
    "title": "Family townhouses",
    "villas": 13,
    "apartments": 15,
    "startingPrice": 170000,
    "totalArea": 2512,
    "roomSizes": [52, 24],
    "roi": "up to 31.3%",
    "occupancy": "5-6 years",
    "delivery": "2024 year",
    "image": sliderImage4
  }
]



const Properties: FC = () => {

  const scrollToForm = () => {
    document.getElementById("callBackRequestForm")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.properties}>
      {mockProperties.map((property, index) => (
        <Card key={index} {...property} />
      ))}
      <button onClick={scrollToForm} className={styles.requestButton}>Request entire catalog</button>
    </div>
  );
};

export default Properties;