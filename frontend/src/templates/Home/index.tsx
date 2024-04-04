import { FC, useRef, useState } from 'react';
import { StoriesFullScreen } from '@/components/Stories/FullScreen';
import { Footer } from '@/layout/Footer';
import cn from 'classnames';
import { IHome } from './types';
import { useTemplate } from '../_hooks/useTemplate';
import { HomeSectionSlider } from './components/SectionSlider';
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

  const [sliderTargetIndex, setSliderTargetIndex] = useState(0);

  return (
    <>
      {HASSECTIONSLIDER && (
        <HomeSectionSlider
          className={styles.slider}
          belowRef={pageRef}
          onTargetUpdate={setSliderTargetIndex}
        >
          {stories && <StoriesFullScreen {...stories} />}

          {inside && <HomeInside {...inside} />}

          {/* <HomeFeatures /> */}
        </HomeSectionSlider>
      )}

      <div
        ref={pageRef}
        className={cn(
          styles.page,
          HASSECTIONSLIDER && styles.is_default_hidden,
        )}
      >
        {longRead && (
          <HomeLongRead
            {...longRead}
            shouldRenderMedia={HASSECTIONSLIDER ? sliderTargetIndex > 1 : true}
          />
        )}

        {paragraphs && (
          <HomeParagraphs {...paragraphs} hasExtraTopPadding={!longRead} />
        )}

        {personTypes && (
          <HomePersonTypes className={styles.person_types} {...personTypes} />
        )}

        <Footer />
      </div>
    </>
  );
};

export default Home;
