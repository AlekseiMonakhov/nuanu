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
      onClick={() => store.dispatch(menuSlice.actions.toggle())}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 0H8V8L0 8V10H8V18H10V10H18V8L10 8V0Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};
