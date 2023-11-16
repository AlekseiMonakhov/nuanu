import { FC, useRef } from 'react';
import { StoriesFullScreen } from '@/components/Stories/FullScreen';
import { times } from '@anton.bobrov/vevet-init';
import { useEvent } from '@anton.bobrov/react-hooks';
import { IHome } from './types';
import { useTemplate } from '../_hooks/useTemplate';
import { HomeSectionSlider } from './components/SectionSlider';
import { HomeFeatures } from './components/Features';
import styles from './styles.module.scss';

const Home: FC<IHome> = ({ stories }) => {
  useTemplate();

  const pageRef = useRef<HTMLDivElement>(null);

  const renderEnd = useEvent((progress: number) => {
    if (!pageRef.current) {
      return;
    }

    pageRef.current.style.opacity = `${progress}`;
  });

  return (
    <>
      <HomeSectionSlider className={styles.slider} onEndProgress={renderEnd}>
        {stories && <StoriesFullScreen {...stories} />}

        <HomeFeatures />

        {stories && <StoriesFullScreen {...stories} />}
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
