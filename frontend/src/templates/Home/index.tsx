import { FC, useMemo, useRef } from 'react';
import { StoriesFullScreen } from '@/components/Stories/FullScreen';
import { useEvent } from '@anton.bobrov/react-hooks';
import { useStoreLexicon } from '@/store/reducers/page';
import { Footer } from '@/layout/Footer';
import cn from 'classnames';
import { IHome } from './types';
import { useTemplate } from '../_hooks/useTemplate';
import { HomeSectionSlider } from './components/SectionSlider';
import { HomeFeatures } from './components/Features';
import styles from './styles.module.scss';
import { HomeInside } from './components/Inside';
import { HomeLongRead } from './components/LongRead';
import { HomeParagraphs } from './components/Paragraphs';

const HASSECTIONSLIDER = true;

const Home: FC<IHome> = ({ stories, longRead, paragraphs }) => {
  useTemplate();

  const pageRef = useRef<HTMLDivElement>(null);

  const { home: lexicon } = useStoreLexicon();

  const renderEnd = useEvent((progress: number) => {
    if (!pageRef.current) {
      return;
    }

    pageRef.current.style.opacity = `${progress}`;
  });

  const sectionNames = useMemo(
    () => ['Stories', lexicon.inside.title, lexicon.features.title, 'Site'],
    [lexicon.features.title, lexicon.inside.title],
  );

  return (
    <>
      {HASSECTIONSLIDER && (
        <HomeSectionSlider
          className={styles.slider}
          names={sectionNames}
          onEndProgress={renderEnd}
        >
          {stories && <StoriesFullScreen {...stories} />}

          <HomeInside />

          <HomeFeatures />
        </HomeSectionSlider>
      )}

      <div
        ref={pageRef}
        className={cn(
          styles.page,
          HASSECTIONSLIDER && styles.is_default_hidden,
        )}
      >
        {longRead && <HomeLongRead {...longRead} />}

        {paragraphs && <HomeParagraphs {...paragraphs} />}

        <Footer />
      </div>
    </>
  );
};

export default Home;
