import { ActionTree, ActionContext } from 'vuex'
import { State } from './state'
import { Authors } from '@/api'
import {AUTHORS_SET_COLLECTION} from './type/mutation'
import { AUTHORS_FETCH_COLLECTION } from './type/action'
import {FILTERS_SET_FROM_AUTHOR_INCLUDES} from "@/store/module/filter/type/mutation";

export default <ActionTree<State, any>> {
    [AUTHORS_FETCH_COLLECTION]({ commit }: ActionContext<State, any> ) {
        Authors.getCollection({include: 'books'}).then((response) => {
            commit(AUTHORS_SET_COLLECTION, response.data.data);
            commit(FILTERS_SET_FROM_AUTHOR_INCLUDES, response.data);
        });
    }
}