class ConfigManager {
    private prop: {[key: string]: any} = {};

    constructor(config: {[key: string]: any}) {
        this.prop = config;
    }

    get API_BASE_URL(): string {
        return this.prop['API_BASE_URL']
    }

    get DEBUG(): boolean {
        return this.prop['DEBUG']
    }
}
export default new ConfigManager(process.env);