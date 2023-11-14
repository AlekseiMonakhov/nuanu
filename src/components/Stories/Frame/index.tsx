import { FC, memo, useRef, useState } from 'react';
import cn from 'classnames';
import { useEvent, useOnInViewport } from '@anton.bobrov/react-hooks';
import { TKey } from '@anton.bobrov/react-components';
import { IProps } from './types';
import styles from './styles.module.scss';
import { usePrerenderedKeys } from './utils/usePrerenderedKeys';
import { StoriesItem } from './Item';
import { useTapNavigation } from './utils/useTapNavigation';
import { StoriesNavigation } from './Navigation';
import { StoriesContent } from './Content';

const Component: FC<IProps> = ({
  className,
  style,
  items,
  activeKey: activeKeyProp,
  onActiveKey: onActiveKeyProp,
  changeDuration = 250,
  eventsEmitterRef,
  hasAutoChange: hasAutoChangeProp,
  autoChangeDuration = 5000,
  renderNavigation: RenderNavigation = StoriesNavigation,
  hasOverlay,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { length } = items;

  const [activeKey, setActiveKey] = useState(activeKeyProp ?? items[0].key);
  const [hoveredKey, setHoveredKey] = useState<TKey | null>(null);

  const { state } = useOnInViewport({ ref });

  const hasAutoChange = state === 'in' && hasAutoChangeProp;

  const onActiveKey = useEvent((key: TKey) => {
    onActiveKeyProp?.(key);
    setActiveKey(key);
  });

  const { keys, remove: removeKey } = usePrerenderedKeys(length, activeKey);

  useTapNavigation({
    ref: eventsEmitterRef ?? ref,
    items,
    activeKey,
    onActiveKey,
  });

  return (
    <div
      ref={ref}
      className={cn(className, styles.stories_frame)}
      style={style}
    >
      <div className={cn(styles.stories, hasOverlay && styles.has_overlay)}>
        {items.map(({ key, ...item }) => {
          const isActive = key === activeKey;

          if (!keys.includes(key)) {
            return null;
          }

          return (
            <StoriesItem
              key={key}
              className={cn(styles.item, isActive && styles.active)}
              {...item}
              duration={changeDuration}
              isActive={isActive}
              onHidden={() => removeKey(key)}
            />
          );
        })}
      </div>

      <RenderNavigation
        className={styles.navigation}
        items={items}
        activeKey={activeKey}
        onActiveKey={onActiveKey}
        hasAutoChange={!!hasAutoChange}
        autoChangeDuration={autoChangeDuration}
        onDotHover={setHoveredKey}
      >
        {items.map(({ key, ...props }, index) => (
          <StoriesContent
            {...props}
            className={styles.content}
            key={key}
            style={{ '--index': index }}
            isActive={key === activeKey}
            isHovered={key === hoveredKey}
          />
        ))}
      </RenderNavigation>
    </div>
  );
};

export const StoriesFrame = memo(Component);
