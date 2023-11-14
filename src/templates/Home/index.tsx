import { FC } from 'react';
import { PageScroll } from '@anton.bobrov/react-components';
import { LayoutContainer } from '@/layout/Container';
import { StoriesFullScreen } from '@/components/Stories/FullScreen';
import { IHome } from './types';
import { registry } from './registry';
import styles from './styles.module.scss';
import { useTemplate } from '../_hooks/useTemplate';

const Home: FC<IHome> = ({ components }) => {
  useTemplate();

  const hasIntro = registry.apiHas(components, 'HomeIntro');

  return (
    <PageScroll.SmoothContainer>
      <LayoutContainer
        hasTopSpacing={!hasIntro}
        hasContentTopSpacing={!hasIntro}
      >
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
          <StoriesFullScreen
            items={[
              {
                key: 0,
                image: {
                  original: '',
                  thumb: '/lorem/home/stories/0.jpg',
                  thumbWebp: '',
                },
                label: 'City of the future',
                action: {
                  kind: 'video_modal',
                  player: {
                    source: 'mp4',
                    src: '/lorem/video.mp4',
                  },
                  duration: '2:09',
                },
              },
              {
                key: 1,
                image: {
                  original: '',
                  thumb: '/lorem/home/stories/1.jpg',
                  thumbWebp: '',
                },
                label: 'Some label',
                action: {
                  kind: 'link',
                  href: 'https://google.com/',
                  target: '_blank',
                  text: 'Apply now',
                },
              },
              {
                key: 2,
                image: {
                  original: '',
                  thumb: '/lorem/home/stories/2.jpg',
                  thumbWebp: '',
                },
                label: 'Suara festival 2024 OPEN CALL',
              },
              {
                key: 3,
                image: {
                  original: '',
                  thumb: '/lorem/home/stories/3.jpg',
                  thumbWebp: '',
                },
                label: 'City of the future',
                contentTheme: 'light',
                action: {
                  kind: 'video_modal',
                  player: {
                    source: 'mp4',
                    src: '/lorem/video.mp4',
                  },
                  duration: '2:02',
                },
              },
            ]}
            // hasAutoChange
          />
        </div>

        <div className={styles.grid}>
          {registry.render(components, {
            cssModule: styles,
            order: ['HomeIntro'],
          })}
        </div>
      </LayoutContainer>
    </PageScroll.SmoothContainer>
  );
};

export default Home;
