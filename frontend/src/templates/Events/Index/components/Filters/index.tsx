import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import { FormBaseSelect } from '@/components/Form/BaseSelect';
import { useEvent } from '@anton.bobrov/react-hooks';
import { getScrollValues, scrollTo, vevet } from '@anton.bobrov/vevet-init';
import { usePageScrollSelector } from '@anton.bobrov/react-components';
import { IProps } from './types';
import styles from './styles.module.scss';

export const EventsFilters: FC<IProps> = ({
  className,
  style,
  filters,
  onFiltersOpen,
  onFiltersClose,
  onChange: onChangeProp,
}) => {
  const [values, setValues] = useState<Record<string, string>>({});

  const onChange = useEvent(onChangeProp);

  useEffect(() => {
    if (values) {
      onChange(values);
    }
  }, [onChange, values]);

  const scrollSelector = usePageScrollSelector();

  const scrollToListBox = useEvent((element: HTMLElement) => {
    const scrollValues = getScrollValues(scrollSelector);
    if (!scrollSelector || !scrollValues) {
      return;
    }

    const bounding = element.getBoundingClientRect();
    if (bounding.bottom < vevet.viewport.height) {
      return;
    }

    const additionalScroll = bounding.bottom - vevet.viewport.height;

    scrollTo({
      container: scrollSelector,
      top: scrollValues.scrollTop + additionalScroll + 40,
      duration: (px) => Math.min(px, 250),
    });
  });

  return (
    <div className={cn(className, styles.events_filters)} style={style}>
      {filters.map(({ key, label, options }) => (
        <FormBaseSelect
          key={key}
          placeholder={label}
          counterPostfix={key === 'type' ? 'types' : 'filters'}
          value={values[key]}
          onChange={(value) => setValues((prev) => ({ ...prev, [key]: value }))}
          options={options}
          isMultiple
          onOpen={({ listboxRef }) => {
            onFiltersOpen();

            if (listboxRef.current) {
              scrollToListBox(listboxRef.current);
            }
          }}
          onClose={onFiltersClose}
        />
      ))}
    </div>
  );
};
