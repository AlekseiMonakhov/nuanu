import { FC, memo } from 'react';
import cn from 'classnames';
import { useStoreLexicon } from '@/store/reducers/page';
import { FillButton } from '@/components/Button/Fill';
import { IProps } from './types';
import styles from './styles.module.scss';
import { GoogleCalendarButton } from './GoogleCalendar';

const Component: FC<IProps> = ({
  className,
  style,
  price,
  buyHref,
  buyButtonTheme,
  calendarButtonTheme,
  ...props
}) => {
  const { events: lexicon } = useStoreLexicon();

  return (
    <div className={cn(className, styles.events_info_buttons)} style={style}>
      {buyHref && (
        <FillButton
          tag="a"
          href={buyHref}
          target="_blank"
          theme={buyButtonTheme}
          size={80}
          text={price === '0' ? lexicon.register : lexicon.getTickets}
          sup={price === '0' ? undefined : price}
        />
      )}

      <GoogleCalendarButton {...props} theme={calendarButtonTheme} />
    </div>
  );
};

Component.displayName = 'EventsInfoButtons';

export const EventsInfoButtons = memo(Component);
