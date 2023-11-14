import {
  FC,
  ReactElement,
  memo,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';
import { ProgressHandler } from '@/utils/utils/ProgressHandler';
import { useDatGUISettings } from '@anton.bobrov/react-dat-gui';
import { IProps } from './types';
import styles from './styles.module.scss';
import { SectionSliderSlide } from './Slide';

const Component: FC<IProps> = ({
  className,
  style,
  children: childrenProp,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const name = 'section-slider';
  const { length } = childrenProp;

  const [handler, setHandler] = useState<ProgressHandler | null>(null);

  const { settings } = useDatGUISettings({
    name: `${name} parallax`,
    settings: {
      yParallax: { value: 0.5, type: 'number', min: 0, max: 0.8, step: 0.001 },
    },
  });

  const children = useMemo(
    () => childrenProp.filter((child) => !!child) as ReactElement[],
    [childrenProp],
  );

  useEffect(() => {
    if (!ref.current) {
      return undefined;
    }

    const instance = new ProgressHandler({
      container: ref.current,
      min: 0,
      max: length,
      step: 1,
      ease: 0.2,
      friction: 0.2,
      name,
      hasDrag: false,
    });

    setHandler(instance);

    return () => instance.destroy();
  }, [length]);

  return (
    <div
      ref={ref}
      className={cn(className, styles.section_slider)}
      style={style}
    >
      <div className={styles.scene}>
        {children.map((child, index) => (
          <SectionSliderSlide
            key={child.key}
            index={index}
            handler={handler}
            yParallax={settings.yParallax}
          >
            {child}
          </SectionSliderSlide>
        ))}
      </div>
    </div>
  );
};

export const HomeSectionSlider = memo(Component);
