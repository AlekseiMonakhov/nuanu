import cn from 'classnames';
import { FC, memo, useRef } from 'react';
import { vevet } from '@anton.bobrov/vevet-init';
import { useStoreLexicon } from '@/store/reducers/page';
import { isNumber, useEvent, usePrevious } from '@anton.bobrov/react-hooks';
import { TKey } from '@anton.bobrov/react-components';
import styles from './styles.module.scss';
import { Dot } from './Dot';
import { IProps } from './types';

const Component: FC<IProps> = ({
  className,
  style,
  items,
  isDisabled,
  activeKey,
  onActiveKey,
  onPrev,
  onNext,
  onDotHover,
  progress,
  controllableId,
  children,
}) => {
  const hoverTimeoutRef = useRef<NodeJS.Timeout | undefined>();

  const { navigation: lexicon } = useStoreLexicon();

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
      className={cn(className, styles.stories_base_dots_navigation)}
      style={{ ...style, '--count': items.length }}
    >
      <ul className={styles.dots_list} aria-label={lexicon.changeSlide}>
        {items.map(({ key }, index) => (
          <li key={key} className={styles.dots_item}>
            <Dot
              className={styles.dot}
              index={index}
              isActive={activeKey === key}
              onClick={() => onDotClick(key)}
              progress={isNumber(progress) ? progress : 1}
              controllableId={`${controllableId}_${key}`}
              isDisabled={isDisabled}
              onMouseEnter={() => {
                if (vevet.viewport.isPhone) {
                  return;
                }

                if (hoverTimeoutRef.current) {
                  clearTimeout(hoverTimeoutRef.current);
                }

                onDotHover?.(key);
              }}
              onMouseLeave={() => {
                if (hoverTimeoutRef.current) {
                  clearTimeout(hoverTimeoutRef.current);
                }

                hoverTimeoutRef.current = setTimeout(
                  () => onDotHover?.(null),
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

Component.displayName = 'StoriesBaseDotsNavigation';

export const StoriesBaseDotsNavigation = memo(Component);
