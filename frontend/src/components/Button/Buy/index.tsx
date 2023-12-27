import cn from 'classnames';
import { forwardRef, memo, useRef } from 'react';
import { ButtonAnchor } from '@anton.bobrov/react-components';
import { useForwardedRef } from '@anton.bobrov/react-hooks';
import { useNonMobilePointerHover } from '@anton.bobrov/react-vevet-hooks';
import styles from './styles.module.scss';
import { TBuyButtonProps } from './types';
import { useAnimation } from './utils/useAnimation';

const Component = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  TBuyButtonProps
>(
  (
    {
      className,
      style,
      text,
      hoverText,
      price,
      isHovered: isHoveredProp,
      ...props
    },
    forwardedRef,
  ) => {
    const ref = useForwardedRef(forwardedRef);
    const contentRef = useRef<HTMLSpanElement>(null);
    const mainContentRef = useRef<HTMLSpanElement>(null);
    const hoverContentRef = useRef<HTMLSpanElement>(null);

    const isPointerHovered = useNonMobilePointerHover(ref);

    const isHovered = isPointerHovered || isHoveredProp;

    useAnimation({
      contentRef,
      mainContentRef,
      hoverContentRef,
      isHovered,
    });

    const classNames = cn(isHovered && styles.is_hovered);

    return (
      <ButtonAnchor
        ref={ref}
        className={cn(className, classNames, styles.buy_button)}
        style={style}
        title={text}
        {...props}
      >
        <span ref={contentRef} className={styles.content}>
          <span
            ref={mainContentRef}
            className={cn(classNames, styles.main_content)}
          >
            {text}

            {price && (
              <span className={styles.main_content__price}>{price}</span>
            )}
          </span>

          <span
            ref={hoverContentRef}
            className={cn(classNames, styles.hover_content)}
          >
            {hoverText}
          </span>
        </span>
      </ButtonAnchor>
    );
  },
);

Component.displayName = 'BuyButton';

export const BuyButton = memo(Component);
