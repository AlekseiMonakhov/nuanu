import { FC, memo, useId, useRef, useState } from 'react';
import cn from 'classnames';
import { useEvent, useOnInViewport } from '@anton.bobrov/react-hooks';
import { TKey } from '@anton.bobrov/react-components';
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
  autoChangeTimeout = 5000,
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

  const { state: viewportState } = useOnInViewport({ ref });

  const hasAutoChange =
    viewportState === 'in' && hasAutoChangeProp && items.length > 1;

  const onActiveKey = useEvent((key: TKey) => {
    onActiveKeyProp?.(key);
    setActiveKey(key);
  });

  const { prerenderedKeys } = usePrerenderedKeys(activeKey);
  const { getNextKey, getPrevKey } = useSiblingKeys(items);

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
        {items.map(({ key, ...item }, index) => {
          const isActive = key === activeKey;

          if (!prerenderedKeys.includes(key)) {
            return null;
          }

          return (
            <StoriesBaseMedia
              key={key}
              {...item}
              isActive={isActive}
              index={index}
            />
          );
        })}
      </div>

      {children && <div className={styles.children}>{children}</div>}

      <StoriesBaseArrowsNavigation
        controllableId={id}
        onPrev={() => {
          onActiveKey(getPrevKey(activeKey));
          onPrev?.();
        }}
        onNext={() => {
          onActiveKey(getNextKey(activeKey));
          onNext?.();
        }}
        isDisabled={isDisabled}
      />

      <StoriesBaseDotsNavigation
        className={dotsNavigationClassName}
        items={items}
        activeKey={activeKey}
        onActiveKey={onActiveKey}
        hasAutoChange={!!hasAutoChange}
        autoChangeTimeout={autoChangeTimeout}
        onDotHover={onDotHover}
        onPrev={() => onPrev?.()}
        onNext={() => onNext?.()}
        controllableId={id}
        isDisabled={isDisabled}
      >
        {dotsNavigationChildren}
      </StoriesBaseDotsNavigation>
    </section>
  );
};

export const StoriesBase = memo(Component);
