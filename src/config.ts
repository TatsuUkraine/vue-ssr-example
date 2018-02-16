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

    get VUE_ENV (): string {
        return this.prop['VUE_ENV'];
    }

    get ENV (): boolean {
        return this.prop['NODE_ENV']
    }

    get isSSR (): boolean {
        return this.VUE_ENV === 'server'
    }

    get PROGRESS_BAR_COLOR (): string {
        return '#ffca2b'
    }
}

export default new ConfigManager(process.env);