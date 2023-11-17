export interface ILexicon {
  siteName: string;

  preloader: {
    label: string;
  };

  navigation: {
    close: string;
    breadcrumbs: string;
    play: string;
    watch: string;
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
      title: 'Features';
    };

    inside: {
      title: 'Inside';
    };
  };
}
