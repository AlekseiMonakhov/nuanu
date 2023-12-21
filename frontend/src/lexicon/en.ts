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
    bookTour: 'Book a tour',
  },

  footer: {
    generalEnquires: 'General enquires',
    newBusiness: 'New business',
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
      title: 'Subscribe to <br/> our newsletter',
      label: 'Newsletter subscription',
      yourEmail: 'Your email',
      submit: 'Sign up',
      successText: 'We successfully subscribed you to the Nuanu newsletter',
    },
  },

  cookies: {
    description:
      'We use cookies to provide you with the best website experience. <a href={{privacyPolicyHref}}>Privacy policy</a>',
    accept: 'Accept',
  },

  events: {
    tickets: 'Tickets',
    buyTickets: 'Buy tickets',
    free: 'Free',

    addEvent: {
      title: 'Host your own event at <br />Nuanu in {month}',
    },

    filters: {
      type: 'Event type',
      tags: 'Filters',
    },
  },
};

export default lexicon;
