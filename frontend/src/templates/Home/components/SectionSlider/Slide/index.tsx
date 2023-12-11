import { FC, memo, useEffect, useRef } from 'react';
import cn from 'classnames';
import { useEvent } from '@anton.bobrov/react-hooks';
import { clamp } from '@anton.bobrov/vevet-init';
import { IProps } from './types';
import styles from './styles.module.scss';

const Component: FC<IProps> = ({ index, length, callbacks, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const parallaxWrapperRef = useRef<HTMLDivElement>(null);

  const render = useEvent((progress: number) => {
    const container = ref.current;
    const parallaxWrapper = parallaxWrapperRef.current;

    if (!container || !parallaxWrapper) {
      return;
    }

    const clampProgress = clamp(progress, [0, length - 1]);

    const y = 100 * index + progress * -100;
    const clampY = 100 * index + clampProgress * -100;

    container.style.transform = `translate3d(0, ${clampY}%, 0)`;
    parallaxWrapper.style.transform = `translate3d(0, ${y * -0.5}%, 0)`;
  });

  useEffect(() => {
    const callback = callbacks?.add('render', ({ progress }) =>
      render(progress),
    );

    return () => callback?.remove();
  }, [callbacks, render]);

  return (
    <div
      ref={ref}
      className={cn(styles.slide, index === 0 && styles.default_active)}
    >
      <div className={styles.wrapper}>
        <div ref={parallaxWrapperRef} className={styles.parallax_wrapper}>
          {children}
        </div>
      </div>
    </div>
  );
};

Component.displayName = 'SectionSliderSlide';

export const SectionSliderSlide = memo(Component);
