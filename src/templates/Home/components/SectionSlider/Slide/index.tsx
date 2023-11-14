import { FC, memo, useEffect, useRef } from 'react';
import cn from 'classnames';
import { useEvent } from '@anton.bobrov/react-hooks';
import { ProgressHandler } from '@/utils/utils/ProgressHandler';
import { IProps } from './types';
import styles from './styles.module.scss';

const Component: FC<IProps> = ({
  children,
  index,
  handler: handlerProp,
  yParallax,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const parallaxWrapperRef = useRef<HTMLDivElement>(null);

  const render = useEvent((handler: ProgressHandler) => {
    const container = ref.current;
    const parallaxWrapper = parallaxWrapperRef.current;

    if (!container || !parallaxWrapper) {
      return;
    }

    const { progress } = handler;
    const y = 100 * index + progress * -100;

    container.style.transform = `translate3d(0, ${y}%, 0)`;
    parallaxWrapper.style.transform = `translate3d(0, ${y * -yParallax}%, 0)`;
  });

  useEffect(() => {
    if (!handlerProp) {
      return undefined;
    }

    const event = handlerProp.callbacks.add('render', () =>
      render(handlerProp),
    );

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
