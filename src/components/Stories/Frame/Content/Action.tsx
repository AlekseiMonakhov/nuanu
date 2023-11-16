import { FC, memo } from 'react';
import { CtaButton } from '@/components/Button/Cta';
import { useStoreLexicon } from '@/store/reducers/page';
import { VideoModalAnchor } from '@/components/Video/Modal/Anchor';
import { IStoriesFrameContentActionProps } from './types';

const Component: FC<IStoriesFrameContentActionProps> = ({ action, theme }) => {
  const { navigation: lexicon } = useStoreLexicon();

  if (action.kind === 'link') {
    return (
      <CtaButton
        theme={theme}
        tag="a"
        href={action.href}
        target={action.target ?? undefined}
        rel={action.target === '_blank' ? 'noopener noreferrer' : undefined}
        text={action.text}
      />
    );
  }

  if (action.kind === 'video_modal') {
    return (
      <VideoModalAnchor
        modalProps={{ player: action.player }}
        anchor={
          <CtaButton
            theme={theme}
            tag="button"
            type="button"
            kind="play"
            text={lexicon.watch}
            sup={action.duration}
          />
        }
      />
    );
  }

  return null;
};

export const Action = memo(Component);
