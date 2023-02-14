const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

//TODO domains for different environments should be configured in env files later.
const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  }, 
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap' //access path: actual path
      },
      shared: packageJson.dependencies,//webpack will fetch dynamic list of production packages from package.json ignoring the dev-dependencies obviously and share them for us
    })
  ]
}

module.exports = merge(commonConfig, prodConfig);
