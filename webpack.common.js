const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
    entry: {
        index: './src/index.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].[contenthash].bundle.js',
        clean: true
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.m?js/,
                enforce: 'pre',
                use: ['source-map-loader']
            },
            {
                test: /^(?!.*\.test\.js$).*\.(js|jsx)$/,
                exclude:
                    /(node_modules|bower_components|__snapshots__|__mocks__)/,
                loader: 'babel-loader'
            },
            {
                test: /\.m?js/,
                type: 'javascript/auto',
                resolve: {
                    fullySpecified: false
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|png|jpe?g|gif)(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/'
                    }
                }
            },
            { test: /\.json$/, type: 'json' }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
        modules: ['node_modules']
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            hidePathInfo: true,
            maxSize: 244000,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    filename: 'vendor.[contenthash].js',
                    name(module) {
                        const moduleFileName = module
                            .identifier()
                            .split('/')
                            .reduceRight(item => item);

                        return moduleFileName;
                    }
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            scriptLoading: 'defer'
            // favicon: 'public/favicon.ico'
        }),
        new WebpackManifestPlugin()
    ]
};
