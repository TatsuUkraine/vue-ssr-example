const path = require('path')
const fs = require('fs')
const dotenv = require('dotenv')
const defaultConfig = dotenv.parse(fs.readFileSync(path.resolve(__dirname, '../.env')))

module.exports = (customConfig = {}) => {
    let config = {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    };

    for (let i in defaultConfig) {
        if (defaultConfig.hasOwnProperty(i)) {
            config[i] = JSON.stringify(defaultConfig[i]);
        }
    }

    try {
        const envConfig = dotenv.parse(fs.readFileSync(path.resolve(__dirname, `../.env.${config.NODE_ENV}`)))
        for (let i in envConfig) {
            if (envConfig.hasOwnProperty(i)) {
                config[i] = JSON.stringify(envConfig[i]);
            }
        }
    } catch (e) {

    }

    for (let i in customConfig) {
        if (customConfig.hasOwnProperty(i)) {
            config[i] = JSON.stringify(customConfig[i]);
        }
    }

    return config;
};