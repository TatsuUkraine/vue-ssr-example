import { GetterTree } from "vuex"
import { State } from './state'
import {BOOK_GET_COLLECTION, BOOK_GET_FILTERED_COLLECTION} from "./type/getter";

export default <GetterTree<State, any>> {
    [BOOK_GET_COLLECTION](state: State): {[key: string]: any}[] {
        return state.collection;
    },

    [BOOK_GET_FILTERED_COLLECTION](state: State): {[key: string]: any}[] {
        return state.filteredCollection;
    }
};