import { DeepRequired } from 'ts-essentials';
import { ILexicon } from './types';

const lexicon: DeepRequired<ILexicon> = {
  siteName: 'Nuanu Inc.',

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
    site: 'Nuanu',
    social: 'Social',
    privacyPolicy: 'Privacy Policy',
  },

  home: {
    features: {
      title: 'Features',
    },

    inside: {
      title: 'Inside',
    },
  },
};

export default lexicon;
