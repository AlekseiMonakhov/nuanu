import { FC } from 'react';
import { DynamicImage } from '@/components/Media/DynamicImage';
import Link from 'next/link';
import { IProps } from './types';
import styles from './styles.module.scss';
import { useDates } from './useDates';

export const EventsItem: FC<IProps> = ({
  href,
  image,
  startTime,
  endTime,
  type,
  title,
  place,
  price,
}) => {
  const { dayNumber, month, time } = useDates(startTime, endTime);

  return (
    <Link
      className={styles.events_item}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.image}>
        {image && <DynamicImage {...image} />}

        <div className={styles.date}>
          <b>{dayNumber}</b>
          <span>{month}</span>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.base_info}>
          {type && (
            <p
              className={styles.type}
              dangerouslySetInnerHTML={{ __html: type }}
            />
          )}

          {title && (
            <p
              className={styles.title}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}
        </div>

        <div className={styles.order_info}>
          <div className={styles.order_info__text}>
            {time && (
              <>
                <span>{time}</span>
                <br />
              </>
            )}

            <span>{place}</span>
          </div>

          <div className={styles.order_info__button}>{price}</div>
        </div>
      </div>
    </Link>
  );
};
