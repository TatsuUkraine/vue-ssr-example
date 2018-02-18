const path = require('path')
const webpack = require('webpack')
const vueConfig = require('./vue-loader.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const config = require('./env-loader')({stringify: false})
const styleLoader = require('./style-loader')

const isProd = config.NODE_ENV === 'production'

let plugins = [
    new ForkTsCheckerWebpackPlugin({tsconfig: path.resolve(__dirname, '../tsconfig.json'), vue: true}),
    new TsconfigPathsPlugin({configFile: path.resolve(__dirname, '../tsconfig.json')})
];

if (isProd) {
    plugins = [
        ...plugins,
        ...[
            new webpack.optimize.UglifyJsPlugin({
                compress: { warnings: false }
            }),
            new webpack.optimize.ModuleConcatenationPlugin(),
            new ExtractTextPlugin({
                filename: 'common.[chunkhash].css'
            })
        ]
    ];
} else {
    plugins.push(new FriendlyErrorsPlugin());
}

module.exports = {
    devtool: isProd
        ? false
        : '#cheap-module-source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: '[name].[chunkhash].js'
    },
    resolve: {
        alias: {
            'public': path.resolve(__dirname, '../public'),
            'assets': path.resolve(__dirname, '../src/assets'),
            '@': path.resolve(__dirname, '../src')
        },
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        noParse: /es6-promise\.js$/, // avoid webpack shimming process
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.css$/,
                use: styleLoader.getLoaders({extract: isProd, minimize: isProd})
            },
            {
                test: /\.scss/,
                use: styleLoader.getLoaders({extract: isProd, minimize: isProd, loader: 'scss'})
            },
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'babel-loader'
                },{
                    loader: 'ts-loader',
                    options: {
                        // disable type checker - we will use it in fork plugin
                        transpileOnly: true
                    }
                }],
            }
        ]
    },
    performance: {
        maxEntrypointSize: 300000,
        hints: isProd ? 'warning' : false
    },
    plugins: plugins,
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
}