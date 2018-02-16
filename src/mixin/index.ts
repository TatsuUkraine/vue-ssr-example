import SSRDocumentHeaderMixin from "@/mixin/SSRDocumentHeaderMixin";
import ClientDocumentHeaderMixin from "@/mixin/ClientDocumentHeaderMixin";

export const DocumentHeaderMixing = process.env.VUE_ENV === 'server'
    ? new SSRDocumentHeaderMixin()
    : new ClientDocumentHeaderMixin()