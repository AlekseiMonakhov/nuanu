import { FC, memo, useRef } from 'react';
import { DynamicImage } from '@/components/Media/DynamicImage';
import Link from 'next/link';
import cn from 'classnames';
import { isString } from '@anton.bobrov/react-hooks';
import { BuyButton } from '@/components/Button/Buy';
import { useStoreLexicon } from '@/store/reducers/page';
import { useNonMobilePointerHover } from '@anton.bobrov/react-vevet-hooks';
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
  location,
  price,
}) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const { dayNumber, month, time } = useDates(startTime, endTime);

  const { events: lexicon } = useStoreLexicon();

  const isHovered = useNonMobilePointerHover(ref);

  return (
    <Link
      ref={ref}
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

            {location && <span>{location.name}</span>}
          </div>

          {isString(price) && (
            <BuyButton
              tag="button"
              type="button"
              text={price === '0' ? lexicon.free : lexicon.tickets}
              price={price === '0' ? null : price}
              hoverText={price === '0' ? lexicon.register : lexicon.getTickets}
              isHovered={isHovered}
            />
          )}
        </div>
      </div>
    </Link>
  );
};

Component.displayName = 'EventsItem';

export const EventsItem = memo(Component);
