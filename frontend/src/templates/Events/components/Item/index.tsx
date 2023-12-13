import { FC, memo } from 'react';
import { DynamicImage } from '@/components/Media/DynamicImage';
import Link from 'next/link';
import cn from 'classnames';
import { isString } from '@anton.bobrov/react-hooks';
import { BuyButton } from '@/components/Button/Buy';
import { useStoreLexicon } from '@/store/reducers/page';
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

  const { events: lexicon } = useStoreLexicon();

  return (
    <Link
      className={cn(className, styles.events_item)}
      style={style}
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
          {type && <p className={styles.type}>{type}</p>}

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

          {isString(price) && (
            <BuyButton
              tag="button"
              type="button"
              text={price === '0' ? lexicon.free : lexicon.tickets}
              price={price === '0' ? null : price}
              hasOverlayHover={price !== '0'}
              overlayHoverText={lexicon.buyTickets}
            />
          )}
        </div>
      </div>
    </Link>
  );
};

Component.displayName = 'EventsItem';

export const EventsItem = memo(Component);
