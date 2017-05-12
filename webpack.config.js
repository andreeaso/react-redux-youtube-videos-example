const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const validate = require('webpack-validator');

const APP_FOLDER = 'app';
const INIT_FILE = 'initialize.js';
const BUILD_DIR = 'build';

const config = {
  entry: {
    app: path.join(__dirname, APP_FOLDER, INIT_FILE)
  },
  output: {
    path: path.join(__dirname, BUILD_DIR),
    filename: '[name].js'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    //stats: 'errors-only',
  },
  watchOptions: {
    // Delay the rebuild after the first change
    aggregateTimeout: 300,
    // Poll using interval (in ms, accepts boolean too)
    poll: 1000
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!resolve-url!sass?outputStyle=expanded&sourceMap',
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]', 'postcss', 'sass']
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['syntax-object-rest-spread']
        }
      }
    ]
  },
  resolve: {
    root: [
      path.join(__dirname, APP_FOLDER)
    ],
    modulesDirectories: [
      'node_modules'
    ],
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      hash: true,
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    }),
    new webpack.HotModuleReplacementPlugin({multiStep: true}),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  postcss: function() {
    return [require('autoprefixer')];
  }
};

module.exports = validate(config);
