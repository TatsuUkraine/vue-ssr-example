import { ActionTree, ActionContext } from 'vuex'
import { State } from './state'
import { Authors } from '@/api'
import {AUTHORS_FILTER_COLLECTION, AUTHORS_SET_COLLECTION} from './type/mutation'
import { AUTHORS_FETCH_COLLECTION } from './type/action'
import {FILTERS_SET_FROM_AUTHOR_INCLUDES} from "@/store/module/filter/type/mutation";

export default <ActionTree<State, any>> {
    [AUTHORS_FETCH_COLLECTION]({ commit, rootState }: ActionContext<State, any> ): Promise<void> {
        return Authors.getCollection({include: 'books'}).then((response) => {
            commit(AUTHORS_SET_COLLECTION, response.data.data);
            commit(FILTERS_SET_FROM_AUTHOR_INCLUDES, response.data);
            commit(AUTHORS_FILTER_COLLECTION, rootState.filter.selected.books || []);
        });
    }
}