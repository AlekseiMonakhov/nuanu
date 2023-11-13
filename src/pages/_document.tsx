import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { IAppPage } from '@/types/Page';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    // eslint-disable-next-line no-underscore-dangle
    const props = this.props.__NEXT_DATA__.props
      .pageProps as Required<IAppPage>;

    let lang = 'en';
    let dir = 'ltr';

    if (props?.page?.props) {
      const { global } = props.page.props;

      if (global) {
        lang = global.lang;
        dir = global.dir;
      }
    }

    return (
      <Html lang={lang} dir={dir} className={dir}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
