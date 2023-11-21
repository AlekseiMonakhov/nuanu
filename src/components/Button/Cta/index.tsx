import cn from 'classnames';
import { forwardRef, memo } from 'react';
import { ButtonAnchor } from '@anton.bobrov/react-components';
import styles from './styles.module.scss';
import { TCtaButtonProps } from './types';
import { PlayDesktop } from './icons/PlayDesktop';
import { PlayPhone } from './icons/PlayPhone';

const Component = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  TCtaButtonProps
>(({ className, style, theme, text, sup, kind = 'simple', ...props }, ref) => {
  const classNames = cn(
    styles[`theme_${theme}`],
    styles[`kind_${kind}`],
    sup && styles.has_sup,
  );

  return (
    <ButtonAnchor
      ref={ref}
      className={cn(className, styles.button, classNames)}
      style={style}
      title={text}
      {...props}
    >
      <span className={cn(styles.content, classNames)}>
        {kind === 'play' && (
          <span className={styles.icon}>
            <PlayDesktop className={cn(styles.icon_play, styles.desktop)} />
            <PlayPhone className={cn(styles.icon_play, styles.phone)} />
          </span>
        )}

        <span>{text}</span>

        {sup && <span className={styles.sup}>{sup}</span>}
      </span>
    </ButtonAnchor>
  );
});

Component.displayName = 'CtaButton';

export const CtaButton = memo(Component);
