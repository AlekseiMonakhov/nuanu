import cn from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';
import { IFormInputbox } from './types';

export const FormInputBox: FC<IFormInputbox> = ({
  className,
  style,
  children,
  id,
  label,
  isError,
  errorId,
  error,
}) => (
  <div className={cn(styles.form_input_box, className)} style={style}>
    <label htmlFor={id} className={styles.label}>
      {label && <span className={styles.label_text}>{label}</span>}

      <span className={cn(styles.input, isError && styles.is_error)}>
        {children}
      </span>
    </label>

    {error?.message && (
      <p id={errorId} className={styles.error}>
        {`${error.message}`}
      </p>
    )}
  </div>
);

FormInputBox.displayName = 'FormInputBox';
