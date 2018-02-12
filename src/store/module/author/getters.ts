import { GetterTree } from "vuex"
import { State } from './state'

export default <GetterTree<State, any>> {
    getCollection(state: State): {[key: string]: any}[] {
        return state.authors;
    }
};