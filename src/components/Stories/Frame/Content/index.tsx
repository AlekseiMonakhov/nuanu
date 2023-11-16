import { FC, memo } from 'react';
import cn from 'classnames';
import { ExpandContent } from '@anton.bobrov/react-components';
import { useStoreLexicon } from '@/store/reducers/page';
import { IProps } from './types';
import styles from './styles.module.scss';
import { Action } from './Action';

const ACCORDION_DURATION = 350;

const Component: FC<IProps> = ({
  className,
  style,
  isActive,
  isHovered,
  index,
  contentTheme = 'dark',
  label,
  action,
}) => {
  const { navigation: lexicon } = useStoreLexicon();

  return (
    <div
      className={cn(
        className,
        styles.stories_frame_content,
        isActive && styles.active,
        isHovered && styles.hovered,
      )}
      style={style}
      onPointerUpCapture={(event) => event.stopPropagation()}
      role="group"
      aria-roledescription="slide"
      aria-label={`${lexicon.slideNumber + (index + 1)}`}
      aria-hidden={!isActive}
    >
      {label && (
        <p
          className={styles.label}
          dangerouslySetInnerHTML={{ __html: label }}
        />
      )}

      {action && (
        <div className={cn(styles.action, styles.v_phone)}>
          <Action action={action} theme={contentTheme} />
        </div>
      )}

      {action && (
        <ExpandContent
          className={styles.v_desktop_tablet}
          isActive={isActive}
          duration={ACCORDION_DURATION}
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

export const StoriesFrameContent = memo(Component);
