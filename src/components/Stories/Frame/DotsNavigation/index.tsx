import cn from 'classnames';
import { memo, useRef } from 'react';
import { vevet } from '@anton.bobrov/vevet-init';
import { useStoreLexicon } from '@/store/reducers/page';
import { useEvent, usePrevious } from '@anton.bobrov/react-hooks';
import { TKey } from '@anton.bobrov/react-components';
import styles from './styles.module.scss';
import { TStoriesFrameDotsNavigationRenderer } from './types';
import { Dot } from './Dot';
import { useSiblingKeys } from '../utils/useSiblingKeys';

const Component: TStoriesFrameDotsNavigationRenderer = ({
  className,
  style,
  items,
  activeKey,
  onActiveKey,
  onDotHover,
  onNext,
  onPrev,
  isDisabled,
  children,
  ...props
}) => {
  const hoverTimeoutRef = useRef<NodeJS.Timeout | undefined>();

  const { navigation: lexicon } = useStoreLexicon();

  const { getNextKey } = useSiblingKeys(items);

  const prevActiveKey = usePrevious(activeKey, activeKey);

  const onDotClick = useEvent((key: TKey) => {
    onActiveKey(key);

    const prevIndex = items.findIndex((item) => item.key === prevActiveKey);
    const nextIndex = items.findIndex((item) => item.key === key);

    if (prevIndex > nextIndex) {
      onPrev();
    } else {
      onNext();
    }
  });

  return (
    <div
      className={cn(className, styles.stories_frame_dots_navigation)}
      style={{ ...style, '--count': items.length }}
    >
      <ul className={styles.dots_list} aria-label={lexicon.changeSlide}>
        {items.map(({ key, label }, index) => (
          <li key={key} className={styles.dots_item}>
            <Dot
              {...props}
              className={styles.dot}
              isActive={activeKey === key}
              onAutoChangeEnd={() => {
                onActiveKey(getNextKey(key));
                onNext();
              }}
              onClick={() => onDotClick(key)}
              index={index}
              label={label}
              isDisabled={isDisabled}
              onMouseEnter={() => {
                if (vevet.viewport.isPhone) {
                  return;
                }

                if (hoverTimeoutRef.current) {
                  clearTimeout(hoverTimeoutRef.current);
                }

                onDotHover(key);
              }}
              onMouseLeave={() => {
                if (hoverTimeoutRef.current) {
                  clearTimeout(hoverTimeoutRef.current);
                }

                hoverTimeoutRef.current = setTimeout(
                  () => onDotHover(null),
                  150,
                );
              }}
            />
          </li>
        ))}
      </ul>

      <div className={styles.children}>{children}</div>
    </div>
  );
};

export const StoriesFrameDotsNavigation = memo(Component);
