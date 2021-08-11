/*
 * @Author: 董方旭
 * @Date: 2021-08-09 14:16:50
 * @LastEditors: 董方旭
 * @LastEditTime: 2021-08-09 20:30:20
 * @Description: webpack dev conf
 */
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const WebpackBar = require('webpackbar');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  target: 'web',
  devServer: {
    open: true,
    contentBase: path.join(__dirname, './dist'),
    hot: true
  },
  plugins: [
    // Tell user build progress
    new WebpackBar(),
    // Tell webpack we want hot reloading
    new webpack.HotModuleReplacementPlugin(),
  ]
});