import { DeepRequired } from 'ts-essentials';
import { ILexicon } from './types';

const lexicon: DeepRequired<ILexicon> = {
  siteName: 'Nuanu Inc.',
  copyright: '© Copyright',

  preloader: {
    label: 'Loading',
  },

  navigation: {
    close: 'Close',
    breadcrumbs: 'Breadcrumbs',
    play: 'Play',
    watch: 'Watch',
  },

  menu: {
    label: 'Menu',
    open: 'Menu',
    close: 'Close',
  },
};

export default lexicon;
