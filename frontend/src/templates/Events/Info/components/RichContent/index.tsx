import { FC, memo } from 'react';
import cn from 'classnames';
import { IProps } from './types';
import styles from './styles.module.scss';
import { SoundCloud } from './SoundCloud';
import { YouTube } from './YouTube';
import { Poster } from './Poster';
import { Text } from './Text';

const Component: FC<IProps> = ({ className, style, items }) => (
  <div className={cn(className, styles.events_info_rich_content)} style={style}>
    {items.map(({ key, ...props }) => {
      if (props.kind === 'soundcloud') {
        return <SoundCloud key={key} {...props} />;
      }

      if (props.kind === 'youtube') {
        return <YouTube key={key} {...props} />;
      }

      if (props.kind === 'poster') {
        return <Poster key={key} {...props} />;
      }

      if (props.kind === 'text') {
        return <Text key={key} {...props} />;
      }

      return <div key={key} />;
    })}
  </div>
);

Component.displayName = 'EventsInfoRichContent';

export const EventsInfoRichContent = memo(Component);
