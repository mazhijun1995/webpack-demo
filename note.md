全局安装： npm install webpack webpack-cli -g 不推荐

卸载:  npm uninstall webpack webpack-cli -g

推荐安装方式：局部安装

-D 开发环境   等同于 --save-dev
--save
npm install webpack

npx 这个工具 推荐使用
npx webpack

npm install yarn
yarn add webpack

nrm ls 查看有哪些源可以使用
nrm use taobao 使用taobao源
nrm test  taobao 测试网速




什么是loader？
文件预处理器
css-loader html-loader css-loader file-loader
特定的处理方案




// file-loader
// 1.发现图片模块
// 2.打包到dist目录下，改一个名字，自定义
// 3.移动到dist目录下之后，得到图片名称
// 4.然后作为返回值，返回给我们引入的变量



loader plugin webpack核心功能

-------------------------------

sourceMap

-----------------------------------
HMR hot module replacement

开启步骤
使用webpack-dev-server作为服务器启动
devServer配置中  hot:true
plugins  hotModuleRepalceMentPlugin
js模块中增加module.hot.acceput增加hmr代码
if(module.hot){
    module.hot.accept('./list',()=>{
        console.log('更新list文件模块');
        list();
    })
}



-------------------------------------
babel(js编译器)

npm install @babel/core @babel/preset-env babel-loader -D

已经使用@babel/preset-env ES6+语法转换 

标准涌入的语法：箭头函数，let，const 等   可以转换
标准引入的全局变量，部分原生对象新增的原型链上的方法 不可以， Promise,Symbol,set
polyfill

@babel/polyfill   全局变量的形式将方法注入，开发类库，UI组件时， 全局变量污染   
配合使用cornjs

@babel/plugin-transform-runtime  以闭包形式注入  保证全局环境不被污染  推荐使用
配合使用@babel/runtime-cornjs3   


-------------------------------
总结：
有什么需求，就安装什么 loader,plugin,
注意：
版本匹配，代码，在使用库，


核心概念 entry output loader plugin devServer  hmr  --watch 


--------------------------------------------
treeSharking   摇树优化      console.log()   无用的代码    依赖ES6模块语法   

lodash-es   fn

-------------------------------
development  production区分   打包环境区分


理下思路

开发环境
    devServer
    sourceMap
    接口代理,proxy
    ...
生产环境
    treeSharking
    代码压缩
    提供公共代码
共同点
    同样的入口
    部分相同的代码处理

方案
    webpack.prod.js  生产环境
    webpack.dev.js   开发环境
    webpack.base.js  开发环境与生产环境公用的代码
    借助一个工具  webpack-merge


-------------------------------
打包优化

1.入口配置：entry多入口   webpack.ProvidPlugin()
2.抽取公共代码：splitchunks
3.动态加载：按需加载，懒加载

-------------------------------

css文件代码分割
单独打包:
mini-css-extract-plugin
压缩css:
css-minimizer-webpack-plugin

配置css代码分割压缩css代码，要注意影响到js代码压缩，需要手动配置js压缩 terser-webpack-plugin


代码包分析工具
代码包大小可视化工具
webpack-bundle-analyzer


获取环境参数
yargs
