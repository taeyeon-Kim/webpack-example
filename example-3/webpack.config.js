const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: './src/js/entry-index.js',
    output: {
        filename: "./src/js/bundle.js"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /(node_modules|bower_components)/,
            query: {
                presets: ['es2015']
            },
        }, {
            test: /\.less$/,
            use: [{
                loader: 'style-loader' // creates style nodes from JS strings
            }, {
                loader: 'css-loader' // translates CSS into CommonJS
            }, {
                loader: 'less-loader' // compiles Less to CSS
            }]
        }]
    }
};