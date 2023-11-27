import { FC, useRef } from 'react';
import { StoriesFullScreen } from '@/components/Stories/FullScreen';
import { useEvent } from '@anton.bobrov/react-hooks';
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
import { useSectionNames } from './utils/useSectionNames';

const HASSECTIONSLIDER = true;

const Home: FC<IHome> = ({ stories, longRead, paragraphs }) => {
  useTemplate();

  const pageRef = useRef<HTMLDivElement>(null);

  const renderEnd = useEvent((progress: number) => {
    if (!pageRef.current) {
      return;
    }

    pageRef.current.style.opacity = `${progress}`;
  });

  const secitonNames = useSectionNames({ hasStories: !!stories });

  return (
    <>
      {HASSECTIONSLIDER && (
        <HomeSectionSlider
          className={styles.slider}
          names={secitonNames}
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
