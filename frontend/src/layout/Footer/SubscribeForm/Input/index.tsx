import { FC, useId } from 'react';
import cn from 'classnames';
import { FormBaseInput } from '@/components/Form/BaseInput';
import { useFormContext } from 'react-hook-form';
import { IProps } from './types';
import styles from './styles.module.scss';

export const FooterSubscribeInput: FC<IProps> = ({
  className,
  style,
  name,
  children,
  ...props
}) => {
  const { formState } = useFormContext();
  const errorId = useId();

  const error = formState.errors[name];
  const isError = !!error;

  return (
    <div className={cn(className, styles.form_subscribe_input)} style={style}>
      <div className={styles.input_container}>
        <FormBaseInput
          {...props}
          className={cn(styles.input, isError && styles.is_error)}
          name={name}
        />

        <div className={styles.children}>{children}</div>
      </div>

      {error?.message && (
        <p id={errorId} className={styles.error_text}>
          {`${error.message}`}
        </p>
      )}
    </div>
  );
};
