import cn from 'classnames';
import { forwardRef, memo } from 'react';
import { ButtonAnchor } from '@anton.bobrov/react-components';
import { useForwardedRef } from '@anton.bobrov/react-hooks';
import {
  useBreakpointName,
  useNonMobilePointerHover,
} from '@anton.bobrov/react-vevet-hooks';
import styles from './styles.module.scss';
import { TBuyButtonProps } from './types';

const Component = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  TBuyButtonProps
>(
  (
    {
      className,
      style,
      text,
      price,
      hasOverlayHover: hasOverlayHoverProp = true,
      overlayHoverText = 'buy',
      ...props
    },
    forwardedRef,
  ) => {
    const ref = useForwardedRef(forwardedRef);

    const isPointerHovered = useNonMobilePointerHover(ref);
    const isHovered = isPointerHovered;

    const breakpointName = useBreakpointName();

    const hasOverlayHover = hasOverlayHoverProp && breakpointName !== 'phone';

    const classNames = cn(
      isHovered && styles.is_hovered,
      hasOverlayHover && isHovered && styles.is_overlay_hovered,
    );

    return (
      <ButtonAnchor
        ref={ref}
        className={cn(className, classNames, styles.buy_button)}
        style={style}
        title={text}
        {...props}
      >
        <span className={cn(classNames, styles.text)}>
          {text}

          {price && <span className={styles.price}>{price}</span>}
        </span>

        <span className={cn(classNames, styles.hover_text)}>
          {overlayHoverText}
        </span>
      </ButtonAnchor>
    );
  },
);

Component.displayName = 'BuyButton';

export const BuyButton = memo(Component);
