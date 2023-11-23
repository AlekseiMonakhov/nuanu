/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { FC, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form as FormComponent } from '@/components/Form';
import { useStoreLexicon } from '@/store/reducers/page';
import { FillButton } from '@/components/Button/Fill';
import { IProps } from './types';
import styles from './styles.module.scss';
import { FooterSubscribeFormInput } from './Input';

export const FooterSubscribeForm: FC<IProps> = ({ className, style }) => {
  const textRef = useRef<HTMLParagraphElement>(null);

  const form = useForm({ mode: 'all' });

  const {
    form: { subscribe: lexicon },
  } = useStoreLexicon();

  const [isSuccess, setIsSuccess] = useState(false);

  const handleSuccess = () => {
    setIsSuccess(true);

    setTimeout(() => textRef.current && textRef.current.focus(), 0);
  };

  return (
    <FormComponent
      className={className}
      style={style}
      form={form}
      action="/api/form/subscribe"
      onSuccess={handleSuccess}
      aria-label={lexicon.label}
    >
      <div className={styles.container}>
        <FooterSubscribeFormInput
          name="email"
          type="email"
          placeholder={lexicon.enterEmail}
          readOnly={isSuccess}
        />

        <div className={styles.actions}>
          <p ref={textRef} className={styles.text} tabIndex={0}>
            {isSuccess ? lexicon.successText : lexicon.description}
          </p>

          <FillButton
            className={styles.submit}
            tag="button"
            type="submit"
            theme="dark"
            text={lexicon.submit}
            isSuccess={isSuccess}
            disabled={isSuccess}
          />
        </div>
      </div>
    </FormComponent>
  );
};
