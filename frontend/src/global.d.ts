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
