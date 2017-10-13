
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        app: './src/index.js',                          //当有多个文件的时候 可以 用对象传入值， key 对应 output.filename 中的 [name]
        print: './src/print.js'
    },
    plugins: [
        new HtmlWebpackPlugin({                     // HtmlWebpackPlugin 创建一个全新的index.html,所有的打包文件会自动添加到Html中
            title: 'Output Management'
        }),
        new CleanWebpackPlugin(['dist'])
    ],
    output:{
        path: path.resolve(__dirname,"dist"),
        filename: "[name].bundle.js"
    },
  
};