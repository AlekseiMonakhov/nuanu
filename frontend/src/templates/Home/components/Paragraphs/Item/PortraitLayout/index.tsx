import { FC, memo, useRef, useState } from 'react';
import cn from 'classnames';
import { FillButton } from '@/components/Button/Fill';
import { TActionButtonRenderer } from '@/components/Button/Action/types';
import { ActionButton } from '@/components/Button/Action';
import { MediaVideoOrImage } from '@/components/Media/VideoOrImage';
import { useOnInViewport } from '@anton.bobrov/react-hooks';
import { useOnPageScroll } from '@anton.bobrov/react-components';
import { IProps } from './types';
import styles from './styles.module.scss';
import { Content } from '../Content';
import { Factoids } from '../Factoids';

const RenderAction: TActionButtonRenderer = (props) => (
  <FillButton {...(props as any)} size="large" hasArrow />
);

const RenderActionMemo = memo(RenderAction);

export const PortraitLayout: FC<IProps> = ({
  className,
  style,
  index,
  media,
  factoids,
  action,
  title,
  description,
}) => {
  const ref = useRef<HTMLElement>(null);
  const factoidsRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  const { state: viewportState } = useOnInViewport({ ref });

  const [isMediaStatic, setIsMediaStatic] = useState(false);

  useOnPageScroll(() => {
    if (viewportState !== 'in' || !factoidsRef.current || !mediaRef.current) {
      return;
    }

    const factoidsBounding = factoidsRef.current.getBoundingClientRect();
    const mediaBounding = mediaRef.current.getBoundingClientRect();

    const diff = Math.abs(factoidsBounding.bottom - mediaBounding.bottom);

    if (diff < 4) {
      setIsMediaStatic(true);
    } else {
      setIsMediaStatic(false);
    }
  });

  return (
    <article
      ref={ref}
      className={cn(className, styles.layout, action && styles.has_action)}
      style={style}
    >
      <div className={styles.container}>
        <Content
          className={styles.content}
          title={title}
          description={description}
        />

        <div ref={factoidsRef} className={styles.factoids}>
          {factoids && <Factoids items={factoids} index={index} />}
        </div>

        {action && (
          <div className={styles.action}>
            <ActionButton
              action={action}
              renderButton={RenderActionMemo}
              buttonProps={{ theme: isMediaStatic ? 'light' : 'dark' }}
            />
          </div>
        )}
      </div>

      <div ref={mediaRef} className={styles.media}>
        <MediaVideoOrImage {...media} placeholderTheme="light" />
      </div>
    </article>
  );
};
