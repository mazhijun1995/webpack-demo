const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // 默认production，打包文件压缩，开发时：development,不被压缩
    // ugligyjsWebpackPlugin webpack3
    // webpack4 production
    // 定位错误
    // devtool: 'eval-cheap-source-map',
    // 入口文件
    entry: {
        index:'./src/index.js',
        // jquery:'jquery'
    },
    // 公共代码提取打包
    optimization:{
        splitChunks:{
            chunks:"all"
        }
    },
    // 输出
    output:{
        // 自定义打包文件名
        // 占位符
        filename: '[name].[hash:5].js',
        // 写绝对路径
        path:path.resolve(__dirname, '../dist'),
        publicPath:'/'
    },
    module:{
        rules:[
            {
              test: /\.js$/, 
              use:{
                loader: "babel-loader",
                // options:{
                //   // //转换ES5+语法
                //   // presets:[["@babel/preset-env",{
                //   //   // 必须同时设置corejs:3   默认使用corejs:2
                //   //   useBuiltIns:'usage', // entry  // false //usage按需引入
                //   //   corejs: 3
                //   // }]]
                // }
              },
              exclude: /node_modules/
            },
            {
                test: /\.(jpg|png|gif)$/, //指定检测什么样的文件
                use:{
                    loader: "url-loader",
                    options:{
                        //hash5
                        name:'[name].[hash:5].[ext]',
                        outputPath: 'assets',
                        limit: 2048
                    }
                }
            },
            {
                test: /\.ttf$/,
                use:{
                    loader: "file-loader",
                    options:{
                        //hash5
                        name:'[name].[hash:5].[ext]',
                        outputPath: 'font'
                    }
                }
            },
            {
                test: /\.less$/,
                use: [
                    {
                      loader: 'style-loader', // 从 JS 中创建样式节点
                    },
                    {
                      loader: 'css-loader', // 转化 CSS 为 CommonJS
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                          postcssOptions: {
                            plugins: [
                              [
                                "postcss-preset-env",
                                {
                                  // Options
                                },
                              ],
                            ],
                          },
                        },
                      },
                    {
                      loader: 'less-loader', // 编译 Less 为 CSS
                    },
                  ],
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: '我是模板',
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        // new webpack.ProvidePlugin({
        //     $:'jquery',
        //     jQuery:'jquery'
        // })
    ]
}

