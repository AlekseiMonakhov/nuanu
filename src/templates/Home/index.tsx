import { FC } from 'react';
import { PageScroll } from '@anton.bobrov/react-components';
import { LayoutContainer } from '@/layout/Container';
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
