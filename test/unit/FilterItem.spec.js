import {shallow} from '@vue/test-utils'
import FilterItem from '@/component/FilterItem.vue'
import {FILTER_IS_SELECTED} from "@/store/module/filter/type/getter"

describe('FilterItem.vue', () => {
    it('renders props.filter when passed', () => {
        const filter = {
            title: 'someTitle',
            count: 4
        }

        const $store = {
            getters: {
                [FILTER_IS_SELECTED]: () => true
            }
        }

        const wrapper = shallow(FilterItem, {
            propsData: {filter},
            mocks: {
                $store
            }
        })

        expect(wrapper.vm.title).toEqual(filter.title)
        expect(wrapper.vm.count).toEqual(filter.count)
    })
})
