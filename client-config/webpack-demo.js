const webpack = require('webpack');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = (CopyWebpackPlugin = require('copy-webpack-plugin'), CopyWebpackPlugin.default || CopyWebpackPlugin);

const helpers = require('./helpers');

const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

const ENV = 'development';
const SERVER_CONFIG = {
  host: 'localhost',
  port: 3000
};
const METADATA = webpackMerge(commonConfig.metadata, {
  host: 'localhost',
  port: 3000,
  ENV: ENV
});

module.exports = webpackMerge(commonConfig, {
  entry: {
    'polyfills': './demo/src/app/polyfills.ts',
    'demo-app': './demo/src/app/main.ts'
  },
  resolve: {
    unsafeCache: true,
    extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html'],
    // Make sure root is src
    modules: ['node_modules', helpers.root('./demo')]
  },
  output: {
    path: './demo/dist',
    filename: 'app/[name].bundle.js',
    sourceMapFilename: 'app/[name].map',
    chunkFilename: 'app/[id].chunk.js'
  },
  devtool: 'eval',
  devServer: {
    port: METADATA.port,
    host: METADATA.host,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    outputPath: helpers.root('dist')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['polyfills', 'vendor'].reverse()
    }),
    new HtmlWebpackPlugin({
      template: 'demo/index.html',
      chunksSortMode: 'dependency'
    }),
    new CopyWebpackPlugin([{from: 'coke-label.jpg'}]),
    new BrowserSyncPlugin(
      {
        host: '127.0.0.1',
        port: 3100,
        proxy: 'http://' + SERVER_CONFIG.host + ':' + SERVER_CONFIG.port
      },
      {
        reload: true
      }
    )
  ]
});
