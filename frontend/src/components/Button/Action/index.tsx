import { FC, memo } from 'react';
import { VideoModalAnchor } from '@/components/Video/Modal/Anchor';
import { IProps } from './types';

const Component: FC<IProps> = ({
  action,
  renderButton: Button,
  buttonProps,
}) => {
  if (action.kind === 'link') {
    return (
      <Button
        {...buttonProps}
        tag="a"
        text={action.text}
        href={action.href}
        target={action.target ?? undefined}
        rel={action.target === '_blank' ? 'noopener noreferrer' : undefined}
      />
    );
  }

  if (action.kind === 'video_modal') {
    return (
      <VideoModalAnchor
        modalProps={{ player: action.player }}
        anchor={
          <Button
            {...buttonProps}
            tag="button"
            type="button"
            text={action.text}
            sup={action.duration}
          />
        }
      />
    );
  }

  return null;
};

Component.displayName = 'ActionButton';

export const ActionButton = memo(Component);
