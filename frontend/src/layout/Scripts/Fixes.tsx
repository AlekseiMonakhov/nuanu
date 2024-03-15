/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import { useStoreUrl } from '@/store/reducers/page';
import Script from 'next/script';
import { FC } from 'react';

export const LayoutScriptsFixes: FC = () => {
  const url = useStoreUrl();

  return (
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
  );
};
