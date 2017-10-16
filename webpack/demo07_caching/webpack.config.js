
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpack = require("webpack");

module.exports = {

    entry:{
        main: "./src/index.js",
        vendor: [
            'lodash'
        ]
    },
    devtool: 'inline-source-map',

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Caching'
        }),
        new webpack.HashedModuleIdsPlugin(),
       // new webpack.HotModuleReplacementPlugin() ,               // 可通过命令来修改webpack-dev-server的配置： webpack-dev-server --hotOnly
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'runtime'
        })
    ],

    output :{
        filename: "[name].[chunkhash].js",
        path: path.resolve(__dirname,"dist")
    },
    module: {
        rules : [
            {
                test: /\.css$/,
                use: [ 'style-loader','css-loader']
            }
        ]
    }

}

