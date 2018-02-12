import { MutationTree } from 'vuex'
import { State } from './state'
import { AUTHORS_ADD_ITEMS_TO_COLLECTION, AUTHORS_SET_COLLECTION } from './mutationTypes'

export default <MutationTree<State>> {
    [AUTHORS_ADD_ITEMS_TO_COLLECTION](state: {[key: string]: any}, ...authors: {[key: string]: any}[]) {
        let authorCollection = [...state.authors];

        for (let i = 0; i < authors.length; i++) {
            let authorIndex = authorCollection.findIndex(function (item: {[key: string]: any}) {
                return item.id === authors[i].id;
            });

            if (authorIndex === -1) {
                authorCollection.push(authors[i]);
            } else {
                authorCollection[authorIndex] = {...authors[i]};
            }
        }

        state.authors = [...authorCollection];
    },

    [AUTHORS_SET_COLLECTION](state: {[key: string]: any}, ...authors: {[key: string]: any}[]) {
        state.authors = {...authors};
    }

}