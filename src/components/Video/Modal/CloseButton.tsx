import { TModalCloseButtonRenderer } from '@anton.bobrov/react-components';
import { memo } from 'react';
import { ButtonSimple } from '@/components/Button/Simple';
import { useStoreLexicon } from '@/store/reducers/page';
import styles from './styles.module.scss';

const Component: TModalCloseButtonRenderer = ({ onClick }) => {
  const lexicon = useStoreLexicon();

  return (
    <ButtonSimple
      tag="button"
      type="button"
      className={styles.close_button}
      onClick={onClick}
      text={lexicon.navigation.close}
      hasBackground
    />
  );
};

export const CloseButton = memo(Component);
