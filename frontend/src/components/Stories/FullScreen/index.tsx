import { FC, memo, useRef, useState } from 'react';
import cn from 'classnames';
import { TKey } from '@anton.bobrov/react-components';
import { IProps } from './types';
import { StoriesBase } from '../Base';
import styles from './styles.module.scss';
import { DotsContent } from './DotsContent';
import { MainContent } from './MainContent';

const Component: FC<IProps> = ({ className, style, items }) => {
  const finishedAnimationCountRef = useRef(0);

  const [activeKey, setActiveKey] = useState(items[0].key);
  const [hoveredKey, setHoveredKey] = useState<TKey | null>(null);

  const [direction, setDirection] = useState<'prev' | 'next' | undefined>();
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <StoriesBase
      className={cn(className, styles.stories_fullscreen)}
      style={style}
      items={items}
      activeKey={activeKey}
      onActiveKey={setActiveKey}
      hasOverlay
      onPrev={() => setDirection('prev')}
      onNext={() => setDirection('next')}
      hasAutoChange
      isDisabled={isDisabled}
      dotsNavigationClassName={styles.dots_navigation}
      dotsNavigationChildren={
        <>
          {items.map(({ key, ...props }, index) => (
            <DotsContent
              {...props}
              className={styles.dots_content}
              key={key}
              style={{ '--index': index }}
              isActive={key === activeKey}
              isHovered={key === hoveredKey}
              index={index}
            />
          ))}
        </>
      }
      onDotHover={setHoveredKey}
    >
      {items.map(({ key, ...item }, index) => (
        <MainContent
          {...item}
          key={key}
          index={index}
          isActive={key === activeKey}
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
    </StoriesBase>
  );
};

Component.displayName = 'StoriesFullScreen';

export const StoriesFullScreen = memo(Component);
