import { FC, memo, useRef, useState } from 'react';
import cn from 'classnames';
import { IProps } from './types';
import { StoriesFrame } from '../Frame';
import styles from './styles.module.scss';
import { ContentItem } from './ContentItem';
import { TStoriesFrameDotsNavigationRenderer } from '../Frame/DotsNavigation/types';
import { StoriesFrameDotsNavigation } from '../Frame/DotsNavigation';

const DotsNavigation: TStoriesFrameDotsNavigationRenderer = (props) => (
  <StoriesFrameDotsNavigation {...props} className={styles.dots_navigation} />
);

const Component: FC<IProps> = ({ className, style, items, ...props }) => {
  const finishedAnimationCountRef = useRef(0);

  const [activeKey, setActiveKey] = useState(items[0].key);
  const [direction, setDirection] = useState<'prev' | 'next' | undefined>();
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <StoriesFrame
      {...props}
      className={cn(className, styles.stories_fullscreen)}
      items={items}
      activeKey={activeKey}
      onActiveKey={setActiveKey}
      renderDotsNavigation={DotsNavigation}
      hasOverlay
      onPrev={() => setDirection('prev')}
      onNext={() => setDirection('next')}
      hasAutoChange
      isDisabled={isDisabled}
    >
      {items.map(({ key, ...item }, index) => (
        <ContentItem
          {...item}
          key={key}
          isActive={key === activeKey}
          index={index}
          direction={direction}
          onAnimationStart={() => setIsDisabled(true)}
          onAnimationEnd={() => {
            finishedAnimationCountRef.current += 1;

            if (finishedAnimationCountRef.current >= 2) {
              finishedAnimationCountRef.current = 0;
              setIsDisabled(false);
            }
          }}
        />
      ))}
    </StoriesFrame>
  );
};

export const StoriesFullScreen = memo(Component);
