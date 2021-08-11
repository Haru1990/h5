/*
 * @Author: 董方旭
 * @Date: 2021-08-09 14:10:06
 * @LastEditors: 董方旭
 * @LastEditTime: 2021-08-11 13:19:58
 * @Description: webpack base conf
 */
const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');
const pxtorem = require('postcss-pxtorem');
const { setEntry, setHtmlPlugin } = require('./webpack.util');

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: setEntry,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]/index.js',
    publicPath: '/',
    assetModuleFilename: 'images/[name][ext]'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.less$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  pxtorem({
                    // 表示根元素html的fontSize值,也可以是100,获取任意其他值
                    rootValue: 100,
                    // 设置px转换成rem的属性值，*表示所有属性的px转换为rem
                    propList: ['*'],
                  }),
                ],
              }
            },
          },
          'less-loader'
        ]
      },
      // {
      //   test: /\.svg$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         generator: (content) => svgToMiniDataURI(content.toString()),
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: 'asset/resource'
      },
    ]
  },
  plugins: [
    ...setHtmlPlugin(),
    // new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]/index.css',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
}
