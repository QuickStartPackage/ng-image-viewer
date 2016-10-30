const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
var CopyWebpackPlugin = (CopyWebpackPlugin = require('copy-webpack-plugin'), CopyWebpackPlugin.default || CopyWebpackPlugin);

const helpers = require('./helpers');

const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

module.exports = webpackMerge(commonConfig, {
  entry: {
    'image-viewer': './src/image-viewer.component.ts'
  },
  resolve: {
    unsafeCache: true,
    extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html'],
    modules: ['node_modules', helpers.root('./src')]
  },
  output: {
    path: './dist',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new CopyWebpackPlugin([
      {from: 'src/img-viewer', to: 'src/img-viewer'},
      {from: 'src/image-viewer*'}
    ])
  ]
});
