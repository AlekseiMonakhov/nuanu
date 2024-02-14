import { FC } from 'react';
import { Footer } from '@/layout/Footer';
import { useTemplate } from '../../_hooks/useTemplate';
import styles from './styles.module.scss';
import { IEventsInfo } from './types';
import { EventsInfoScreen } from './components/Screen';

const EventsInfo: FC<IEventsInfo> = ({
  image,
  title,
  startTime,
  endTime,
  location,
}) => {
  useTemplate();

  return (
    <div className={styles.page}>
      <EventsInfoScreen
        image={image}
        title={title}
        startTime={startTime}
        endTime={endTime}
        location={location}
      />

      <Footer />
    </div>
  );
};

export default EventsInfo;
