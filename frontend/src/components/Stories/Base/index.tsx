import { FC, memo, useEffect, useId, useRef, useState } from 'react';
import cn from 'classnames';
import { useEvent, useOnInViewport } from '@anton.bobrov/react-hooks';
import { TKey } from '@anton.bobrov/react-components';
import { useStoreLayout } from '@/store/reducers/layout';
import { IProps } from './types';
import styles from './styles.module.scss';
import { usePrerenderedKeys } from './utils/usePrerenderedKeys';
import { StoriesBaseMedia } from './Media';
import { StoriesBaseDotsNavigation } from './DotsNavigation';
import { StoriesBaseArrowsNavigation } from './ArrowsNavigation';
import { useSiblingKeys } from './utils/useSiblingKeys';

const Component: FC<IProps> = ({
  className,
  style,
  items,
  activeKey: activeKeyProp,
  onActiveKey: onActiveKeyProp,
  onPrev,
  onNext,
  hasAutoChange: hasAutoChangeProp = false,
  autoChangeDuration = 10000,
  hasOverlay = false,
  isDisabled = false,
  children,
  dotsNavigationClassName,
  dotsNavigationChildren,
  onDotHover,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const id = useId();

  const [activeKey, setActiveKey] = useState(activeKeyProp ?? items[0].key);
  const { isPageVisible } = useStoreLayout();

  const { state: viewportState } = useOnInViewport({ ref });

  const hasAutoChange = hasAutoChangeProp && items.length > 1;
  const isAutoChangeEnabled =
    hasAutoChange && viewportState === 'in' && isPageVisible;

  const onActiveKey = useEvent((key: TKey) => {
    onActiveKeyProp?.(key);
    setActiveKey(key);
  });

  const { prerenderedKeys } = usePrerenderedKeys(activeKey);
  const { getNextKey, getPrevKey } = useSiblingKeys(items, activeKey);

  const [storyProgress, setStoryProgress] = useState(0);

  useEffect(() => {
    if (storyProgress === 1) {
      onActiveKey(getNextKey());
    }
  }, [storyProgress, onActiveKey, getNextKey]);

  return (
    <section
      ref={ref}
      className={cn(className, styles.stories_base)}
      style={style}
      aria-roledescription="carousel"
      aria-live="off"
      id={id}
      aria-label="Stories"
    >
      <div className={cn(styles.media, hasOverlay && styles.has_overlay)}>
        {items.map(({ key, media }, index) => {
          const isActive = key === activeKey;

          if (!prerenderedKeys.includes(key)) {
            return null;
          }

          return (
            <StoriesBaseMedia
              key={key}
              index={index}
              media={media}
              hasProgress={hasAutoChange}
              isProgressEnabled={isAutoChangeEnabled}
              progressDuration={autoChangeDuration}
              isActive={isActive}
              onProgress={(value) =>
                setStoryProgress(parseFloat(value.toFixed(3)))
              }
            />
          );
        })}
      </div>

      {children && <div className={styles.children}>{children}</div>}

      <StoriesBaseArrowsNavigation
        controllableId={id}
        onPrev={() => {
          onActiveKey(getPrevKey());
          onPrev?.();
        }}
        onNext={() => {
          onActiveKey(getNextKey());
          onNext?.();
        }}
        isDisabled={isDisabled}
      />

      <StoriesBaseDotsNavigation
        className={dotsNavigationClassName}
        items={items}
        isDisabled={isDisabled}
        activeKey={activeKey}
        onActiveKey={onActiveKey}
        onPrev={() => onPrev?.()}
        onNext={() => onNext?.()}
        onDotHover={onDotHover}
        progress={hasAutoChange ? storyProgress : null}
        controllableId={id}
      >
        {dotsNavigationChildren}
      </StoriesBaseDotsNavigation>
    </section>
  );
};

Component.displayName = 'StoriesBase';

export const StoriesBase = memo(Component);
