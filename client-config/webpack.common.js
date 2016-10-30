const webpack = require('webpack');
const helpers = require('./helpers');
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
var path = require('path');

module.exports = {

  cache: true,
  module: {
    noParse: [
      /es6-shim/,
      /reflect-metadata/,
      /zone\.js(\/|\\)dist(\/|\\)zone-microtask/
    ],
    rules: [
      {test: /\.ts$/, use: 'tslint-loader', enforce: 'pre', exclude: [helpers.root('node_modules')]},
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader', 'angular2-template-loader'],
        exclude: [/\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
      },
      {test: /\.json$/, use: 'json-loader'},
      {test: /\.global\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
      {test: /\.scss$/, exclude: [/\.global\.scss$/], use: ['raw-loader', 'sass-loader']},
      {test: /\.html$/, use: 'raw-loader'}
    ]
  },
  plugins: [
    new ForkCheckerPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      './src'
    )
  ],

  node: {
    global: true,
    process: true,
    Buffer: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false,
    clearTimeout: true,
    setTimeout: true
  }

};
