import { ActionTree, ActionContext } from 'vuex'
import { State } from './state'
import { FILTERS_ADD_SELECTED, FILTERS_REMOVE_SELECTED, FILTERS_SET_SELECTED_FROM_REQUEST } from './type/mutation'
import {
    FILTERS_ADD_SELECTED as FILTERS_ACTION_ADD_SELECTED,
    FILTERS_REMOVE_SELECTED as FILTERS_ACTION_REMOVE_SELECTED,
    FILTERS_SET_SELECTED_FROM_REQUEST as FILTERS_ACTION_SET_SELECTED_FROM_REQUEST
} from './type/action'
import router from "@/router";
import { FilterParamGenerator } from "@/service";
import {BOOKS_FILTER_COLLECTION} from "@/store/module/book/type/mutation";
import {AUTHORS_FILTER_COLLECTION} from "@/store/module/author/type/mutation";

export default <ActionTree<State, any>> {
    [FILTERS_ACTION_ADD_SELECTED]({ commit, state }: ActionContext<State, any>, data: {[key: string]: any} ) {
        commit(FILTERS_ADD_SELECTED, data);
        router.push({query: FilterParamGenerator.generateParamsFromFilters(state.selected)});
    },

    [FILTERS_ACTION_REMOVE_SELECTED]({ commit, state }: ActionContext<State, any>, data: {[key: string]: any} ) {
        commit(FILTERS_REMOVE_SELECTED, data);
        router.push({query: FilterParamGenerator.generateParamsFromFilters(state.selected)});
    },

    [FILTERS_ACTION_SET_SELECTED_FROM_REQUEST]({ commit, state }: ActionContext<State, any>, data: {[key: string]: string} ) {
        commit(FILTERS_SET_SELECTED_FROM_REQUEST, data);
        commit(BOOKS_FILTER_COLLECTION, state.selected.authors || []);
        commit(AUTHORS_FILTER_COLLECTION, state.selected.books || []);
    }
}