const webpack = require('webpack');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const devConfig = {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer:{
        static: './dist',
        hot: true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge(baseConfig,devConfig);


