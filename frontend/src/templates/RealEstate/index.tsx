import React, { FC, useEffect, useState } from 'react';
import { fetchRealEstateData } from './utils/fetchData';
import styles from './styles.module.scss';
import FullScreenVideo from './components/FullScreenVideo';
import Gallery from './components/Gallery';
import { Footer } from '@/layout/Footer';
import CallBackRequestForm from './components/CallbackRequestForm';
import Review from './components/Review';
import Title from './components/Title';
import Infographics from './components/Infographics';
import Swiper from './components/Swiper';
import Properties from './components/Properties';
import CallToActionGroup from './components/CallToActionGroup';
import { useTemplate } from '../_hooks/useTemplate';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const RealEstate: FC = () => {

  const [mainTitle, setMainTitle] = useState('');
  const [galleryTitle, setGalleryTitle] = useState('');
  const [swiperTitle, setSwiperTitle] = useState('');
  const [propertiesTitle, setPropertiesTitle] = useState('');
  const [reviewTitle, setReviewTitle] = useState('');
  const [callbackFormTitle, setCallbackFormTitle] = useState('');
  const [callbackFormSubtitle, setCallbackFormSubtitle] = useState('');

  const [properties, setProperties] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [swiperItems, setSwiperItems] = useState([]);
  const [infographicsTitle, setInfographicsTitle] = useState('');
  const [infographicsSubtitle, setInfographicsSubtitle] = useState('');
  const [infographicsCards, setInfographicsCards] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [callbackForm, setCallbackForm] = useState({ phone: '', whatsapp: '', src: '' });

  useEffect(() => {
    fetchRealEstateData()
      .then((data) => {
        setMainTitle(data.main.title);
        setGalleryTitle(data.galleryTitle.title);
        setSwiperTitle(data.swiperTitle.title);
        setPropertiesTitle(data.propertiesTitle.title);
        setReviewTitle(data.reviewTitle.title);
        setCallbackFormTitle(data.callbackFormTitle.title);
        setCallbackFormSubtitle(data.callbackFormTitle.subtitle);

        setProperties(data.properties.data);
        setGallery(data.gallery.data);
        setSwiperItems(data.swiperItems.data);
        setInfographicsTitle(data.infographics.data[0].title);
        setInfographicsSubtitle(data.infographics.data[0].subtitle);
        setInfographicsCards(data.infographicsCard);
        setReviews(data.review.data);
        setCallbackForm(data.callBackRequestForm.data[0]);
      })
      .catch((error) => console.error('Error fetching real estate data:', error));
  }, []);

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
      <FullScreenVideo mainTitle={mainTitle} />
      <CallToActionGroup />
      <Title mainTitle={galleryTitle} />
      <Gallery items={gallery} />
      <Title mainTitle={swiperTitle} />
      <Swiper properties={swiperItems} />
      <Infographics 
        title={infographicsTitle} 
        subtitle={infographicsSubtitle} 
        cards={infographicsCards} 
      />
      <Title mainTitle={propertiesTitle} />
      <Properties properties={properties} />
      <Title mainTitle={reviewTitle} />
      <Review reviews={reviews} />
      <Title mainTitle={callbackFormTitle} subtitle={callbackFormSubtitle} />
      <CallBackRequestForm data={callbackForm} /> 
      <Footer theme='light' />
    </div>
  );
};

export default RealEstate;
