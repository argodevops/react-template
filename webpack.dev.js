const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    output: {
        publicPath: '/'
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        open: true,
        host: '0.0.0.0',
        allowedHosts: 'all',
        historyApiFallback: true,
        hot: true,
        devMiddleware: {
            writeToDisk: true
        }
    },
    plugins: [
        new CopyPlugin({
            patterns: ['config.json']
        })
    ]
});
