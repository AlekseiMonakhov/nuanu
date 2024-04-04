import { forwardRef, useId, useImperativeHandle, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import cn from 'classnames';
import { validateInputValueByType } from './validate';
import { IFormBaseInputProps } from './types';
import styles from './styles.module.scss';

export const FormBaseInput = forwardRef<HTMLInputElement, IFormBaseInputProps>(
  (
    {
      className,
      style,
      name,
      type = 'text',
      id: idProp,
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
      <input
        {...inputProps}
        {...registered}
        ref={(element) => {
          setRef(element);
          ref.current = element;
        }}
        className={cn(className, styles.base_input)}
        style={style}
        type={type}
        id={id}
        aria-invalid={type === 'hidden' ? undefined : isError}
      />
    );
  },
);

FormBaseInput.displayName = 'FormBaseInput';
