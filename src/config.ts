class ConfigManager {
    private prop: {[key: string]: any} = {};

    constructor(config: {[key: string]: any}) {
        this.prop = config;
    }

    get API_BASE_URL(): string {
        return this.prop['VUE_APP_API_BASE_URL']
    }

    get DEBUG(): boolean {
        return this.prop['VUE_APP_DEBUG']
    }
}

export default new ConfigManager(process.env);