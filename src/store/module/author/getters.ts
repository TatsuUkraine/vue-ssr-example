import { GetterTree } from "vuex"
import { State } from './state'
import {AUTHOR_GET_COLLECTION, AUTHOR_GET_FILTERED_COLLECTION} from "./type/getter";

export default <GetterTree<State, any>> {
    [AUTHOR_GET_COLLECTION](state: State): {[key: string]: any}[] {
        return state.collection;
    },

    [AUTHOR_GET_FILTERED_COLLECTION](state: State): {[key: string]: any}[] {
        return state.filteredCollection;
    }
};