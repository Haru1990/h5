/*
 * @Author: 董方旭
 * @Date: 2021-08-09 15:00:35
 * @LastEditors: 董方旭
 * @LastEditTime: 2021-08-09 15:01:53
 * @Description: dev proxy conf
 */
const yapi = 'http://yapi.sftcwl.com/mock/33';

const currentTarget = yapi;

module.exports = {
  '/open': {target: currentTarget},
};