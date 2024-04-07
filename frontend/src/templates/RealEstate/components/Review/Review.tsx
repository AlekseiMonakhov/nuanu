import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import reviewImage1 from '../../assets/images/5_cards/review1.svg';
import reviewImage2 from '../../assets/images/5_cards/review2.svg';
import reviewImage3 from '../../assets/images/5_cards/review3.svg';
import reviewLogo from '../../assets/images/5_cards/reviewLogo.svg';


const Review = () => {
    const reviews = [reviewImage1, reviewImage2, reviewImage3];

    return (
      <div className={styles.reviewSection}>
        <div className={styles.logoContainer}>
          <Image src={reviewLogo} alt='Review Logo' layout="responsive" width={363} height={54} />
        </div>
        <div className={styles.reviewContainer}>
          {reviews.map((image, index) => (
            <div key={index} className={styles.reviewCard}>
              <Image src={image} alt={`Review ${index + 1}`} layout="responsive" width={520} height={450} />
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Review;
