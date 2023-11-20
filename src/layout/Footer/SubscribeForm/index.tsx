import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form as FormComponent } from '@/components/Form';
import { useStoreLexicon } from '@/store/reducers/page';
import { FadeContent } from '@anton.bobrov/react-components';
import { ButtonSimple } from '@/components/Button/Simple';
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

          <FadeContent
            activeKey={isSuccess ? 1 : 0}
            content={[
              {
                key: 0,
                children: (
                  <div className={styles.actions}>
                    <p className={styles.text}>{lexicon.description}</p>

                    <ButtonSimple
                      className={styles.submit}
                      tag="button"
                      type="submit"
                      kind="fill"
                      theme="dark"
                      text={lexicon.submit}
                    />
                  </div>
                ),
              },
              {
                key: 1,
                children: <p className={styles.text}>{lexicon.successText}</p>,
              },
            ]}
          />
        </div>
      </FormComponent>
    </div>
  );
};
