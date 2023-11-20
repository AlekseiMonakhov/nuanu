import { FC, useId, useState } from 'react';
import cn from 'classnames';
import { FormBaseInput } from '@/components/Form/BaseInput';
import { useFormContext } from 'react-hook-form';
import { IProps } from './types';
import styles from './styles.module.scss';

export const FooterSubscribeFormInput: FC<IProps> = ({
  className,
  style,
  name,
  onFocus,
  onBlur,
  ...props
}) => {
  const { formState, getValues } = useFormContext();
  const errorId = useId();

  const [isFocused, setIsFocused] = useState(false);

  const error = formState.errors[name];
  const isError = !!error;

  const value = getValues(name);

  return (
    <div className={cn(className, styles.input)} style={style}>
      <div
        className={cn(
          styles.input_container,
          !isFocused && !props.readOnly && styles.has_custom_cursor,
          value?.length === 0 && styles.empty,
        )}
      >
        <FormBaseInput
          {...props}
          className={cn(styles.input, isError && styles.is_error)}
          name={name}
          onFocus={(event) => {
            setIsFocused(true);
            onFocus?.(event);
          }}
          onBlur={(event) => {
            setIsFocused(false);
            onBlur?.(event);
          }}
        />
      </div>

      {error?.message && (
        <p id={errorId} className={styles.error_text}>
          {`${error.message}`}
        </p>
      )}
    </div>
  );
};
