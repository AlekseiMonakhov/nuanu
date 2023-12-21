import { FC } from 'react';
import { useStoreLexicon } from '@/store/reducers/page';
import { ButtonAnchor } from '@anton.bobrov/react-components';
import cn from 'classnames';
import { IProps } from './types';
import styles from './styles.module.scss';

export const FooterSubscribeSubmit: FC<IProps> = ({
  isSuccess,
  isDisabled,
}) => {
  const {
    form: { subscribe: lexicon },
  } = useStoreLexicon();

  return (
    <ButtonAnchor
      className={cn(
        styles.footer_subscribe_submit,
        isSuccess && styles.is_success,
      )}
      tag="button"
      type="submit"
      title={lexicon.submit}
      disabled={isDisabled}
    />
  );
};
