import { FC } from 'react';
import { Footer } from '@/layout/Footer';
import { useStoreLexicon } from '@/store/reducers/page';
import { GoogleMap } from '@/components/Map/Google';
import { useTemplate } from '../../_hooks/useTemplate';
import styles from './styles.module.scss';
import { IEventsInfo } from './types';
import { EventsInfoScreen } from './components/Screen';
import { EventsInfoRichContent } from './components/RichContent';
import { AsideWrapper } from './components/AsideWrapper';
import { SocialShare } from '../../../components/SocialShare';

const EventsInfo: FC<IEventsInfo> = ({
  image,
  title,
  startTime,
  endTime,
  location,
  richContent,
  minAge,
  organizer,
}) => {
  useTemplate();

  const { events: lexicon } = useStoreLexicon();

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

        <aside className={styles.layout__aside}>
          <div className={styles.cta} />

          {location && (
            <AsideWrapper
              title={lexicon.address}
              value={location.address}
              href={`https://maps.google.com/?q=${location.lat},${location.lng}`}
            >
              <GoogleMap {...location} label={location.name} />
            </AsideWrapper>
          )}

          {minAge && <AsideWrapper title={lexicon.minAge} value={minAge} />}

          {organizer && (
            <AsideWrapper
              title={lexicon.organizer}
              value={organizer.name}
              href={organizer.href}
            />
          )}

          <AsideWrapper title={lexicon.share}>
            <SocialShare />
          </AsideWrapper>
        </aside>
      </div>

      <Footer />
    </div>
  );
};

export default EventsInfo;
