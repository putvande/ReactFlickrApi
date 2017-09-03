const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, exclude: /node_modules/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.(woff2?|jpe?g|png|gif|ico)$/, use: 'file-loader?name=./assets/images/[name].[ext]', loaders: ['file-loader'], exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  },
  plugins: [HtmlWebpackPluginConfig]
};
