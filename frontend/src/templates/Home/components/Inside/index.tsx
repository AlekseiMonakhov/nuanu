import { FC, memo } from 'react';
import { useStoreLexicon } from '@/store/reducers/page';
import { IProps } from './types';
import { HomeImageMap } from '../ImageMap';

import image from './image.jpg';

const Component: FC<IProps> = () => {
  const {
    home: { inside: lexicon },
  } = useStoreLexicon();

  return (
    <HomeImageMap
      datGuiName={lexicon.title}
      src={image.src}
      width={image.width}
      height={image.height}
      alt={lexicon.title}
      overlay={<div />}
      isDraggable
    />
  );
};

export const HomeInside = memo(Component);
