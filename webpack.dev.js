const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  mode: "development",
  devtool: "cheap-module-source-map",
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: "/",
    filename: "[name].js",
    chunkFilename: "[id].chunk.js"
  },
  devServer: {
    port: "9000",
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000'
      }
    }
  }
});
