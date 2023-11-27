import { FC, memo } from 'react';
import { useStoreLexicon } from '@/store/reducers/page';
import { IProps } from './types';
import styles from './styles.module.scss';
import { HomeImageMap } from '../ImageMap';
import { TotalArea } from './Overlays/TotalArea';

import image from './image.jpg';

const Component: FC<IProps> = () => {
  const {
    home: { features: lexicon },
  } = useStoreLexicon();

  return (
    <HomeImageMap
      datGuiName={lexicon.title}
      src={image.src}
      width={image.width}
      height={image.height}
      alt={lexicon.title}
      overlay={
        <div className={styles.overlay}>
          <TotalArea />
        </div>
      }
      isDraggable={false}
    />
  );
};

export const HomeFeatures = memo(Component);
