/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import {
  useStoreLexicon,
  useStorePage,
  useStoreUrl,
} from '@/store/reducers/page';
import { removeDublicateSlashes } from '@anton.bobrov/react-hooks';
import Script from 'next/script';
import { FC } from 'react';

export const LayoutScriptsMicrodata: FC = () => {
  const {
    templateName,
    global: { social },
  } = useStorePage();
  const url = useStoreUrl();
  const lexicon = useStoreLexicon();

  if (templateName !== 'Home') {
    return null;
  }

  return (
    <Script
      strategy="beforeInteractive"
      id="js_application_microdata"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          url: url.base,
          name: lexicon.siteName,
          logo: removeDublicateSlashes(`${url.base}/image/512x512.png`),
          sameAs: social.map(({ href }) => href),
        }),
      }}
    />
  );
};
