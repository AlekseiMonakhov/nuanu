import cn from 'classnames';
import { memo, useRef } from 'react';
import { vevet } from '@anton.bobrov/vevet-init';
import styles from './styles.module.scss';
import { TStoriesFrameNavigationRenderer } from '../types';
import { Dot } from './Dot';
import { useSiblingKeys } from '../utils/useSiblingKeys';

const Component: TStoriesFrameNavigationRenderer = ({
  className,
  style,
  items,
  activeKey,
  onActiveKey,
  hasAutoChange,
  autoChangeDuration,
  onDotHover,
  children,
}) => {
  const hoverTimeoutRef = useRef<NodeJS.Timeout | undefined>();

  const { getNextKey } = useSiblingKeys(items);

  return (
    <div
      className={cn(className, styles.navigation)}
      style={{ ...style, '--count': items.length }}
    >
      <ul className={styles.dots_list}>
        {items.map(({ key, label }, index) => (
          <li key={key} className={styles.dots_item}>
            <Dot
              className={styles.dot}
              isActive={activeKey === key}
              duration={autoChangeDuration}
              hasAnimation={hasAutoChange}
              onEnd={() => onActiveKey(getNextKey(key))}
              onClick={() => onActiveKey(key)}
              index={index}
              label={label}
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

export const StoriesNavigation = memo(Component);
