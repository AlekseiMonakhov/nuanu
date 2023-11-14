import { FC } from 'react';
import { StoriesFullScreen } from '@/components/Stories/FullScreen';
import { IHome } from './types';
import { useTemplate } from '../_hooks/useTemplate';
import { HomeSectionSlider } from './components/SectionSlider';

const Home: FC<IHome> = ({ stories }) => {
  useTemplate();

  return (
    <HomeSectionSlider>
      {stories && <StoriesFullScreen key={0} {...stories} />}
      {stories && <StoriesFullScreen key={1} {...stories} />}
    </HomeSectionSlider>
  );
};

export default Home;
