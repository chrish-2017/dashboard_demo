const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/main.js')
  },
  resolve: {
    extensions: ['.js', '.css', '.vue', '.less'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'views': path.resolve(__dirname, './src/views'),
      'store': path.resolve(__dirname, './src/store'),
      'utils': path.resolve(__dirname, './src/utils'),
      'assets': path.resolve(__dirname, './src/assets'),
      'components': path.resolve(__dirname, './src/components')
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader!postcss-loader"
      })
    }, {
      test: /\.vue$/,
      loader: "vue-loader",
      options: {
        loaders: {
          css: ExtractTextPlugin.extract({
            use: 'css-loader',
            fallback: 'vue-style-loader'
          })
        }
      }
    }, {
      test: /\.(svg|ttf|eot|woff)\??.*$/,
      loader: "url-loader?limit=10000"
    }, {
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader!postcss-loader!less-loader"
      })
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './src/index.html'),
      inject: 'body'
    }),
    new ExtractTextPlugin({
      filename: "[name].[chunkhash].css",
      disable: false,
      allChunks: true
    }),
    new CleanWebpackPlugin('dist', {
      root: path.resolve(__dirname, './'),
      verbose: true,
      dry: true
    })
  ],
};
