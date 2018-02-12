import { GetterTree } from "vuex"
import { State } from './state'

export default <GetterTree<State, any>> {
    getBookCollection(state: State): {[key: string]: any}[] {
        return state.collection;
    },

    getFilteredBookCollection(state: State): {[key: string]: any}[] {
        return state.filteredCollection;
    }
};