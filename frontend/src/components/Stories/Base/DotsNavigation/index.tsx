import cn from 'classnames';
import { FC, memo, useRef } from 'react';
import { vevet } from '@anton.bobrov/vevet-init';
import { useStoreLexicon } from '@/store/reducers/page';
import { useEvent, usePrevious } from '@anton.bobrov/react-hooks';
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
  progressHandler,
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

  const getItemLabel = useEvent((item: any) => {
    if ('label' in item) {
      return item.label as string;
    }

    if ('title' in item) {
      return item.title as string;
    }

    return null;
  });

  return (
    <div
      className={cn(className, styles.stories_base_dots_navigation)}
      style={{ ...style, '--count': items.length }}
    >
      <ul className={styles.dots_list} aria-label={lexicon.changeSlide}>
        {items.map(({ key, ...item }, index) => (
          <li key={key} className={styles.dots_item}>
            <Dot
              className={styles.dot}
              index={index}
              label={getItemLabel(item)}
              isActive={activeKey === key}
              onClick={() => onDotClick(key)}
              progressHandler={progressHandler}
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
