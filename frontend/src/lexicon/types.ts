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
      label: string;
      enterEmail: string;
      submit: string;
      description: string;
      successText: string;
    };
  };

  cookies: {
    description: string;
    accept: string;
  };

  events: {
    tickets: string;
    buyTickets: string;
    free: string;

    addEvent: {
      title: string;
    };
    filters: {
      type: string;
      tags: string;
    };
  };
}
