import { FC, memo } from 'react';
import { useStoreLexicon } from '@/store/reducers/page';
import { IProps } from './types';
import styles from './styles.module.scss';
import { HomeImageMap } from '../ImageMap';

import imageJpg from './img/image.jpeg';
import imageWebp from './img/image.webp';
import { TotalArea } from './Overlays/TotalArea';

const Component: FC<IProps> = () => {
  const {
    home: { features: lexicon },
  } = useStoreLexicon();

  return (
    <HomeImageMap
      datGuiName={lexicon.title}
      imageJpg={imageJpg}
      imageWebp={imageWebp}
      alt={lexicon.title}
      overlay={
        <div className={styles.overlay}>
          <TotalArea />
        </div>
      }
    />
  );
};

export const HomeFeatures = memo(Component);
