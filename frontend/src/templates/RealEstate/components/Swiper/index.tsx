import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './styles.module.scss';
import Card from './Card';
import { CardProps } from './Card/types';
import sliderImage1 from '../../assets/images/2_slider/1_pic.png';
import sliderImage2 from '../../assets/images/2_slider/2_pic.png';
import sliderImage3 from '../../assets/images/2_slider/3_pic.png';
import sliderImage4 from '../../assets/images/2_slider/4_pic.png'

const slides: CardProps[] = [
  {
    src: sliderImage1,
    alt: 'sliderImage1',
    title: 'OXO Ecoverse',
    city: 'Nuanu sity',
    area: '120 m² / 210 m²',
    details:'12 villas • 15 apartments'
  },
  {
    src: sliderImage2,
    alt: 'sliderImage2',
    title: 'OXO Ecoverse',
    city: 'Nuanu sity',
    area: '120 m² / 210 m²',
    details:'12 villas • 15 apartments'
  },
  {
    src: sliderImage3,
    alt: 'sliderImage3',
    title: 'OXO Ecoverse',
    city: 'Nuanu sity',
    area: '120 m² / 210 m²',
    details:'12 villas • 15 apartments'
  },
  {
    src: sliderImage4,
    alt: 'sliderImage4',
    title: 'OXO Ecoverse',
    city: 'Nuanu sity',
    area: '120 m² / 210 m²',
    details:'12 villas • 15 apartments'
  },
];

const Slider: FC = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className={styles.swiper} 
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className={styles.swiperSlide}> 
          <Card {...slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
