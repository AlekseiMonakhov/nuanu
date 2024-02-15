import { FC } from 'react';
import cn from 'classnames';
import { useStoreLexicon } from '@/store/reducers/page';
import { FillButton } from '@/components/Button/Fill';
import { IProps } from './types';
import styles from './styles.module.scss';

export const EventsInfoButtons: FC<IProps> = ({
  className,
  style,
  price,
  buyButtonTheme,
  buyHref,
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
    </div>
  );
};
