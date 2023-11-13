/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { FC, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BaseModal } from '@anton.bobrov/react-components';
import { useEvent } from '@anton.bobrov/react-hooks';
import { ButtonSimple } from '@/components/Button/Simple';
import { Form as FormComponent } from '@/components/Form';
import { FormInput } from '@/components/Form/Input';
import { FormTextarea } from '@/components/Form/Textarea';

export const Form: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const form = useForm({ mode: 'all' });
  const [isSuccess, setIsSuccess] = useState(false);

  const [email, setEmail] = useState('');

  const reset = useEvent(() => {
    form?.reset();
    setEmail('');
  });

  return (
    <FormComponent
      form={form}
      action="/api/form/lorem"
      onSuccess={() => {
        setIsSuccess(true);
        reset();
      }}
      scrollToError
    >
      <div ref={containerRef} tabIndex={0}>
        <FormInput label="Your name" name="name" required minLength={2} />
        <br />

        <FormInput
          label="Your email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <FormInput label="Upload a file" type="file" name="file" />
        <br />

        <FormTextarea label="Your comment" name="comment" />
        <br />

        <ButtonSimple
          tag="button"
          type="submit"
          text="Send"
          disabled={form.formState.isSubmitting}
        />
      </div>

      <BaseModal
        isOpen={isSuccess}
        onClose={() => {
          setIsSuccess(false);
          containerRef.current?.focus();
        }}
        isRestoreFocusOnClose={false}
      >
        <div style={{ padding: '20px', background: '#fff', color: '#000' }}>
          Success!
        </div>
      </BaseModal>
    </FormComponent>
  );
};
