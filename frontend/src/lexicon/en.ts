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
    privacyPolicy: 'Privacy Policy',
  },

  home: {
    stories: {
      title: 'Stories',
    },

    features: {
      title: 'Features',
    },

    inside: {
      title: 'Inside',
    },

    site: {
      title: 'Site',
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

  cookies: {
    description:
      'We use cookies to provide you with the best website experience. <a href={{privacyPolicyHref}}>Privacy Policy</a>',
    accept: 'Accept',
  },
};

export default lexicon;
