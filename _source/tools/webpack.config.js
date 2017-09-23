/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
const path = require('path');
const webpack = require('webpack');

const isDebug = !process.argv.includes('--release');
const isVerbose = process.argv.includes('--verbose');

const clientConfig = {

  context: path.resolve(__dirname, '..'),

  name: 'bundle',
  target: 'web',

  entry: {
    bundle: ['babel-polyfill', './source/assets/js/main.js'],
  },

  output: {
    path: path.resolve(__dirname, '../build/public/assets/js'),
    publicPath: '/assets/js',
    pathinfo: isVerbose,
    filename: '[name].js'
  },

  module: {
    rules: [
      {
		test: /\.markdown$/,
		use: [
            {
              loader: "markdown-with-front-matter-loader",
            }
		],
		include: [
		  path.resolve(__dirname, '../source')
		]
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, '../source'),
        ],
        query: {
          presets: [
            'stage-2',
            'react'
          ]
        }
      } 
    ]
  },
  plugins: [
    // Define free variables
    // https://webpack.github.io/docs/list-of-plugins.html#defineplugin
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isDebug ? '"development"' : '"production"',
      'process.env.BROWSER': true,
      __DEV__: isDebug,
    }),
  ],

  // Choose a developer tool to enhance debugging
  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: isDebug ? 'cheap-module-source-map' : false,

  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  watch: true,
  watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/
  },
};

module.exports = clientConfig;
