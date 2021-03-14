const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: './src/js/entry-index.js',
    output: {
        filename: "./src/js/bundle.js"
    },
    plugins: [
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /(node_modules|bower_components)/
        }]
    }
};