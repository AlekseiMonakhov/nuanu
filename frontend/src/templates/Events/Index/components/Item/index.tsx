import { FC, memo, useRef } from 'react';
import { DynamicImage } from '@/components/Media/DynamicImage';
import Link from 'next/link';
import cn from 'classnames';
import { isString } from '@anton.bobrov/react-hooks';
import { BuyButton } from '@/components/Button/Buy';
import { useStoreLexicon } from '@/store/reducers/page';
import { useNonMobilePointerHover } from '@anton.bobrov/react-vevet-hooks';
import { getMonth } from '@/utils/dates/getMonth';
import { getDayNumber } from '@/utils/dates/getDayNumber';
import { getTimeRange } from '@/utils/dates/getTimeRange';
import { IProps } from './types';
import styles from './styles.module.scss';

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

  const month = getMonth(startTime);
  const dayNumber = getDayNumber(startTime);
  const time = getTimeRange(startTime, endTime);

  const { events: lexicon } = useStoreLexicon();

  const isHovered = useNonMobilePointerHover(ref);

  return (
    <Link
      ref={ref}
      className={cn(className, styles.events_item)}
      style={style}
      href={href}
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
