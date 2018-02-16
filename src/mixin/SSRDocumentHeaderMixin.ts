import VueMixin from "@/mixin/contract/VueMixin"
import ComponentMetaParser from "@/service/ComponentMetaParser"

export default class SSRDocumentHeaderMixin implements VueMixin {
    $ssrContext: any;
    private setMetaInfo(): void {
        const componentMeta = new ComponentMetaParser(this)
        if (componentMeta.hasMeta()) {
            this.$ssrContext.title = `${componentMeta.getTitle()}`
        }
    }

    getProperties(): {[key: string]: any} {
        return {
            created: this.setMetaInfo
        };
    }
}