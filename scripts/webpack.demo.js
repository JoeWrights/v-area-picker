const webpackCommon = require('./webpack.common.js')
const webpack = require('webpack')
const Webpackbar = require('webpackbar')
const { merge } = require('webpack-merge')
const { pathResolve, genePath, isProduction } = require('./utils.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorPlugin = require('friendly-errors-webpack-plugin')

const host = '127.0.0.1'

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
    }),
    new FriendlyErrorPlugin({
      compilationSuccessInfo: {
        messages: [`You application is running here http://${host}:3333`]
      },
      clearConsole: false,
      additionalFormatters: [],
      additionalTransformers: []
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new Webpackbar()
  ],
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    host,
    port: 3333
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (isProduction) {
  currentConfig.mode = 'production'
  currentConfig.devtool = '#source-map'
  currentConfig.plugins = (currentConfig.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:7].css'
    })
  ])
  module.optimization = {
    minimizer: [
      new UglifyjsWebpackPlugin({
        parallel: true,
        sourceMap: false,
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      })
    ],
    noEmitOnErrors: true
  }
}

module.exports = merge(webpackCommon, currentConfig)
