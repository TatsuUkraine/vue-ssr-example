import { MutationTree } from 'vuex'
import { State } from './state'
import {
    FILTERS_ADD_SELECTED,
    FILTERS_REMOVE_SELECTED,
    FILTERS_SET_COLLECTION,
    FILTERS_SET_FROM_INCLUDES
} from './type/mutation'

export default <MutationTree<State>> {
    [FILTERS_SET_COLLECTION](state: State, collection: {[key: string]: any}[]) {
        state.collection = collection;
    },

    [FILTERS_ADD_SELECTED](state: State, {filter, id}: {[key: string]: any}) {
        let selectedFilters = [...state.selected[filter] || []];
        selectedFilters.push(id);
        state.selected = {...state.selected, [filter]: selectedFilters};
    },

    [FILTERS_REMOVE_SELECTED](state: State, {filter, id}: {[key: string]: any}) {
        if (!state.selected[filter]) {
            return;
        }

        let selectedFilters = state.selected[filter].filter(function (selectedId: number) {
            return id !== selectedId;
        });
        state.selected = {...state.selected, [filter]: selectedFilters};
    },

    [FILTERS_SET_FROM_INCLUDES](state: State, includes: {[key: string]: any}[]) {
        let collection = [];

        for (let i = 0; i < includes.length; i++) {
            let include = includes[i],
                title = include.attributes.name || include.attributes.title,
                name = title.toLowerCase().replace(/[\,,\s]/g, '');

            collection.push({
                id: parseInt(includes[i].id),
                name: name,
                title: title
            });
        }

        state.collection = collection;
        state.selected = {};
    }
}