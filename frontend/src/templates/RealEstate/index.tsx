import { FC } from 'react';
import Image from 'next/image';
import { IRealEstate } from './types';
import styles from './styles.module.scss';
// import slideImage1 from './assets/images/2_slider/1_pic.png';
// import slideImage2 from './assets/images/2_slider/2_pic.png';
import { useTemplate } from '../_hooks/useTemplate';
import FullScreenVideo from './components/FullScreenVideo';
import Gallery from './components/Gallery'
import { Footer } from '@/layout/Footer';
import CallBackRequestForm from './components/CallbackRequestForm';
import Review from './components/Review';
import Title from './components/Title';
import Infographics from './components/Infographics';
import Card from './components/Infographics/Card';

const RealEstate: FC<IRealEstate> = () => {
  useTemplate();

  return (
    <div className={styles.page}>
      <FullScreenVideo />
      <Title
        mainTitle="Nuanu is a place of the future on the map of Bali"
      />
      <Gallery /> 
      <Title
        mainTitle="A stylish hi-tech home for the price of an apartment"
      />
      <Infographics />
      <Title
        mainTitle="Our developers’ properties. Invest in it. Live in it. Rent it out."
      />
      <Title
        mainTitle="Bali: world’s #1 destination"
      />
      <Review />
      <Title
        mainTitle="Let your personal concierge make a special offer for you"
        subtitle="Fill out your contacts, and we will connect with you to answer all questions"
      />
      <CallBackRequestForm />
      <Footer theme='light' />
    </div >
  );
};

export default RealEstate;




//       {/* Секция 3: Слайдер */}
//       {/* Предполагаемая реализация с использованием компонентов Swiper */}
//       <section id="slider" className={styles.imageSlider}>
//         {/* Пример для одного слайда, повторить для остальных */}
//         <div className={styles.swiperSlide}>
//           <Image src={slideImage1} alt="Slide 1" layout="responsive" width={700} height={467} />
//           {/* Описание к слайду */}
//           <div className={styles.slideCaptionContainer}>
//             <span className={styles.leftCaption}>OXO - Ecoverse • Nuanu City • 120 m² / 210 m²</span>
//             <span className={styles.rightCaption}>12 villas • 15 apartments</span>
//           </div>
//         </div>
//         {/* Повторение для остальных слайдов */}
//       </section>

//       {/* Секция 4: Инфографика */}
//       <section id="infographics" className={styles.infoSection}>
//         <div className={styles.infoWrapper}>
//           <div className={styles.infoContent}>
//             <h1>Elevate living<br />through mindful<br />investment.</h1>
//             <p>Nuanu isn't just a place; it's an innovation in living. Invest in a property that grows with the community and the environment, promising more than just financial returns.</p>
//           </div>
//           {/* Место для карточек инфографики */}
//         </div>
//         <Image src={infoBackground} alt="Background" layout="responsive" width={700} height={467} />
//       </section>

//       {/* Секция 5: Недвижимость */}
//       {/* Пример реализации списка недвижимости */}
//       <section id="realEstate" className={styles.realEstateListing}>
//         {/* Контент будет добавлен динамически */}
//       </section>

