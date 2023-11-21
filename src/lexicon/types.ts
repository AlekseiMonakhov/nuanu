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
  };

  home: {
    features: {
      title: 'Features';
    };

    inside: {
      title: 'Inside';
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
}
