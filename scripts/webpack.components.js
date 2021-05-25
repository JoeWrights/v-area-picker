const { merge } = require('webpack-merge')
const { pathResolve } = require('./utils.js')
const webpackCommon = require('./webpack.common.js')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

const Components = require('../components.json')

const currentConfig = {
  entry: Components,
  output: {
    path: pathResolve('../dist'), // 打包后的文件存放在dist文件夹
    publicPath: '../dist/', // 设置公共路径
    filename: '[name].js', // 打包后输出文件
    chunkFilename: '[id].js',
    libraryTarget: 'umd'
  },
  optimization: {
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

module.exports = merge(currentConfig, webpackCommon)
