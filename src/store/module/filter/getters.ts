import { GetterTree } from "vuex"
import { State } from './state'
import {FILTER_GET_COLLECTION, FILTER_IS_SELECTED} from "./type/getter";

export default <GetterTree<State, any>> {
    [FILTER_GET_COLLECTION](state: State): {[key: string]: any}[] {
        return state.collection;
    },

    [FILTER_IS_SELECTED]: (state: State) => ({ filter, id }: {[key: string]: any}) => {
        if (!state.selected[filter] || !state.selected[filter].length) {
            return false;
        }

        return state.selected[filter].indexOf(id) !== -1;
    }
};