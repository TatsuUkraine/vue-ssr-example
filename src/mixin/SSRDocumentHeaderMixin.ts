import VueMixin from "@/mixin/contract/VueMixin";
import ComponentMetaParser from "@/service/ComponentMetaParser";

export default class SSRDocumentHeaderMixin implements VueMixin {
    $ssrContext: any
    created () {
        const componentMeta = new ComponentMetaParser(this)
        if (componentMeta.hasMeta()) {
            this.$ssrContext.title = `Vue HN 2.0 | ${componentMeta.getTitle()}`
        }
    }

    getProperties () {
        return {
            created: this.created
        };
    }
}