import React, { FC } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import reviewLogo from '../../assets/images/5_cards/reviewLogo.svg';

interface Review {
  source: string;
  review: string;
  date: string;
}

interface ReviewProps {
  reviews: Review[];
}

const Review: FC<ReviewProps> = ({ reviews }) => {
  return (
    <div className={styles.reviewSection}>
      <div className={styles.logoContainer}>
        <Image src={reviewLogo} alt='Review Logo' layout="responsive" width={363} height={54} />
      </div>
      <div className={styles.reviewContainer}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.reviewCard}>
            <p className={styles.reviewSource}>{review.source}</p>
            <p className={styles.reviewText}>{review.review}</p>
            <p className={styles.reviewDate}>{review.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
