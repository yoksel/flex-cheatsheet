const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const constants = require('./constants.js');

module.exports = () => {
  return {
    mode: 'development',
    entry: './src/app.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',
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
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9001
    },
    plugins: [
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
