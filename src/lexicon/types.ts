export interface ILexicon {
  siteName: string;
  copyright: string;

  preloader: {
    label: string;
  };

  navigation: {
    close: string;
    breadcrumbs: string;
  };

  menu: {
    label: string;
    open: string;
    close: string;
  };
}
