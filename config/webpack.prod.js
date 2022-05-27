const webpack = require('webpack');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const  CssMinimizerPlugin  = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const prodConfig = {
    mode: 'production',
    // devtool: 'none',
    optimization:{
        minimizer: [
            //压缩css
            new CssMinimizerPlugin(),
            // 压缩js
            new TerserPlugin()
          ],
    },
    module:{
        rules:[
            {
                test: /\.less$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader, // 从 JS 中创建样式节点
                    },
                    {
                      loader: 'css-loader', // 转化 CSS 为 CommonJS
                    },
                    {
                        loader: "postcss-loader",
                        options: {},
                      },
                    {
                      loader: 'less-loader', // 编译 Less 为 CSS
                    },
                  ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[hash:5].css"
        }),
        new BundleAnalyzerPlugin()
    ]
}
module.exports = merge(baseConfig,prodConfig);

