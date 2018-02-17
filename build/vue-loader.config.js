const path = require('path')
module.exports = {
    extractCSS: process.env.NODE_ENV === 'production',
    preserveWhitespace: false,
    loaders: {
        scss: 'vue-style-loader!css-loader!sass-loader'
    },
    postcss: [
        require('autoprefixer')({
            browsers: ['last 3 versions']
        })
    ]
}