import { FC, memo } from 'react';
import cn from 'classnames';
import { DynamicImage } from '@/components/Media/DynamicImage';
import Link from 'next/link';
import { IProps } from './types';
import styles from './styles.module.scss';
import { useDates } from './useDates';

const Component: FC<IProps> = ({
  className,
  style,
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
      className={cn(className, styles.events_item)}
      style={style}
      href={href}
      target="_blank"
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

Component.displayName = 'EventsItem';

export const EventsItem = memo(Component);
