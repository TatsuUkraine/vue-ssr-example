export default class ComponentMetaParser {
    private metaInfo: {[key: string]: any} = {}
    private metaParsed: boolean = false

    constructor (vm: any) {
        const { metaInfo } = vm.$options
        if (metaInfo) {
            this.metaParsed = true
            this.metaInfo = (typeof metaInfo === 'function')
                ? metaInfo.call(vm)
                : metaInfo
        }
    }

    getTitle (): string {
        return this.metaInfo.title
    }

    hasMeta (): boolean {
        return this.metaParsed
    }
}