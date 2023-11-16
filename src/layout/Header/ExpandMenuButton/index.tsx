import { FC } from 'react';
import cn from 'classnames';
import { useStoreLexicon } from '@/store/reducers/page';
import { menuSlice, useStoreMenu } from '@/store/reducers/menu';
import store from '@/store/store';
import { IProps } from './types';
import styles from './styles.module.scss';

export const HeaderExpandMenuButton: FC<IProps> = ({
  className,
  style,
  ...props
}) => {
  const { menu: lexicon } = useStoreLexicon();

  const { isOpened } = useStoreMenu();

  return (
    <button
      {...props}
      className={cn(
        styles.header_expand_menu_button,
        className,
        isOpened && styles.active,
      )}
      style={style}
      type="button"
      title={lexicon.label}
      aria-expanded={isOpened}
      onClick={() => store.dispatch(menuSlice.actions.open())}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 1H9V9L1 9V11H9V19H11V11H19V9L11 9V1Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};
