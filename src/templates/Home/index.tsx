import { FC } from 'react';
import { StoriesFullScreen } from '@/components/Stories/FullScreen';
import { IHome } from './types';
import { useTemplate } from '../_hooks/useTemplate';
import { HomeSectionSlider } from './components/SectionSlider';
import { HomeFeatures } from './components/Features';

const Home: FC<IHome> = ({ stories }) => {
  useTemplate();

  return (
    <HomeSectionSlider>
      {stories && <StoriesFullScreen key={0} {...stories} />}

      <HomeFeatures key={1} />
    </HomeSectionSlider>
  );
};

export default Home;
