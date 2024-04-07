// @ts-nocheck
import { FC, ReactElement, memo, useEffect, useMemo, useRef } from 'react';
import cn from 'classnames';
import { headerSlice } from '@/store/reducers/header';
import store from '@/store/store';
import { IProps } from './types';
import styles from './styles.module.scss';
import { SectionSliderSlide } from './Slide';
import { useAnimation } from './utils/useAnimation';

const Component: FC<IProps> = ({
  className,
  style,
  belowRef,
  onTargetUpdate,
  children: childrenProp,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const children = useMemo(
    () =>
      (childrenProp.filter((child) => !!child) as ReactElement[]).map(
        (child, index) => ({ ...child, key: index }),
      ),
    [childrenProp],
  );

  const { length } = childrenProp;

  const { callbacks, isEnd, targetProgress } = useAnimation({
    ref,
    belowRef,
    length,
    onTargetUpdate,
  });

  // toggle header theme
  useEffect(() => {
    store.dispatch(
      headerSlice.actions.setTheme(
        targetProgress === length ? 'light' : 'dark',
      ),
    );

    return () => {
      store.dispatch(headerSlice.actions.setTheme('light'));
    };
  }, [length, targetProgress]);

  return (
    <div
      ref={ref}
      className={cn(className, styles.section_slider, isEnd && styles.hidden)}
      style={style}
    >
      <div className={styles.container}>
        {children.map((child, index) => (
          <SectionSliderSlide
            key={child.key}
            index={index}
            callbacks={callbacks}
            length={length}
          >
            {child}
          </SectionSliderSlide>
        ))}
      </div>
    </div>
  );
};

Component.displayName = 'HomeSectionSlider';

export const HomeSectionSlider = memo(Component);
