import { TAppPage } from '@/types/Page';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    // eslint-disable-next-line no-underscore-dangle
    const props = this.props.__NEXT_DATA__.props
      .pageProps as Required<TAppPage>;

    let lang = 'en';
    let dir = 'ltr';

    if (props.page) {
      lang = props.page.global.lang;
      dir = props.page.global.dir;
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
