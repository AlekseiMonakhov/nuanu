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
    next: 'Next',
    previous: 'Previous',
    changeSlide: 'Change Slide',
    slideNumber: 'Slide #',
  },

  menu: {
    label: 'Menu',
    site: 'Nuanu',
    social: 'Social',
  },

  home: {
    features: {
      title: 'Features',
    },

    inside: {
      title: 'Inside',
    },
  },

  form: {
    subscribe: {
      label: 'Newsletter Subscription',
      enterEmail: 'Enter your email',
      submit: 'Sign up',
      description: 'Sign up for our newsletter and join Nuanu community',
      successText: 'We successfully subscribed you to the Nuanu newsletter ',
    },
  },
};

export default lexicon;
