import { FC, memo, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { vevet } from '@anton.bobrov/vevet-init';
import { DynamicImage } from '@/components/Media/DynamicImage';
import { useBreakpointName } from '@anton.bobrov/react-vevet-hooks';
import { useHover } from '@anton.bobrov/react-hooks';
import { ExpandContent } from '@anton.bobrov/react-components';
import { IProps } from './types';
import styles from './styles.module.scss';

const Component: FC<IProps> = ({
  className,
  style,
  title: titleProp,
  href,
  image,
  patterns,
  onMouseEnter,
  onMouseLeave,
}) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => setIsMobile(vevet.isMobile), []);

  const breakpointName = useBreakpointName();
  const hasHover = !isMobile && breakpointName !== 'phone';

  const isHovered = useHover(ref, { isDisabled: !hasHover });

  const classNames = cn(
    hasHover && styles.has_hover,
    !hasHover && styles.no_hover,
    isHovered && styles.is_hovered,
  );

  const title = useMemo(() => {
    let result = titleProp;

    patterns.forEach((item) => {
      result = result.replaceAll(item.name, item.value);
    });

    return result;
  }, [patterns, titleProp]);

  return (
    <Link
      ref={ref}
      className={cn(className, classNames, styles.events_banner_add)}
      style={style}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => !vevet.isMobile && onMouseEnter?.()}
      onMouseLeave={() => !vevet.isMobile && onMouseLeave?.()}
    >
      <div className={cn(classNames, styles.image)}>
        {image && <DynamicImage {...image} />}
      </div>

      <div className={styles.container}>
        <ExpandContent
          isActive={!hasHover || isHovered}
          duration={350}
          hasAlpha={false}
        >
          <p className={styles.plus} aria-hidden>
            +
          </p>
        </ExpandContent>

        <p
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
    </Link>
  );
};

Component.displayName = 'EventsBannerAdd';

export const EventsBannerAdd = memo(Component);
