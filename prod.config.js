const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const constants = require('./constants.js');

module.exports = () => {
  return {
    mode: 'production',
    entry: './src/app.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/flex-cheatsheet/'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif|ttf)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: 'styles.css',
        ignoreOrder: false // Enable to remove warnings about conflicting order
      }),
      // Fill template with global constants
      new HtmlWebpackPlugin({
        ...constants,
        filename: 'index.html',
        template: 'src/index-tmpl.html'
      }),
      // Pass global constants to components
      new webpack.DefinePlugin(constants)
    ]
  };
};
