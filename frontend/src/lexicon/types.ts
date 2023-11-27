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
    stories: {
      title: string;
    };

    features: {
      title: string;
    };

    inside: {
      title: string;
    };

    site: {
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
}
