/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import {
  useStoreLexicon,
  useStorePage,
  useStoreUrl,
} from '@/store/reducers/page';
import { removeDublicateSlashes } from '@anton.bobrov/react-hooks';
import Script from 'next/script';
import { FC } from 'react';

export const LayoutScripts: FC = () => {
  const {
    templateName,
    global: { social },
  } = useStorePage();
  const url = useStoreUrl();
  const lexicon = useStoreLexicon();

  return (
    <>
      {/* logo microdata */}
      {templateName === 'Home' && (
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
      )}

      <Script
        strategy="beforeInteractive"
        id="js_settings"
        dangerouslySetInnerHTML={{
          __html: `
            window.USE_DAT_GUI = ${process.env.NODE_ENV === 'development'};
          `,
        }}
      />

      <Script
        strategy="beforeInteractive"
        id="js_page_router_fix_origin"
        dangerouslySetInnerHTML={{
          __html: `
            if (!window.location.origin.includes('${new URL(url.base).host}')) {
              window.OhistoryReplaceState=window.history.replaceState,window.history.replaceState=(...t)=>{try{return window.OhistoryReplaceState.apply(window.history,t)}catch(e){console.log(e)}},window.OhistoryPushState=window.history.pushState,window.history.pushState=(...t)=>{try{return window.OhistoryPushState.apply(window.history,t)}catch(e){console.log(e)}};            
            }
          `,
        }}
      />

      <Script
        strategy="beforeInteractive"
        id="js_viewport_css_vars"
        dangerouslySetInnerHTML={{
          __html:
            'var update=function(){var e=document.documentElement.clientWidth,t=document.documentElement.clientHeight;document.documentElement.style.setProperty("--vw",e/100+"px"),document.documentElement.style.setProperty("--vh",t/100+"px"),document.documentElement.style.setProperty("--vr",Math.sqrt(e**2+t**2)/2/100+"px")};window.addEventListener("resize",update),update();',
        }}
      />
    </>
  );
};
