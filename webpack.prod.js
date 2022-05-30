const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./webpack.common');

const distPath = path.resolve(__dirname, 'dist');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: distPath,
    filename: '[chunkhash].[name].js',
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        API_REDDIT_URL: '"https://api.reddit.com"', // TODO: Update server URL for Production
      },
    }),
  ],
});
