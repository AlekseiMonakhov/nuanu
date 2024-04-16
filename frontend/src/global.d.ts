/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/naming-convention */
import 'csstype';

declare module 'csstype' {
  interface Properties {
    /**
     * CSS Custom Properties
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
     */
    [index: `--${string}`]: any;
  }
}

declare module '*.mp4' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const value: any;
  export = value;
}

declare module '*.svg' {
  import React = require('react');

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;


  export default SVG;
}

interface Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
}