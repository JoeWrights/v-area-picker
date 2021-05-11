const webpackMerge = require('webpack-merge')
const webpack = require('webpack')
const Webpackbar = require('webpackbar')
const webpackCommon = require('./webpack.common')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorPlugin = require('friendly-errors-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const { pathResolve, genePath, isProduction } = require('./utils.js')

const host = '127.0.0.1'

const currentConfig = {
  mode: 'development',
  cache: true,
  entry: ['@babel/polyfill', pathResolve('../examples/src/main.js')],
  output: {
    path: genePath('docs'),
    publicPath: isProduction ? 'https://joewrights.github.io/v-area-picker/' : '',
    filename: 'build.[hash:7].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: genePath('docs/index.html'),
      template: genePath('examples/index.html'),
      inject: true,
      minify: {
        collapseWhitespace: isProduction,
        removeComments: isProduction,
        removeRedundantAttributes: isProduction,
        removeScriptTypeAttributes: isProduction,
        removeStyleLinkTypeAttributes: isProduction,
        useShortDoctype: isProduction
      },
      // 注入自定义配置
      isProduction
    }),
    new FriendlyErrorPlugin({
      compilationSuccessInfo: {
        messages: [`You application is running here http://${host}:7777`]
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
    port: 7777
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

// https://github.com/survivejs/webpack-merge/blob/develop/CHANGELOG.md#503--2020-07-06
module.exports = webpackMerge.merge(webpackCommon, currentConfig)
