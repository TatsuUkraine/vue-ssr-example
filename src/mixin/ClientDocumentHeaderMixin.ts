import VueMixin from "@/mixin/contract/VueMixin"
import ComponentMetaParser from "@/service/ComponentMetaParser"

export default class ClientDocumentHeaderMixin implements VueMixin {
    private setMetaInfo(): void {
        const componentMeta = new ComponentMetaParser(this)
        if (componentMeta.hasMeta()) {
            document.title = `${componentMeta.getTitle()}`
        }
    }

    getProperties(): {[key: string]: any} {
        return {
            mounted: this.setMetaInfo
        };
    }
}