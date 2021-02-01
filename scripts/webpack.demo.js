const webpackCommon = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const { pathResolve, genePath, isProduction } = require('./utils.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const currentConfig = {
  mode: 'development',
  cache: true,
  entry: ['@babel/polyfill', pathResolve('../demos/main.js')],
  output: {
    path: genePath('docs'),
    publicPath: isProduction ? 'https://joewrights.github.io/v-area-picker/' : '',
    filename: '[name].[hash:7].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: genePath('docs/demo.html'),
      template: genePath('demos/demo.html'),
      inject: true,
      minify: {
        collapseWhitespace: isProduction,
        removeComments: isProduction,
        removeRedundantAttributes: isProduction,
        removeScriptTypeAttributes: isProduction,
        removeStyleLinkTypeAttributes: isProduction,
        useShortDoctype: isProduction
      }
    })
  ],
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    port: 3333
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

module.exports = merge(webpackCommon, currentConfig)
