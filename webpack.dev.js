const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const distPath = path.resolve(__dirname, 'dist');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: distPath,
    filename: '[name].js',
  },
  devServer: {
    static: {
      directory: distPath,
    },
    port: 8081,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        API_REDDIT_URL: '"https://api.reddit.com"',
      },
    }),
  ],
});
