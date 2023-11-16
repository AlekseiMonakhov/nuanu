import { FC, memo } from 'react';
import cn from 'classnames';
import { ExpandContent } from '@anton.bobrov/react-components';
import { useDebouncedProp } from '@anton.bobrov/react-hooks';
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
  const isAccordionActive = useDebouncedProp(
    isActive,
    isActive ? ACCORDION_DURATION : 0,
  );

  const { navigation: lexicon } = useStoreLexicon();

  return (
    <div
      className={cn(
        className,
        styles.stories_frame_content,
        isActive && styles.active,
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
          className={cn(styles.label, (isActive || isHovered) && styles.active)}
          dangerouslySetInnerHTML={{ __html: label }}
        />
      )}

      {action && (
        <ExpandContent
          isActive={isAccordionActive}
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
