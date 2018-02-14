import { ActionTree, ActionContext } from 'vuex'
import { State } from './state'
import { Books } from '@/api'
import {BOOKS_SET_COLLECTION} from './type/mutation'
import { BOOKS_FETCH_COLLECTION } from './type/action'
import {FILTERS_SET_FROM_BOOK_INCLUDES} from "@/store/module/filter/type/mutation";
import {BOOKS_FILTER_COLLECTION} from "@/store/module/book/type/mutation";

export default <ActionTree<State, any>> {
    [BOOKS_FETCH_COLLECTION]({ commit, rootState }: ActionContext<State, any> ): Promise<void> {
        return Books.getCollection({include: 'author'}).then((response) => {
            commit(BOOKS_SET_COLLECTION, response.data.data);
            commit(FILTERS_SET_FROM_BOOK_INCLUDES, response.data);
            commit(BOOKS_FILTER_COLLECTION, rootState.filter.selected.authors || []);
        });
    }
}