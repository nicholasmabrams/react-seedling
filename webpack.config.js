var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app.js',
    output: { path: __dirname, filename: 'build/bundle.js' },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /.js/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        },  { 
            test: /\.css$/, 
            loader: 'style-loader!css-loader'
        }]
    },
};
