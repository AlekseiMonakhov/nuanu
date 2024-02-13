import { FC, useMemo } from 'react';
import { Marquee } from '@anton.bobrov/react-components';
import { LayoutContainer } from '@/layout/Container';
import cn from 'classnames';
import { useBreakpointName } from '@anton.bobrov/react-vevet-hooks';
import styles from './styles.module.scss';
import { IProps } from './types';
import { ImageMarquee } from './ImageMarquee';

export const ComingSoonWrapper: FC<IProps> = ({
  className,
  style,
  text,
  items,
}) => {
  const breakpointName = useBreakpointName();

  const speed = useMemo(() => {
    if (breakpointName === 'desktop') {
      return 2;
    }

    if (breakpointName === 'tablet') {
      return 1.5;
    }

    return 1;
  }, [breakpointName]);

  return (
    <LayoutContainer
      className={cn(className, styles.coming_soon_wrapper)}
      style={style}
      hasTopSpacing={false}
    >
      <div className={styles.wrapper}>
        <Marquee
          className={styles.text_marquee}
          prependWhitespace={false}
          speed={speed}
        >
          {text}
        </Marquee>

        <ImageMarquee className={styles.image_marquee} items={items} />

        <Marquee
          className={styles.text_marquee}
          prependWhitespace={false}
          speed={-speed}
        >
          {text}
        </Marquee>

        <div className={styles.scroll_down}>
          <svg
            width="79"
            height="75"
            viewBox="0 0 79 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M79 35.845L73.9819 30.87L43.6512 61.0858L43.6512 1.54515e-06L35.3603 1.90755e-06L35.3596 61.0676L4.90882 30.8784L5.91737e-06 35.8335L39.5058 75L79 35.845Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </LayoutContainer>
  );
};
