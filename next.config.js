const nextConfig = {
  swcMinify: true,
};

module.exports = (phase, { defaultConfig }) => {
  if ('sassOptions' in defaultConfig)
    defaultConfig['sassOptions'] = {
      includePaths: ['./src'],
      prependData: `@use "sass:color"; @import "src/base/styles/_base.scss";`,
    };

  return {
    ...defaultConfig,
    ...nextConfig,
  };
};
