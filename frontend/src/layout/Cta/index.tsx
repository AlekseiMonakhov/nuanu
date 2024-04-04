import { FC } from 'react';
import {
  useStoreGlobal,
  useStoreLexicon,
  useStorePage,
} from '@/store/reducers/page';
import { FillButton } from '@/components/Button/Fill';
import store from '@/store/store';
import { historySlice } from '@/store/reducers/history';
import { IProps } from './types';

export const LayoutCta: FC<IProps> = ({ className, style }) => {
  const { templateName } = useStorePage();
  const { cta, links } = useStoreGlobal();
  const { navigation: lexicon } = useStoreLexicon();

  if (templateName === 'Events/Info') {
    return (
      <FillButton
        className={className}
        style={style}
        tag="a"
        href={links.events}
        text={lexicon.close}
        theme="white"
        size={50}
        onClick={() => {
          store.dispatch(historySlice.actions.setHasHistory(true));
        }}
      />
    );
  }

  if (cta) {
    return (
      <FillButton
        className={className}
        style={style}
        tag="a"
        href={cta.href}
        target="_blank"
        text={cta.name}
        theme="blue"
        size={50}
      />
    );
  }

  return null;
};
