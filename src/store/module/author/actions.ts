import { ActionTree, ActionContext } from 'vuex'
import { State } from './state'
import { Authors } from '@/api'
import {AUTHORS_SET_COLLECTION} from './mutationTypes'
import { AUTHORS_FETCH_COLLECTION } from './actionTypes'

export default <ActionTree<State, any>> {
    [AUTHORS_FETCH_COLLECTION]({ commit }: ActionContext<State, any> ) {
        Authors.getCollection().then((response) => {
            commit(AUTHORS_SET_COLLECTION, response.data.data);
        });
    }
}