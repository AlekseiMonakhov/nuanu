import { FC, ReactElement, memo, useMemo, useRef, useState } from 'react';
import cn from 'classnames';
import { useDatGUISettings } from '@anton.bobrov/react-dat-gui';
import { clamp } from '@anton.bobrov/vevet-init';
import { IProps } from './types';
import styles from './styles.module.scss';
import { SectionSliderSlide } from './Slide';
import { useAnimation } from './utils/useAnimation';
import { NavigationButton } from './NavigationButton';

const Component: FC<IProps> = ({
  className,
  style,
  names,
  onEndProgress,
  children: childrenProp,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isHidden, setIsHidden] = useState(false);
  const [step, setStep] = useState(0);

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
    onStep: setStep,
    lockScrollClassName: styles.lock_scroll,
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

        <NavigationButton
          className={styles.scroll_down}
          text={names[clamp(step + 1, [0, length])]}
          onClick={() =>
            handler?.to({
              value: clamp(step + 1, [0, length]),
              duration: 750,
            })
          }
        />
      </div>
    </div>
  );
};

export const HomeSectionSlider = memo(Component);
