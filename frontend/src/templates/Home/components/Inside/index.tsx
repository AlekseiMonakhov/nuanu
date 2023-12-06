import { FC, memo, useId, useRef, useState } from 'react';
import { useStoreLexicon } from '@/store/reducers/page';
import { StoriesFrame } from '@/components/Stories/Frame';
import { FadeContent, TKey } from '@anton.bobrov/react-components';
import cn from 'classnames';
import {
  isBrowser,
  useDebouncedProp,
  useEventListener,
} from '@anton.bobrov/react-hooks';
import { childOf, parentByClassName } from 'vevet-dom';
import { useBreakpointName } from '@anton.bobrov/react-vevet-hooks';
import { IProps } from './types';
import { HomeImageMap } from '../ImageMap';
import styles from './styles.module.scss';
import { Button } from './Button';

import image from './image.jpg';

const Component: FC<IProps> = ({ items }) => {
  const {
    home: { inside: lexicon },
  } = useStoreLexicon();

  const [activeKey, setActiveKey] = useState<TKey | 'none'>('none');
  const isNoneSelected = useDebouncedProp(activeKey === 'none', 16);

  const storiesContainer = useRef<HTMLDivElement>(null);

  const id = useId();
  const buttonClassName = `${id}-button`;

  const breakpointName = useBreakpointName();

  useEventListener({
    ref: isBrowser ? window : null,
    target: 'click',
    listener: (event) => {
      if (!storiesContainer.current || isNoneSelected) {
        return;
      }

      const buttonParent = parentByClassName(
        event.target as any,
        buttonClassName,
      );

      if (buttonParent) {
        return;
      }

      if (!childOf(event.target as any, storiesContainer.current)) {
        setActiveKey('none');
      }
    },
  });

  return (
    <HomeImageMap
      className={styles.home_inside}
      datGuiName={lexicon.title}
      src={image.src}
      width={image.width}
      height={image.height}
      alt={lexicon.title}
      overlay={
        <div className={styles.navigation}>
          {items.map(({ key, title }, index) => (
            <Button
              key={key}
              className={cn(
                buttonClassName,
                styles.button,
                !isNoneSelected && key !== activeKey && styles.hide,
              )}
              index={index}
              isActive={activeKey === key}
              onClick={() =>
                activeKey === key ? setActiveKey('none') : setActiveKey(key)
              }
              text={title}
              targetPositionRef={storiesContainer}
            />
          ))}
        </div>
      }
      isDraggable={isNoneSelected && breakpointName === 'phone'}
    >
      <FadeContent
        ref={storiesContainer}
        className={cn(
          styles.stories_container,
          isNoneSelected && styles.unactive,
        )}
        activeKey={activeKey}
        duration={500}
        content={[
          {
            key: 'none',
            children: null,
          },
          ...items.map(({ key, stories }) => ({
            key,
            children: <StoriesFrame items={stories} />,
          })),
        ]}
      />
    </HomeImageMap>
  );
};

export const HomeInside = memo(Component);
