import { FC } from 'react';
import cn from 'classnames';
import { FillButton } from '@/components/Button/Fill';
import { IProps } from './types';
import styles from './styles.module.scss';

const prepareDate = (source: string) =>
  `${source.replace(/:/g, '').replace(/-/g, '').split('.')[0]}`;

export const GoogleCalendarButton: FC<IProps> = ({
  className,
  style,
  title: titleProp,
  startTime: startTimeProp,
  endTime: endTimeProp,
  location: locationProp,
  theme,
}) => {
  const title = titleProp ?? 'Event';

  const location = locationProp
    ? `${locationProp.name} / ${locationProp.address}`
    : undefined;

  const locationParam = location ? `&location=${location}` : '';

  const startTime = prepareDate(startTimeProp);
  const endTime = endTimeProp ? prepareDate(endTimeProp) : startTime;

  const href = `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${startTime}%2F${endTime}&details=${title}${locationParam}&text=${title}`;

  return (
    <div className={cn(className, styles.events_info_buttons)} style={style}>
      <FillButton
        tag="a"
        href={href}
        target="_blank"
        theme={theme}
        size={80}
        text="Add to Google Calendar"
      >
        <span className={styles.google_calendar_children}>
          Add to
          <i />
          Calendar
        </span>
      </FillButton>
    </div>
  );
};
