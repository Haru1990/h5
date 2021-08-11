/*
 * @Author: 董方旭
 * @Date: 2021-08-09 14:15:26
 * @LastEditors: 董方旭
 * @LastEditTime: 2021-08-09 20:40:50
 * @Description: dev server
 */
const express = require('express');
const webpack = require('webpack');
const { createProxyMiddleware } = require('http-proxy-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const webpackDevConf = require('./webpack.dev.js');
const proxyConf = require('./proxy.conf.js');
const compiler = webpack(webpackDevConf);

var devMiddleware = webpackDevMiddleware(compiler, {
  stats: 'errors-warnings',
  publicPath: webpackDevConf.output.publicPath,
});

var hotMiddleware = webpackHotMiddleware(compiler, {
  log: false,
  heartbeat: 2000
});

// 告知 express 使用 webpack-dev-middleware，
// 以及将 webpack.dev.js 配置文件作为基础配置。
app.use(devMiddleware);

app.use(hotMiddleware);

// proxy
Object.keys(proxyConf).forEach((uri) => {
  app.use(uri, createProxyMiddleware(uri, { changeOrigin: true, ...proxyConf[uri] }));
});

// 将文件 serve 到 port 3000。
app.listen(3000, function () {
  console.log('Janus PC H5 App listening on port 3000!\n');
});