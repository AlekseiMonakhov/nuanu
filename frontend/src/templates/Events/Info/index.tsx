import { FC } from 'react';
import { Footer } from '@/layout/Footer';
import { useTemplate } from '../../_hooks/useTemplate';
import styles from './styles.module.scss';
import { IEventsInfo } from './types';
import { EventsInfoScreen } from './components/Screen';
import { EventsInfoRichContent } from './components/RichContent';

const EventsInfo: FC<IEventsInfo> = ({
  image,
  title,
  startTime,
  endTime,
  location,
  richContent,
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

      <div className={styles.layout}>
        <main className={styles.layout__main}>
          <EventsInfoRichContent items={richContent} />
        </main>

        <aside className={styles.layout__aside}>aside</aside>
      </div>

      <Footer />
    </div>
  );
};

export default EventsInfo;
