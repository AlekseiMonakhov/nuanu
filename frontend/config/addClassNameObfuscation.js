/* eslint-disable import/no-extraneous-dependencies */
const loaderUtils = require('loader-utils');
const path = require('path');

const hashOnlyIdent = (context, someVar, exportName) =>
  loaderUtils
    .getHashDigest(
      Buffer.from(
        `filePath:${path
          .relative(context.rootContext, context.resourcePath)
          .replace(/\\+/g, '/')}#className:${exportName}`,
      ),
      'md4',
      'base64',
      6,
    )
    .replace(/[^a-zA-Z0-9-_]/g, '_')
    .replace(/^(-?\d|--)/, '_$1');

function addClassnameObfuscation(config) {
  const rules = config.module.rules
    .find((rule) => typeof rule.oneOf === 'object')
    .oneOf.filter((rule) => Array.isArray(rule.use));

  rules.forEach((rule) => {
    rule.use.forEach((moduleLoader) => {
      if (
        moduleLoader.loader?.includes('css-loader') &&
        !moduleLoader.loader?.includes('postcss-loader')
      )
        // eslint-disable-next-line no-param-reassign
        moduleLoader.options.modules.getLocalIdent = hashOnlyIdent;
    });
  });
}

module.exports = addClassnameObfuscation;
