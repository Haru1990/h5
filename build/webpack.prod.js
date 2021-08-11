/*
 * @Author: 董方旭
 * @Date: 2021-08-09 14:41:32
 * @LastEditors: 董方旭
 * @LastEditTime: 2021-08-10 13:45:46
 * @Description: webpack prod conf
 */
process.env.NODE_ENV = "production";

const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      `...`,
      new CssMinimizerPlugin()
    ]
  },
});