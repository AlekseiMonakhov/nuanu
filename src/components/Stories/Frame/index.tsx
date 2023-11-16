import { FC, memo, useId, useRef, useState } from 'react';
import cn from 'classnames';
import { useEvent, useOnInViewport } from '@anton.bobrov/react-hooks';
import { TKey } from '@anton.bobrov/react-components';
import { IProps } from './types';
import styles from './styles.module.scss';
import { usePrerenderedKeys } from './utils/usePrerenderedKeys';
import { StoriesFrameMedia } from './Media';
import { StoriesFrameDotsNavigation } from './DotsNavigation';
import { StoriesFrameContent } from './Content';
import { StoriesFrameArrowsNavigation } from './ArrowsNavigation';
import { useSiblingKeys } from './utils/useSiblingKeys';

const Component: FC<IProps> = ({
  className,
  style,
  items,
  activeKey: activeKeyProp,
  onActiveKey: onActiveKeyProp,
  onPrev,
  onNext,
  renderDotsNavigation: RenderDotsNavigation = StoriesFrameDotsNavigation,
  changeDuration = 250,
  hasAutoChange: hasAutoChangeProp = false,
  autoChangeDuration = 5000,
  hasOverlay = false,
  isDisabled = false,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const id = useId();

  const [activeKey, setActiveKey] = useState(activeKeyProp ?? items[0].key);
  const [hoveredKey, setHoveredKey] = useState<TKey | null>(null);

  const { state: viewportState } = useOnInViewport({ ref });

  const hasAutoChange =
    viewportState === 'in' && hasAutoChangeProp && items.length > 1;

  const onActiveKey = useEvent((key: TKey) => {
    onActiveKeyProp?.(key);
    setActiveKey(key);
  });

  const { keys, remove: removeKey } = usePrerenderedKeys(activeKey);
  const { getNextKey, getPrevKey } = useSiblingKeys(items);

  return (
    <section
      ref={ref}
      className={cn(className, styles.stories_frame)}
      style={style}
      aria-roledescription="carousel"
      aria-live="off"
      id={id}
      aria-label="Stories"
    >
      <div className={cn(styles.media, hasOverlay && styles.has_overlay)}>
        {items.map(({ key, ...item }, index) => {
          const isActive = key === activeKey;

          if (!keys.includes(key)) {
            return null;
          }

          return (
            <StoriesFrameMedia
              key={key}
              {...item}
              duration={changeDuration}
              isActive={isActive}
              index={index}
              onHidden={() => removeKey(key)}
            />
          );
        })}
      </div>

      {children && <div className={styles.children}>{children}</div>}

      <StoriesFrameArrowsNavigation
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

      <RenderDotsNavigation
        items={items}
        activeKey={activeKey}
        onActiveKey={onActiveKey}
        hasAutoChange={!!hasAutoChange}
        autoChangeDuration={autoChangeDuration}
        onDotHover={setHoveredKey}
        onPrev={() => onPrev?.()}
        onNext={() => onNext?.()}
        controllableId={id}
        isDisabled={isDisabled}
      >
        {items.map(({ key, ...props }, index) => (
          <StoriesFrameContent
            {...props}
            className={styles.content}
            key={key}
            style={{ '--index': index }}
            isActive={key === activeKey}
            isHovered={key === hoveredKey}
            index={index}
          />
        ))}
      </RenderDotsNavigation>
    </section>
  );
};

export const StoriesFrame = memo(Component);
