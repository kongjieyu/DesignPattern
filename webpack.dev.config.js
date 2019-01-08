const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './release/hundle.js'
    },

    module: {
        rules: [{
            // test定义要去检验哪些文件
            test: /\.js?$/,
            //排除
            exclude: /(node_modules)/,
            //对检测出来的文件进行babel处理，如果遇到es6的语法，就变成es5的
            loader: 'babel-loader'

        }]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: './index.html'
        })
    ],
    // devServer是执行本地开发环境的服务器，服务器的根目录地址
    devServer: {
        contentBase: path.join(__dirname, './release'),
        open: true, //自动打开浏览器
        port: 9000
    }
}