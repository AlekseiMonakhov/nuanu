import { FC } from 'react';
import cn from 'classnames';
import NextLink from 'next/link';
import { useStoreLexicon } from '@/store/reducers/page';
import { Tooltip } from '@/components/Tooltip';
import { IProps } from './types';
import styles from './styles.module.scss';

export const Link: FC<IProps> = ({
  className,
  style,
  href,
  name,
  isActive,
  isHighlighted,
  hasActiveStyles,
  state,
  hasTooltip,
}) => {
  const { menuSup: lexicon } = useStoreLexicon();

  const supText = state ? lexicon[state] : null;

  const textClassNames = cn(
    isActive && styles.active,
    hasActiveStyles ? styles.has_active_styles : styles.no_active_styles,
    isHighlighted && styles.highlighted,
  );

  return (
    <NextLink
      className={cn(className, styles.link)}
      href={href}
      style={style}
      aria-current={isActive ? 'page' : undefined}
    >
      {supText ? (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
          {hasTooltip ? (
            <Tooltip tagName="span" text={supText} className={styles.tooltip}>
              <span className={cn(styles.text, textClassNames)}>{name}</span>
            </Tooltip>
          ) : (
            <>
              <span className={cn(styles.text, textClassNames)}>{name}</span>

              <span
                className={cn(styles.sup, state ? styles[state] : undefined)}
              >
                {supText}
              </span>
            </>
          )}
        </>
      ) : (
        <span className={cn(styles.text, textClassNames)}>{name}</span>
      )}
    </NextLink>
  );
};
