import { FC } from 'react';
import Image from 'next/image';
import { IRealEstate } from './types';
import styles from './styles.module.scss';
import backgroundVideo from './assets/videos/background.mp4';
import orderCallIcon from './assets/svg/Order-a-call-icon.svg';
import chatIcon from './assets/svg/Open-ßhat-icon.svg';
// import galleryImage1 from './assets/images/1_gallery/1-gallery-section.png';
// import galleryImage2 from './assets/images/1_gallery/2-gallery-section.png';
// import slideImage1 from './assets/images/2_slider/1_pic.png';
// import slideImage2 from './assets/images/2_slider/2_pic.png';
// import infoBackground from './assets/images/3_infographics/3_inf-sec.png';
// import formInteriorImage from './assets/images/6_form/1_form.png';
// import whatsappIcon from './assets/svg/whatsapp.svg';
// import forbesIcon from './assets/svg/forbesIcon.svg';
// import tradingEconomicsIcon from './assets/svg/tradIcom.svg';
// import bankIndonesiaIcon from './assets/svg/indonesia.svg';
import { useTemplate } from '../_hooks/useTemplate';

const RealEstate: FC<IRealEstate> = () => {
  useTemplate();

  return (
    <main className={styles.main}>
      {/* Секция 1 */}
      <section id="home" className={styles.fullscreenVideo}>
        <h1 className={styles.homeTitle}>
          Time to
          <br /> invest in
          <br /> Nuanu</h1>
        <video src={backgroundVideo}
          loop
          autoPlay
          muted
          className={styles.videoBg} />
        <div className={styles.callToAction}>
          <a href="#formSection" className={styles.buttonPrimary}>
            <Image src={orderCallIcon}
              alt="Order a call"
              width={24}
              height={24}
              className={styles.icon} />
            Order a call
          </a>
          <button id="openChat" className={styles.buttonSecondary}>
            <Image src={chatIcon}
              alt="Chat icon"
              width={24}
              height={24}
              className={styles.icon} />
            Open chat
          </button>
        </div>
      </section>
      <div className={styles.captionBox}>
        Nuanu is a place of the future on the map of Bali
      </div>
</main>
  );
};

export default RealEstate;
