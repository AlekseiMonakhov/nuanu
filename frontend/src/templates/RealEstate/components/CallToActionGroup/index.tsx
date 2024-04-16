import React, { useState, useEffect, FC } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import orderCallIcon from '../../assets/svg/Order-a-call-icon.svg';
import chatIcon from '../../assets/svg/Open-ßhat-icon.svg';


const CallToActionGroup: FC = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToForm = () => {
    document.getElementById("callBackRequestForm")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`${styles.callToAction} ${scrolled ? styles.scrolled : ''}`}>
      <button onClick={scrollToForm} className={`${styles.buttonPrimary} ${scrolled ? styles.scrolled : ''}`}>
        <Image src={orderCallIcon} alt="Order a call" className={styles.icon1} />
        Order a call
      </button>
      <button id="openChat" className={`${styles.buttonSecondary} ${scrolled ? styles.scrolled : ''}`}>
        <Image src={chatIcon} alt="Chat icon" className={styles.icon2} />
        Open chat
      </button>
    </div>
  );
};

export default CallToActionGroup;
