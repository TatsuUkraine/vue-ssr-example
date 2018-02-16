import mutations from './mutations'
import { State } from './state'
import getters from './getters';
import actions from "./actions";

export const filter = {
    state: new State(),
    mutations: mutations,
    getters: getters,
    actions: actions
};