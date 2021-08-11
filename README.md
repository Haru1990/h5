# H5 应用模板框架


## 框架详情
- `webpack 5`
- `react 17.0.2`
- `rem + postcss` 适配
- `multi pages`
- `less` 样式处理器

## 文件目录结构

|---- src  
|---------- pages  
|--------------- pageA        页面A  
|--------------- pageB        页面B  
|---------- template  
|--------------- index.html   html模板  
|---------- utils  
|--------------- rem.js       动态设置根元素 font-size  
|----- build  
|----------- dev-server.js    dev环境 server 启动脚本  
|----------- proxy.conf.js    dev环境 http 代理文件  
|----------- webpack.base.js  
|----------- webpack.dev.js  
|----------- webpack.prod.js  
|----------- webpack.util.js  多页面：entry、htmlwebpackplugin 动态设置  

## webpack 5

- 热更新：
  - `webpack-dev-server` 方式
  - `webpack-dev-middleware + webpack-hot-middleware + react-hot-loader/patch` 方式 （本项目选用）
- 多页面应用，多入口 分开打包
- css 单独文件提取 + 压缩
- 图片等静态资源使用 `asset/resource`
- rem 实现响应式布局

## rem 响应式布局

- `rem.js` 动态设置根元素 `font-size`
- 基准设计图屏幕宽度：`1280`，根元素 `font-size：100px`
- `postcss + postcss-loader + postcss-pxtorem`，将 `px` 转换成 `rem`

## 