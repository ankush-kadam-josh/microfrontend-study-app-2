const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      //expose what to share from this project
      exposes: {
        './MarketingApp': './src/bootstrap' //access path: actual path
      },
      /**
       * following resources added in shared, should be fetched only once while using it (say in container),
       * if we do not use shared, say faker library will be fetched in each project it is being used in. (say products and cart separately) 
      */
     shared: packageJson.dependencies,//webpack will fetch dynamic list of production packages from package.json ignoring the dev-dependencies obviously and share them for us
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}

module.exports = merge(commonConfig, devConfig);
