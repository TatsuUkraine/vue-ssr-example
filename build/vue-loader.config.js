const path = require('path')
const config = require('./env-loader')({stringify: false})
const styleLoader = require('./style-loader')

const isProd = config.NODE_ENV === 'production'

module.exports = {
    extractCSS: process.env.NODE_ENV === 'production',
    preserveWhitespace: false,
    loaders: styleLoader.getVueLoaders({extract: isProd, minimize: isProd}),
    postcss: [
        require('autoprefixer')({
            browsers: ['last 3 versions']
        })
    ]
}