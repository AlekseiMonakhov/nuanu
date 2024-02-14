import { FC, memo } from 'react';
import cn from 'classnames';
import { DynamicImage } from '@/components/Media/DynamicImage';
import { useStoreLexicon } from '@/store/reducers/page';
import { getShortDate } from '@/utils/dates/getShortDate';
import { getTimeRange } from '@/utils/dates/getTimeRange';
import { IProps } from './types';
import styles from './styles.module.scss';

const Component: FC<IProps> = ({
  className,
  style,
  image,
  title,
  startTime,
  endTime,
  location,
}) => {
  const { events: lexicon } = useStoreLexicon();

  return (
    <div className={cn(className, styles.events_info_screen)} style={style}>
      <div className={styles.image}>
        <DynamicImage {...image} />
      </div>

      <div className={styles.container}>
        <div className={styles.back_button}>back</div>

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
    </div>
  );
};

Component.displayName = 'EventsInfoScreen';

export const EventsInfoScreen = memo(Component);
