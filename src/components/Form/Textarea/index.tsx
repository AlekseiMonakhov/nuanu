import { forwardRef, useId, useImperativeHandle, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { stopWheelPropagationUnlessScrollEnd } from '@/utils/utils/stopWheelPropagationUnlessScrollEnd';
import styles from './styles.module.scss';
import { FormInputBox } from '../Box';
import { IFormTextareaProps } from './types';

export const FormTextarea = forwardRef<HTMLTextAreaElement, IFormTextareaProps>(
  (
    {
      className,
      style,
      name,
      id: idProp,
      label,
      required,
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
    const ref = useRef<HTMLTextAreaElement | null>(null);
    useImperativeHandle(forwardedRef, () => ref.current!);

    const generatedId = useId();
    const id = idProp || generatedId;
    const errorId = useId();

    const { register, formState } = useFormContext();

    const { ref: setRef, ...registered } = register(name, {
      required,
      maxLength,
      minLength,
      validate: (val) => {
        const isCustomValid = customValidate?.(val);

        return isCustomValid;
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
        <textarea
          {...inputProps}
          onWheelCapture={stopWheelPropagationUnlessScrollEnd}
          className={styles.textarea}
          {...registered}
          ref={(element) => {
            setRef(element);
            ref.current = element;
          }}
          id={id}
          aria-invalid={isError}
          aria-describedby={isError ? errorId : undefined}
        />
      </FormInputBox>
    );
  },
);

FormTextarea.displayName = 'FormTextarea';
