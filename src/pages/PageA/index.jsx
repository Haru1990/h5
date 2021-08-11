/*
 * @Author: 董方旭
 * @Date: 2021-08-09 15:06:27
 * @LastEditors: 董方旭
 * @LastEditTime: 2021-08-10 19:04:03
 * @Description: 统一入口平台
 */
// import 'babel-polyfill';

import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

import '../../utils/rem';
import App from './App';
import './style.less';

hot(App);

ReactDom.render(
  <App />,
  document.getElementById('root'),
);

