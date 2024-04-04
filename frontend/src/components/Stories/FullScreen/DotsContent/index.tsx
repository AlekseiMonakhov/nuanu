import { FC, memo, useMemo } from 'react';
import cn from 'classnames';
import { ExpandContent } from '@anton.bobrov/react-components';
import { useStoreLexicon } from '@/store/reducers/page';
import { CtaButton } from '@/components/Button/Cta';
import { ActionButton } from '@/components/Button/Action';
import { IActionButtonRendererProps } from '@/components/Button/Action/types';
import { IProps } from './types';
import styles from './styles.module.scss';

const ACCORDION_DURATION = 350;

const RenderAction = (props: IActionButtonRendererProps) => (
  <CtaButton {...(props as any)} />
);

const RenderActionMemo = memo(RenderAction);

const Component: FC<IProps> = ({
  className,
  style,
  isActive,
  isHovered,
  index,
  theme = 'dark',
  label,
  action,
}) => {
  const { navigation: lexicon } = useStoreLexicon();

  const actionButtonProps = useMemo(
    () => ({
      theme,
      kind: action?.kind === 'video_modal' ? 'play' : undefined,
    }),
    [action?.kind, theme],
  );

  return (
    <div
      className={cn(
        className,
        styles.dots_content,
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
          <ActionButton
            action={action}
            renderButton={RenderActionMemo}
            buttonProps={actionButtonProps}
          />
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
            <ActionButton
              action={action}
              renderButton={RenderActionMemo}
              buttonProps={actionButtonProps}
            />
          </div>
        </ExpandContent>
      )}
    </div>
  );
};

Component.displayName = 'DotsContent';

export const DotsContent = memo(Component);
