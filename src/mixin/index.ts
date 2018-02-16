import SSRDocumentHeaderMixin from "@/mixin/SSRDocumentHeaderMixin"
import ClientDocumentHeaderMixin from "@/mixin/ClientDocumentHeaderMixin"
import config from "@/config"

export const DocumentHeaderMixin = config.isSSR
    ? new SSRDocumentHeaderMixin()
    : new ClientDocumentHeaderMixin()