const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: ''
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, exclude: /node_modules/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.(woff2?|jpe?g|png|gif|ico)$/, use: 'file-loader?name=./assets/images/[name].[ext]', loaders: ['file-loader'], exclude: /node_modules/ },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  node: {
    dns: 'mock',
    net: 'mock'
    },
  devtool: 'source-map',
  plugins: [HtmlWebpackPluginConfig]
};
