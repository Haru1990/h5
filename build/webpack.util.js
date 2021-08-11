/*
 * @Author: 董方旭
 * @Date: 2021-08-09 15:10:53
 * @LastEditors: 董方旭
 * @LastEditTime: 2021-08-10 13:58:03
 * @Description: 
 */
// const path = require('path')
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devMode = process.env.NODE_ENV !== "production";

// 开发模式 HMR 处理
function setEntry() {
  const files = glob.sync('./src/pages/**/index.jsx');
  const entry = {};
  files.forEach(file => {
    const ret = file.match(/^\.\/src\/pages\/(\S*)\/index\.jsx$/)
    if (ret) {
      entry[ret[1]] = {
        import: devMode ? ['react-hot-loader/patch', 'webpack-hot-middleware/client?noInfo=true&reload=true', file] : file,
        dependOn: 'react_vendors',
      }
    }
  })

  // 拆分react依赖
  entry['react_vendors'] = {
    import: ['react', 'react-dom'],
    filename: '_common/[name].js'
  }

  return entry;
}

// 获取 html 模板
function getTemplate(name) {
  const files = glob.sync(`./src/pages/${name}/index.html`)
  if (files.length > 0) {
    return files[0]
  }
  return './src/template/index.html'
}

// 动态设置 HtmlWebpackPlugin
function setHtmlPlugin() {
  const files = glob.sync('./src/pages/**/index.jsx')
  const options = []
  files.forEach(file => {
    const ret = file.match(/^\.\/src\/pages\/(\S*)\/index\.jsx$/)
    if (ret) {
      const name = ret[1];
      options.push(new HtmlWebpackPlugin({
        title: name,
        filename: `${name}/index.html`,
        template: getTemplate(name),
        chunks: ['react_vendors', name, '[name]/index.css']
      }))
    }
  })
  return options
}

module.exports = {
  setEntry,
  setHtmlPlugin
}
