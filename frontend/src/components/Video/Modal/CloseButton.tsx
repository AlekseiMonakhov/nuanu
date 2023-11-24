import { TModalCloseButtonRenderer } from '@anton.bobrov/react-components';
import { memo } from 'react';
import { FillButton } from '@/components/Button/Fill';
import { useStoreLexicon } from '@/store/reducers/page';
import styles from './styles.module.scss';

const Component: TModalCloseButtonRenderer = ({ onClick }) => {
  const lexicon = useStoreLexicon();

  return (
    <div className={styles.close_button}>
      <FillButton
        tag="button"
        type="button"
        theme="light"
        onClick={onClick}
        text={lexicon.navigation.close}
      />
    </div>
  );
};

export const CloseButton = memo(Component);
