import { FC, memo, useMemo } from 'react';
import { MediaVideoOrImage } from '@/components/Media/VideoOrImage';
import { TActionButtonRenderer } from '@/components/Button/Action/types';
import { ActionButton } from '@/components/Button/Action';
import { FillButton } from '@/components/Button/Fill';
import { useBreakpointName } from '@anton.bobrov/react-vevet-hooks';
import { IProps } from './types';
import styles from './styles.module.scss';
import { Content } from './Content';
import { LandscapeLayout } from './LandscapeLayout';
import { PortraitLayout } from './PortraitLayout';
import { Stats } from './Stats';

// TODO change button
const RenderAction: TActionButtonRenderer = (props) => (
  <FillButton {...(props as any)} theme="light" className={styles.action} />
);

const RenderActionMemo = memo(RenderAction);

export const HomeParagraphItem: FC<IProps> = ({
  className,
  style,
  index,
  media: mediaProp,
  title,
  description,
  action: actionProp,
  stats: statsProp,
}) => {
  const breakpoint = useBreakpointName();

  const action = useMemo(
    () =>
      actionProp ? (
        <ActionButton action={actionProp} renderButton={RenderActionMemo} />
      ) : null,
    [actionProp],
  );

  const content = useMemo(
    () => (
      <Content title={title} description={description}>
        {action}
      </Content>
    ),
    [action, description, title],
  );

  const media = useMemo(
    () => (
      <MediaVideoOrImage
        {...mediaProp}
        className={styles.media}
        placeholderTheme="light"
      />
    ),
    [mediaProp],
  );

  const stats = useMemo(() => {
    if (!statsProp) {
      return null;
    }

    return <Stats items={statsProp} index={index} />;
  }, [statsProp, index]);

  if (breakpoint === 'phone') {
    return (
      <PortraitLayout
        className={className}
        style={style}
        content={content}
        media={media}
        stats={stats}
        action={action}
      />
    );
  }

  return (
    <LandscapeLayout
      className={className}
      style={style}
      content={content}
      media={media}
      stats={stats}
    />
  );
};
