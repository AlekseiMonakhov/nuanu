import NextHead from 'next/head';
import {
  useStoreGlobal,
  useStoreLexicon,
  useStoreUrl,
} from '@/store/reducers/page';
import { isBoolean } from '@anton.bobrov/react-hooks';
import { LayoutScripts } from './Scripts';

export const LayoutHead = () => {
  const { meta, languages, lang } = useStoreGlobal();
  const {
    pagetitle,
    description,
    keywords,
    image,
    searchable: isSearchable,
  } = meta;

  const url = useStoreUrl();
  const lexicon = useStoreLexicon();

  return (
    <>
      <NextHead>
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />

        <title>{pagetitle}</title>

        {/* robots */}
        {isBoolean(isSearchable) && !isSearchable && (
          <meta name="robots" content="noindex" />
        )}

        {/* links */}
        <base href={url.base} />
        <link rel="canonical" href={url.canonical} />

        {/* languages */}
        <meta name="lang" content={lang} />
        {languages.map(({ key, href }) => (
          <link
            key={key}
            rel="alternate"
            href={new URL(href, url.base).href}
            hrefLang={`${key}`}
          />
        ))}

        {/* meta */}
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords} />}
        {description && <meta name="abstract" content={description} />}

        {/* opengraph */}
        <meta property="og:site_name" content={lexicon.siteName} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pagetitle} />
        {description && (
          <meta property="og:description" content={description} />
        )}
        <meta property="og:url" content={url.canonical} />
        {image && (
          <meta property="og:image" content={new URL(image, url.base).href} />
        )}

        {/* twiiter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pagetitle} />
        {description && (
          <meta name="twitter:description" content={description} />
        )}
        {image && <meta property="twitter:image" content={image} />}

        {/* icons */}
        {[16, 32, 64, 96].map((size) => (
          <link
            key={size}
            rel="icon"
            type="image/png"
            href={`/image/favicon-${size}x${size}.png`}
            sizes={`${size}x${size}`}
          />
        ))}

        {/* apple icon */}
        <link rel="apple-touch-icon" href="/image/192x192.png" />

        {/* pwa */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#1f1f1f" />
        <link rel="manifest" href="/api/manifest.webmanifest" />
      </NextHead>

      <LayoutScripts />
    </>
  );
};
