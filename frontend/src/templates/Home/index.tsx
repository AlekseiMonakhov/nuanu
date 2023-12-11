import { FC, useRef } from 'react';
import { StoriesFullScreen } from '@/components/Stories/FullScreen';
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
import { HomePersonTypes } from './components/PersonTypes';

const HASSECTIONSLIDER = true;

const Home: FC<IHome> = ({
  stories,
  inside,
  longRead,
  paragraphs,
  personTypes,
}) => {
  useTemplate();

  const pageRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {HASSECTIONSLIDER && (
        <HomeSectionSlider className={styles.slider} belowRef={pageRef}>
          {stories && <StoriesFullScreen {...stories} />}

          {inside && <HomeInside {...inside} />}

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

        {personTypes && (
          <HomePersonTypes className={styles.person_types} {...personTypes} />
        )}

        <Footer />
      </div>
    </>
  );
};

export default Home;
