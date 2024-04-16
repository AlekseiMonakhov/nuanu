import { FC, useEffect } from 'react';
import { IRealEstate } from './types';
import styles from './styles.module.scss';
import { useTemplate } from '../_hooks/useTemplate';
import FullScreenVideo from './components/FullScreenVideo';
import Gallery from './components/Gallery'
import { Footer } from '@/layout/Footer';
import CallBackRequestForm from './components/CallbackRequestForm';
import Review from './components/Review';
import Title from './components/Title';
import Infographics from './components/Infographics';
import Swiper from './components/Swiper';
import Properties from './components/Properties';
import CallToActionGroup from './components/CallToActionGroup';


declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}


const RealEstate: FC<IRealEstate> = () => {
  useTemplate();


  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-SCNYEJ1YH9';
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function(){ window.dataLayer.push(arguments); }
      window.gtag('js', new Date());
      window.gtag('config', 'G-SCNYEJ1YH9');
    };

    return () => {
      document.head.removeChild(script);
    }
  }, []);

  return (
    <div className={styles.page}>
      <FullScreenVideo />
      <CallToActionGroup />
      <Title
        mainTitle="Nuanu is a place of the future on the map of Bali"
      />
      <Gallery />
      <Title
        mainTitle="A stylish hi-tech home for the price of an apartment"
      />
      <Swiper />
      <Infographics />
      <Title
        mainTitle="Our developers’ properties. Invest in it. Live in it. Rent it out."
      />
      <Properties />
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