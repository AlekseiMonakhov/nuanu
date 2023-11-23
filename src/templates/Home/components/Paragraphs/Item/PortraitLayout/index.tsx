import { FC, memo } from 'react';
import cn from 'classnames';
import { FillButton } from '@/components/Button/Fill';
import { TActionButtonRenderer } from '@/components/Button/Action/types';
import { ActionButton } from '@/components/Button/Action';
import { MediaVideoOrImage } from '@/components/Media/VideoOrImage';
import { IProps } from './types';
import styles from './styles.module.scss';
import { Content } from '../Content';
import { Factoids } from '../Factoids';

const RenderAction: TActionButtonRenderer = (props) => (
  <FillButton {...(props as any)} theme="light" size="large" hasArrow />
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
}) => (
  <article
    className={cn(className, styles.layout, action && styles.has_action)}
    style={style}
  >
    <div className={styles.container}>
      <Content
        className={styles.content}
        title={title}
        description={description}
      />

      <div className={styles.factoids}>
        {factoids && <Factoids items={factoids} index={index} />}
      </div>

      {action && (
        <div className={styles.action}>
          <ActionButton action={action} renderButton={RenderActionMemo} />
        </div>
      )}
    </div>

    <div className={styles.media}>
      <MediaVideoOrImage {...media} placeholderTheme="light" />
    </div>
  </article>
);
