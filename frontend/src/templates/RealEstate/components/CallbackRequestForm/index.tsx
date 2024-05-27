import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import watsappIcon from '../../assets/svg/whatsapp.svg';
import { ICallBackProps } from "./types"

const CallBackRequestForm: FC<ICallBackProps> = ({ data }) => {
  const { phone, whatsapp, src } = data;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
  });

  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div id="callBackRequestForm" className={styles.page}>
      <div className={styles.callBackRequestFormContainer}>
        <div className={styles.formContainer}>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className={styles.callBackRequestForm}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className={styles.inputField}
                required
                onChange={handleInputChange}
                pattern="[A-Za-z]{1,14}"
                title="Name should only contain letters. e.g. John"
                maxLength={14}
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone number"
                className={styles.inputField}
                required
                onChange={handleInputChange}
                pattern="[0-9]{1,14}"
                title="Phone number should only contain numbers. e.g. 1234567890"
                maxLength={14}
              />
              <button type="submit" className={styles.submitButton}>Book a call</button>
              <p className={styles.contactText}>
                If you prefer, contact us via
                {' '}
                <a
                  href={whatsapp}
                  className={styles.whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={watsappIcon} alt={'watsappIcon'} /> WhatsApp
                </a>
                <br /> or call us at
                {' '}
                <a
                  className={styles.whatsAppLink}
                  href={`tel:${phone}`}               >
                  {phone}
                </a>
              </p>
            </form>
          ) : (
            <div className={styles.callBackRequestForm}>
              <p className={styles.confirmationMessage}>
                Thank you! Your personal concierge will be in touch<br /> with you shortly at {formData.phoneNumber}
              </p>
              <button type="button" className={`${styles.submitButton} ${styles.submitButtonSuccess}`}>
                ✓
              </button>
              <p className={styles.contactText}>
                If you prefer, contact us via
                {' '}
                <a
                  href={whatsapp}
                  className={styles.whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={watsappIcon} alt={'watsappIcon'} /> WhatsApp
                </a>
                <br /> or call us at
                {' '}
                <a
                  className={styles.whatsAppLink}
                  href={`tel:${phone}`}               >
                  {phone}
                </a>
              </p>
            </div>
          )}
        </div>
        <div className={styles.imageContainer} style={{ backgroundImage: `url(${src})` }} />
      </div>
    </div>
  );
};

export default CallBackRequestForm;
