const ExtractTextPlugin = require('extract-text-webpack-plugin')

const defaultLoaders = [
    {
        loader: 'css-loader',
        options: {
            minimize: false
        }
    },
    {
        loader: 'resolve-url-loader'
    }
]

const generateExtractLoaders = ({minimize = false, loader}) => {
    let loaders = defaultLoaders.map(function (defaultLoader) {
        let loader = {...defaultLoader};

        if (loader.options) {
            loader.options.minimize = minimize
        }

        return loader
    })

    if (loader) {
        loaders.push({
            loader: `${loader}-loader`,
            options: {
                sourceMap: true
            }
        })
    }

    return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader',
    })
}

const generateInlineLoaders = ({minimize = false, loader}) => {
    let loaders = [
        'vue-style-loader',
        ...defaultLoaders.map(function (defaultLoader) {
            let loader = defaultLoader.loader
            let options = []

            if (defaultLoader.options) {
                if (defaultLoader.options.sourceMap) {
                    options.push('sourceMap')
                }

                if (minimize) {
                    options.push('minimize')
                }
            }

            if (options.length) {
                loader += `?${options.join('&')}`
            }

            return loader
        })
    ]

    if (loader) {
        loaders.push(`${loader}-loader?sourceMap`)
    }

    return loaders
}

module.exports = {
    getVueLoaders ({extract = false, minimize = false}) {
        return {
            scss: this.getLoaders({extract, minimize, loader: 'sass'}),
            css: this.getLoaders({extract, minimize})
        }
    },
    getLoaders ({extract = false, minimize = false, loader}) {
        if (extract) {
            return generateExtractLoaders({
                minimize,
                loader
            })
        } else {
            return generateInlineLoaders({
                minimize,
                loader
            })
        }
    }
};