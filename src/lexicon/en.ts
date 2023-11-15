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
    next: 'Next',
    previous: 'Previous',
    changeSlide: 'Change Slide',
    slideNumber: 'Slide #',
  },

  menu: {
    label: 'Menu',
    open: 'Menu',
    close: 'Close',
  },

  home: {
    features: {
      title: 'Features',
    },
  },
};

export default lexicon;
