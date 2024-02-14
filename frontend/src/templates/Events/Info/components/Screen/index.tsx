import { FC, memo, useRef } from 'react';
import cn from 'classnames';
import { DynamicImage } from '@/components/Media/DynamicImage';
import { useStoreLexicon } from '@/store/reducers/page';
import { getShortDate } from '@/utils/dates/getShortDate';
import { getTimeRange } from '@/utils/dates/getTimeRange';
import { useHeaderIntersectionTheme } from '@/utils/hooks/useHeaderIntersectionTheme';
import { IProps } from './types';
import styles from './styles.module.scss';
import { BackButton } from './BackButton';

const Component: FC<IProps> = ({
  className,
  style,
  image,
  title,
  startTime,
  endTime,
  location,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { events: lexicon } = useStoreLexicon();

  useHeaderIntersectionTheme(ref, 'dark', 'light');

  return (
    <section
      ref={ref}
      className={cn(className, styles.events_info_screen)}
      style={style}
    >
      <div className={styles.image}>
        <DynamicImage {...image} />
      </div>

      <div className={styles.container}>
        <BackButton className={styles.back_button} />

        <div className={styles.content}>
          {title && (
            <h1
              className={styles.title}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}

          <div className={styles.info}>
            <div>
              <p>{lexicon.date}</p>
              <p>{getShortDate(startTime)}</p>
            </div>

            <div>
              <p>{lexicon.time}</p>
              <p>{getTimeRange(startTime, endTime)}</p>
            </div>

            {location && (
              <div>
                <p>{lexicon.location}</p>
                <p>{location.name}</p>
              </div>
            )}
          </div>

          <div className={styles.cta} />
        </div>
      </div>
    </section>
  );
};

Component.displayName = 'EventsInfoScreen';

export const EventsInfoScreen = memo(Component);
