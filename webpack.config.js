const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './App.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    plugins: [
        new ExtractTextPlugin('App.css')
    ],
    resolve: {
        modules: [path.resolve(__dirname, 'src/js'), path.resolve(__dirname, 'src/css'), 'node_modules'],
        extensions: ['.jsx', '.js', '.css']
    },
    module: {
        loaders: [
            {
                test: /\.jsx|\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    presets: ['env', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader', 
                        use: [
                            'css-loader'
                        ]
                    }
                )
            },
            {
                test: /\.woff|\.woff2\.ttf\.eot\.svg*.*$/,
                loader: 'file'
            }
        ]
    }
}