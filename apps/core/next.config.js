//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const NextFederationPlugin = require('@module-federation/nextjs-mf');
const { FederatedTypesPlugin } = require('@module-federation/typescript');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack(config) {
    const federationConfig = {
      name: 'core',
      filename: 'static/chunks/remoteEntry.js',
      exposes: {
        './modules/header': './src/modules/header.tsx',
      },
      shared: {},
    };

    config.plugins.push(
      // @ts-ignore
      new NextFederationPlugin(federationConfig),
      new FederatedTypesPlugin({
        federationConfig,
        disableDownloadingRemoteTypes: true,
      })
    );
    return config;
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
