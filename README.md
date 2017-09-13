# react-build-template

> A React Build Template 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 说明
```bash
基本构建框架是vue-cli
修改部分依赖与配置来构建react项目，
目前还在学习中，慢慢完善。
是因为最近公司在做App项目，感觉前端受到冷落，所以打算学一波RN,在这之前先看看react
想学的想看的想玩的太多，时间太少，鱼与熊掌。
```

## changeLog
- 9.13  
  打包后css正常编译，但是dev模式下不能正常引入。   
  [css-modules](https://www.npmjs.com/package/react-css-modules),还要验证一下 classnames 结合 css-modules的使用，css变量。  
  todo:解决一下dev不能编译的问题，能不能改一下utils中的cssloader相关模块。  

- 9.12  
  今天只解决了一个坑，webpack的resolve.extensions看网上别人多了个''空，编译报错，webpack2不需要这个。引入了less，但是好像没有执行。  
  todo:看看为啥没有执行，没有编译less。

- 9.11  
  研究了下这个utils里的样式loader，发现了 [npm extract-text-webpack-plugin](https://www.npmjs.com/package/extract-text-webpack-plugin) ,主要是为了抽离css样式,防止将样式打包在js中引起页面样式加载错乱的现象  
  ```
  use:指需要什么样的loader去编译文件,这里由于源文件是.css所以选择css-loader  
  fallback:编译后用什么loader来提取css文件  
  publicfile:用来覆盖项目路径,生成该css文件的文件路径  
  ```
  todo: 写例子测试一下

- 9.10  
  完成了基本改善，可以跑起来。  
  添加了 [classnames](https://www.npmjs.com/package/classnames) 包，增加了`className`友好度，可以动态处理 className。  
  TODO: 研究下`style css less scss`的问题，看看react的样式应该怎么写，是否需要loader之类的，  
  　　　以及是否存在全局污染问题。

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
