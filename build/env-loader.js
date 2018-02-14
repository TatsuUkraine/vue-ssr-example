const path = require('path')
const fs = require('fs')
const dotenv = require('dotenv')
const defaultConfig = dotenv.parse(fs.readFileSync(path.resolve(__dirname, '../.env')))

let config = {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
};
for (let i in defaultConfig) {
    config[i] = JSON.stringify(defaultConfig[i]);
}

try {
    const envConfig = dotenv.parse(fs.readFileSync(path.resolve(__dirname, `../.env.${config.NODE_ENV}`)))
    for (let i in envConfig) {
        config[i] = JSON.stringify(envConfig[i]);
    }
} catch (e) {

}

module.exports = config;