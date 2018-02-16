import VueMixin from "@/mixin/contract/VueMixin"

export default (...mixins: VueMixin[]): {[key: string]: any}[] => {
    return mixins.map(mixin => mixin.getProperties());
}