import { FC, memo } from 'react';
import { useStoreLexicon } from '@/store/reducers/page';
import { IProps } from './types';
import { HomeImageMap } from '../ImageMap';

import imageJpg from './img/image.jpeg';
import imageWebp from './img/image.webp';

const Component: FC<IProps> = () => {
  const {
    home: { inside: lexicon },
  } = useStoreLexicon();

  return (
    <HomeImageMap
      datGuiName={lexicon.title}
      imageJpg={imageJpg}
      imageWebp={imageWebp}
      alt={lexicon.title}
      overlay={<div />}
    />
  );
};

export const HomeInside = memo(Component);
