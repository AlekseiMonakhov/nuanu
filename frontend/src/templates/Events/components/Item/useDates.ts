import { TimeZone } from '@/utils/datetime/settings';
import { useEvent } from '@anton.bobrov/react-hooks';
import { useMemo } from 'react';

export function useDates(startTime: string, endTime?: string) {
  const getTime = useEvent((source: string) =>
    new Intl.DateTimeFormat('en-US', {
      timeStyle: 'short',
      timeZone: TimeZone,
      hour12: false,
    }).format(new Date(source)),
  );

  const dayNumber = useMemo(
    () =>
      new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        timeZone: TimeZone,
      }).format(new Date(startTime)),
    [startTime],
  );

  const month = useMemo(
    () =>
      new Intl.DateTimeFormat('en-US', {
        month: 'short',
        timeZone: TimeZone,
      }).format(new Date(startTime)),
    [startTime],
  );

  const time = useMemo(() => {
    if (!endTime) {
      return undefined;
    }

    const start = getTime(startTime);
    const end = getTime(endTime);

    return `${start} – ${end}`;
  }, [endTime, getTime, startTime]);

  return { dayNumber, month, time };
}
