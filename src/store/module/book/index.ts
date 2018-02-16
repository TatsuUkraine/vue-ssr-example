import actions from './actions'
import mutations from './mutations'
import { State } from './state'
import getters from './getters';

export const book = {
    state: new State(),
    mutations: mutations,
    actions: actions,
    getters: getters
};