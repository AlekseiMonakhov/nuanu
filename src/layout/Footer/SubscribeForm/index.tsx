import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form as FormComponent } from '@/components/Form';
import { useStoreLexicon } from '@/store/reducers/page';
import { FillButton } from '@/components/Button/Fill';
import { IProps } from './types';
import styles from './styles.module.scss';
import { FooterSubscribeFormInput } from './Input';

export const FooterSubscribeForm: FC<IProps> = ({ className, style }) => {
  const form = useForm({ mode: 'all' });
  const {
    form: { subscribe: lexicon },
  } = useStoreLexicon();

  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className={className} style={style}>
      <FormComponent
        form={form}
        action="/api/form/subscribe"
        onSuccess={() => setIsSuccess(true)}
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
            <p className={styles.text}>
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
    </div>
  );
};
