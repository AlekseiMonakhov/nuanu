import { forwardRef, useId, useImperativeHandle, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './styles.module.scss';
import { FormInputBox } from '../Box';
import { IFormInputProps } from './types';
import { validateInputValueByType } from './validate';

export const FormInput = forwardRef<HTMLInputElement, IFormInputProps>(
  (
    {
      className,
      style,
      name,
      type = 'text',
      id: idProp,
      label,
      required,
      min,
      max,
      maxLength,
      minLength,
      validate: customValidate,
      value,
      onChange,
      onBlur,
      disabled,
      ...inputProps
    },
    forwardedRef,
  ) => {
    const ref = useRef<HTMLInputElement | null>(null);
    useImperativeHandle(forwardedRef, () => ref.current!);

    const generatedId = useId();
    const id = idProp || generatedId;
    const errorId = useId();

    const { register, formState } = useFormContext();

    const { ref: setRef, ...registered } = register(name, {
      required,
      min,
      max,
      maxLength,
      minLength,
      validate: (val) => {
        const isTypeValid = validateInputValueByType?.(val, type);
        const isCustomValid = customValidate?.(val);

        return isTypeValid && isCustomValid;
      },
      value,
      onChange,
      onBlur,
      disabled,
    });

    const error = formState.errors[name];
    const isError = !!error;

    return (
      <FormInputBox
        className={className}
        style={style}
        id={id}
        label={label}
        isError={isError}
        errorId={errorId}
        error={error}
      >
        <input
          {...inputProps}
          className={styles.input}
          {...registered}
          ref={(element) => {
            setRef(element);
            ref.current = element;
          }}
          type={type}
          id={id}
          aria-invalid={type === 'hidden' ? undefined : isError}
          aria-describedby={isError ? errorId : undefined}
        />
      </FormInputBox>
    );
  },
);

FormInput.displayName = 'FormInput';
