import { FC } from 'react';
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
      <Swiper />
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