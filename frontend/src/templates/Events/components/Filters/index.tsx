import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import { FormBaseSelect } from '@/components/Form/BaseSelect';
import { useEvent } from '@anton.bobrov/react-hooks';
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

  return (
    <div className={cn(className, styles.events_filters)} style={style}>
      {filters.map(({ key, label, options }) => (
        <FormBaseSelect
          key={key}
          placeholder={label}
          value={values[key]}
          onChange={(value) => setValues((prev) => ({ ...prev, [key]: value }))}
          options={options}
          isMultiple
          onOpen={onFiltersOpen}
          onClose={onFiltersClose}
        />
      ))}
    </div>
  );
};
