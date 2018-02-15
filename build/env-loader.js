const path = require('path')
const fs = require('fs')
const dotenv = require('dotenv')
const defaultConfig = dotenv.parse(fs.readFileSync(path.resolve(__dirname, '../.env')))

module.exports = ({customConfig = {}, stringify = true}) => {
    let config = {
        NODE_ENV: process.env.NODE_ENV || 'development'
    };

    config = {...config, ...defaultConfig};

    try {
        const envConfig = dotenv.parse(fs.readFileSync(path.resolve(__dirname, `../.env.${config.NODE_ENV}`)))
        config = {...config, ...envConfig};
    } catch (e) {

    }

    config = {...config, ...customConfig};

    if (stringify) {
        for (let key in config) {
            if (config.hasOwnProperty(key)) {
                config[key] = JSON.stringify(config[key]);
            }
        }
    }

    return config;
};