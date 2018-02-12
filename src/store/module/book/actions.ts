import { ActionTree, ActionContext } from 'vuex'
import { State } from './state'
import { Books } from '@/api'
import { BOOKS_SET_COLLECTION } from './mutationTypes'
import { BOOKS_FETCH_COLLECTION } from './actionTypes'

export default <ActionTree<State, any>> {
    [BOOKS_FETCH_COLLECTION]({ commit }: ActionContext<State, any> ) {
        Books.getCollection().then((response) => {
            commit(BOOKS_SET_COLLECTION, response.data.data);
        });
    }
}