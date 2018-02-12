import mutations from './mutations'
import { State } from './state'
import getters from './getters';

export const filter = {
    state: new State(),
    mutations: mutations,
    getters: getters
};