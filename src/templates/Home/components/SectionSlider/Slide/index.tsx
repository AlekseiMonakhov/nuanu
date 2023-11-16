import { FC, memo, useEffect, useRef } from 'react';
import cn from 'classnames';
import { useEvent } from '@anton.bobrov/react-hooks';
import { SlideProgress, clamp } from '@anton.bobrov/vevet-init';
import { IProps } from './types';
import styles from './styles.module.scss';

const Component: FC<IProps> = ({
  children,
  index,
  length,
  handler: handlerProp,
  yParallax,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const parallaxWrapperRef = useRef<HTMLDivElement>(null);

  const render = useEvent((handler: SlideProgress) => {
    const container = ref.current;
    const parallaxWrapper = parallaxWrapperRef.current;

    if (!container || !parallaxWrapper) {
      return;
    }

    const { progress } = handler;
    const clampProgress = clamp(progress, [0, length - 1]);

    const y = 100 * index + progress * -100;
    const clampY = 100 * index + clampProgress * -100;

    container.style.transform = `translate3d(0, ${clampY}%, 0)`;
    parallaxWrapper.style.transform = `translate3d(0, ${y * -yParallax}%, 0)`;
  });

  useEffect(() => {
    if (!handlerProp) {
      return undefined;
    }

    const event = handlerProp.addCallback('render', () => render(handlerProp));

    return () => event.remove();
  }, [handlerProp, render]);

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

export const SectionSliderSlide = memo(Component);
