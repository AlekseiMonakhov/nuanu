import { FC } from 'react';
import Image from 'next/image';
import { IRealEstate } from './types';
import styles from './styles.module.scss';
// import slideImage1 from './assets/images/2_slider/1_pic.png';
// import slideImage2 from './assets/images/2_slider/2_pic.png';
// import infoBackground from './assets/images/3_infographics/3_inf-sec.png';
// import formInteriorImage from './assets/images/6_form/1_form.png';
// import whatsappIcon from './assets/svg/whatsapp.svg';
// import forbesIcon from './assets/svg/forbesIcon.svg';
// import tradingEconomicsIcon from './assets/svg/tradIcom.svg';
// import bankIndonesiaIcon from './assets/svg/indonesia.svg';
import { useTemplate } from '../_hooks/useTemplate';
import FullScreenVideo from './components/FullScreenVideo/FullScreenVideo';
import Gallery from './components/Gallery/Gallery';
import { Footer } from '@/layout/Footer';

const RealEstate: FC<IRealEstate> = () => {
  useTemplate();

  return (
    <div className={styles.page}>
        <FullScreenVideo />
        <Gallery />
        <Footer theme='light'/> 
      </div >
  );
};

export default RealEstate;



// const Accommodation: FC = () => {
//   // Хук useTemplate для работы с шаблоном страницы (пример)
//   // useTemplate();

//   return (
//     <main className={styles.main}>
//       {/* Секция 1:  */}
//       <section id="home" className={styles.fullscreenVideo}>
//         <h1 className={styles.homeTitle}>Time to invest<br />in Nuanu</h1>
//         <video src={backgroundVideo} loop autoPlay muted />
//         <div className={styles.callToAction}>
//           <a href="#formSection" className={styles.buttonPrimary}>
//             <Image src={orderCallIcon} alt="Order a call" width={24} height={24} />
//             Order a call
//           </a>
//           <button id="openChat" className={styles.buttonSecondary}>
//             Open chat
//             <Image src={chatIcon} alt="Chat icon" width={24} height={24} />
//           </button>
//         </div>
//       </section>

//       {/* Секция 2: Фотогалерея */}
//       {/* Полная реализация фотогалереи с импортированными изображениями */}
//       <section id="gallery" className={styles.photoGallery}>
//         {/* Пример для одной фигуры, повторить для остальных */}
//         <figure className={styles.photoItem}>
//           <Image src={galleryImage1} alt="Gallery 1" layout="responsive" width={700} height={467} />
//           {/* Описание к изображению */}
//           <figcaption className={styles.caption}>
//             <h2>Nuanu is Bali's major infrastructure projects highlight</h2>
//             <p>That will attract 5 000 tourists a day</p>
//           </figcaption>
//         </figure>
//         {/* Повторение для остальных элементов галереи */}
//       </section>

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

//       {/* Секция 6: Отзывы */}
//       <section id="reviews" className={styles.reviewsSection}>
//         <h1>Bali: world’s #1 destination</h1>
//         <div className={styles.asSeenInContainer}>
//           <h4>As seen in:</h4>
//           <div className={styles.logos}>
//             <Image src={forbesIcon} alt="Forbes" />
//             <Image src={tradingEconomicsIcon} alt="Trading Economics" />
//             <Image src={bankIndonesiaIcon} alt="Bank Indonesia" />
//             {/* Повторение для остальных логотипов */}
//           </div>
//         </div>
//         {/* Пример карточки отзыва, повторить для остальных */}
//         <div className={styles.reviewCard}>
//           <div className={styles.reviewCardHeader}>
//             <span className={styles.source}>Forbes</span>
//             {/* Ссылка на оригинальный источник */}
//           </div>
//           <p>Bali is consistently awarded the top destinations in the world, and boasts the prime choice for property investment in Asia.</p>
//           <p className={styles.date}>30 December 2023</p>
//         </div>
//         {/* Повторение для остальных отзывов */}
//       </section>

//       {/* Секция 7: Форма */}
//       <section id="formSection" className={styles.contactForm}>
//         {/* Полная реализация формы */}
//         <form method="post">
//           <input type="text" id="name" name="name" placeholder="Your name" required />
//           <input type="tel" id="phone" name="phone" placeholder="Phone number" required />
//           <button type="submit">Book a call</button>
//         </form>
//         {/* Дополнительная контактная информация */}
//         <div className={styles.additionalContact}>
//           {/* Контакты для связи */}
//         </div>
//         <Image src={formInteriorImage} alt="Interior" layout="fill" />
//       </section>
//     </main>
//   );
// };

// export default Accommodation;
