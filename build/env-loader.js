const path = require('path')
const fs = require('fs')
const dotenv = require('dotenv')
const loadDotEnv = filePath => dotenv.parse(fs.readFileSync(path.resolve(__dirname, filePath)));

const defaultConfig = loadDotEnv('../.env')
const defaultConfigKey = [
    'NODE_ENV'
]

let baseConfig = {
    NODE_ENV: process.env.NODE_ENV || 'development'
}

baseConfig = {...baseConfig, ...defaultConfig}

try {
    const envConfig = loadDotEnv(`../.env.${baseConfig.NODE_ENV}`)
    baseConfig = {...baseConfig, ...envConfig}
} catch (e) {

}

try {
    const envConfig = loadDotEnv(`../.env.local`)
    baseConfig = {...baseConfig, ...envConfig}
} catch (e) {

}

try {
    const envConfig = loadDotEnv(`../.env.${baseConfig.NODE_ENV}.local`)
    baseConfig = {...baseConfig, ...envConfig}
} catch (e) {

}

module.exports = ({customConfig = {}, stringify = true}) => {
    let config = {...baseConfig};
    Object.keys(customConfig)
        .filter(key => (defaultConfigKey.indexOf(key) === -1))
        .forEach(key => { config[key] = customConfig[key] });

    if (stringify) {
        for (let key in config) {
            if (config.hasOwnProperty(key)) {
                config[key] = JSON.stringify(config[key]);
            }
        }
    }

    return config;
};