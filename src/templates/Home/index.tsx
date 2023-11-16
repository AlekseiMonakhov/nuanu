import { FC, useMemo, useRef } from 'react';
import { StoriesFullScreen } from '@/components/Stories/FullScreen';
import { times } from '@anton.bobrov/vevet-init';
import { useEvent } from '@anton.bobrov/react-hooks';
import { useStoreLexicon } from '@/store/reducers/page';
import { IHome } from './types';
import { useTemplate } from '../_hooks/useTemplate';
import { HomeSectionSlider } from './components/SectionSlider';
import { HomeFeatures } from './components/Features';
import styles from './styles.module.scss';
import { HomeInside } from './components/Inside';

const Home: FC<IHome> = ({ stories }) => {
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
      <HomeSectionSlider
        className={styles.slider}
        names={sectionNames}
        onEndProgress={renderEnd}
      >
        {stories && <StoriesFullScreen {...stories} />}

        <HomeInside />

        <HomeFeatures />
      </HomeSectionSlider>

      <div ref={pageRef} className={styles.page}>
        {times(
          (index) => (
            <div key={index}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              nihil facere, dolor placeat eaque minus, exercitationem at
              praesentium vero enim ducimus ad aliquam, sed perferendis sunt
              consequatur amet maxime? Esse.
            </div>
          ),
          100,
        )}
      </div>
    </>
  );
};

export default Home;
