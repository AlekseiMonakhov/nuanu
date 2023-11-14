import { FC } from 'react';
import cn from 'classnames';
import { ExpandContent } from '@anton.bobrov/react-components';
import { useDebouncedProp } from '@anton.bobrov/react-hooks';
import { IProps } from './types';
import styles from './styles.module.scss';
import { Action } from './Action';

const accordionDuration = 350;

export const StoriesContent: FC<IProps> = ({
  className,
  style,
  isActive,
  isHovered,
  contentTheme = 'dark',
  label,
  action,
}) => {
  const isAccordionActive = useDebouncedProp(
    isActive,
    isActive ? accordionDuration : 0,
  );

  return (
    <div
      className={cn(className, styles.content, isActive && styles.active)}
      style={style}
      onPointerDownCapture={(event) => event.stopPropagation()}
      aria-hidden={!isActive}
    >
      {label && (
        <p
          className={cn(styles.label, (isActive || isHovered) && styles.active)}
          dangerouslySetInnerHTML={{ __html: label }}
        />
      )}

      {action && (
        <ExpandContent
          isActive={isAccordionActive}
          duration={accordionDuration}
          hasAlpha={false}
        >
          <div className={styles.action}>
            <Action action={action} theme={contentTheme} />
          </div>
        </ExpandContent>
      )}
    </div>
  );
};
