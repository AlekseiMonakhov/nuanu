export interface ILexicon {
  siteName: string;
  copyright: string;

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
    open: string;
    close: string;
  };

  home: {
    features: {
      title: 'Features';
    };
  };
}
