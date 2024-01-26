export interface ILexicon {
  siteName: string;

  preloader: {
    label: string;
  };

  navigation: {
    close: string;
    breadcrumbs: string;
    play: string;
    next: string;
    previous: string;
    changeSlide: string;
    slideNumber: string;
  };

  menu: {
    label: string;
    site: string;
    social: string;
    privacyPolicy: string;
    bookTour: string;
  };

  footer: {
    generalEnquires: string;
    newBusiness: string;
  };

  home: {
    features: {
      title: string;
    };

    inside: {
      title: string;
    };
  };

  form: {
    subscribe: {
      title: string;
      label: string;
      yourEmail: string;
      submit: string;
      successText: string;
    };
  };

  cookies: {
    description: string;
    accept: string;
  };

  events: {
    tickets: string;
    getTickets: string;
    register: string;
    free: string;
    none: string;

    filters: {
      type: string;
      tags: string;
    };
  };
}
