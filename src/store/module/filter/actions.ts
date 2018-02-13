import { ActionTree, ActionContext } from 'vuex'
import { State } from './state'
import { FILTERS_ADD_SELECTED, FILTERS_REMOVE_SELECTED } from './type/mutation'
import { FILTERS_ADD_SELECTED as FILTERS_ACTION_ADD_SELECTED, FILTERS_REMOVE_SELECTED as FILTERS_ACTION_REMOVE_SELECTED } from './type/action'
import router from "@/router";
import { FilterParamGenerator } from "@/service";

export default <ActionTree<State, any>> {
    [FILTERS_ACTION_ADD_SELECTED]({ commit, state }: ActionContext<State, any>, data: {[key: string]: any} ) {
        commit(FILTERS_ADD_SELECTED, data);
        router.push({query: FilterParamGenerator.generateParamsFromFilters(state.selected)});
    },

    [FILTERS_ACTION_REMOVE_SELECTED]({ commit, state }: ActionContext<State, any>, data: {[key: string]: any} ) {
        commit(FILTERS_REMOVE_SELECTED, data);
        router.push({query: FilterParamGenerator.generateParamsFromFilters(state.selected)});
    }
}