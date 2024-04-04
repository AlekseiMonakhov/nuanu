/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { FC, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form as FormComponent } from '@/components/Form';
import { useStoreLexicon } from '@/store/reducers/page';
import { IProps } from './types';
import styles from './styles.module.scss';
import { FooterSubscribeInput } from './Input';
import { FooterSubscribeSubmit } from './Submit';

export const FooterSubscribe: FC<IProps> = ({ className, style }) => {
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
      <div className={styles.footer_subscribe}>
        <p
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: lexicon.title }}
        />

        <FooterSubscribeInput
          name="email"
          type="email"
          placeholder={lexicon.yourEmail}
          readOnly={isSuccess}
        >
          <FooterSubscribeSubmit
            isSuccess={isSuccess}
            isDisabled={form.formState.isSubmitting || isSuccess}
          />
        </FooterSubscribeInput>

        <div ref={textRef} className={styles.text} tabIndex={0}>
          {isSuccess && (
            <p dangerouslySetInnerHTML={{ __html: lexicon.successText }} />
          )}
        </div>
      </div>
    </FormComponent>
  );
};
