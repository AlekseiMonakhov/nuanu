import { FC, ReactElement, memo, useMemo, useRef, useState } from 'react';
import cn from 'classnames';
import { useDatGUISettings } from '@anton.bobrov/react-dat-gui';
import { IProps } from './types';
import styles from './styles.module.scss';
import { SectionSliderSlide } from './Slide';
import { useAnimation } from './utils/useAnimation';

const Component: FC<IProps> = ({
  className,
  style,
  onEndProgress,
  children: childrenProp,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isHidden, setIsHidden] = useState(false);

  const children = useMemo(
    () =>
      (childrenProp.filter((child) => !!child) as ReactElement[]).map(
        (child, index) => ({ ...child, key: index }),
      ),
    [childrenProp],
  );

  const name = 'Section Slider';
  const { length } = childrenProp;

  const { settings } = useDatGUISettings({
    name: `${name} Parallax`,
    settings: {
      yParallax: {
        value: 0.5,
        type: 'number',
        min: 0,
        max: 0.8,
        step: 0.001,
      },
    },
  });

  const { handler } = useAnimation({
    ref,
    containerRef,
    length,
    name,
    onEndProgress,
    onHide: () => setIsHidden(true),
  });

  return (
    <div
      ref={ref}
      className={cn(
        className,
        styles.section_slider,
        isHidden && styles.hidden,
      )}
      style={style}
    >
      <div ref={containerRef} className={styles.container}>
        <div className={styles.scene}>
          {children.map((child, index) => (
            <SectionSliderSlide
              key={child.key}
              index={index}
              length={length}
              handler={handler}
              yParallax={settings.yParallax}
            >
              {child}
            </SectionSliderSlide>
          ))}
        </div>

        <button
          type="button"
          className={styles.scroll_down}
          onClick={() => {
            handler?.to({ value: 1, duration: 750 });
          }}
        >
          Navigation
        </button>
      </div>
    </div>
  );
};

Component.displayName = 'HomeSectionSlider';

export const HomeSectionSlider = memo(Component);
