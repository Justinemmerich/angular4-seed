const path = require('path');
const webpack = require('webpack');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const helpers = require('./helpers');

const ENV = process.env.ENV = process.env.NODE_ENV = 'test';

module.exports = {

  // Source map for Karma from the help of karma-sourcemap-loader & karma-webpack
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [
      helpers.root('src'),
      helpers.root('node_modules')
    ],
  },

  module: {
    exprContextCritical: false,
    // See webpack.common.js for more explanation about rules
    rules: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader?silent=true', 'angular2-template-loader']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['raw-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  },

  // See webpack.common.js for more explanation about plugins
  plugins: [
    // Provides context to Angular's use of System.import
    new ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root('src')
    ),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ],

  performance: {
    hints: false
  }

};
