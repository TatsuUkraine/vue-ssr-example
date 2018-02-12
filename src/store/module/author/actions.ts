import { ActionTree, ActionContext } from 'vuex'
import { State } from './state'
import { Authors } from '@/api'
import { ADD_ITEMS_TO_COLLECTION } from './mutationTypes'
import { FETCH_COLLECTION } from './actionTypes'

export default <ActionTree<State, any>> {
    [FETCH_COLLECTION]( { commit }: ActionContext<State, any> ) {
        Authors.getCollection().then((response) => {
            commit(ADD_ITEMS_TO_COLLECTION, response.data);
        });
    }
}