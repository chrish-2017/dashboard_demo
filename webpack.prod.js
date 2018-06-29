const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  mode: "production",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "[name].[hash].js",
    chunkFilename: "[id].[hash].chunk.js"
  },
  plugins:[
    new webpack.BannerPlugin({banner: '版权所有，翻版必究。'}),
    new webpack.optimize.SplitChunksPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_module') !== -1;
      }
    }),
    new webpack.optimize.SplitChunksPlugin({
      name: 'manifest'
    })
  ],
  optimization: {
    minimize: true
  }
});
