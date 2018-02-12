import { MutationTree } from 'vuex'
import { State } from './state'
import { BOOKS_ADD_ITEMS_TO_COLLECTION, BOOKS_SET_COLLECTION } from './mutationTypes'

export default <MutationTree<State>> {
    [BOOKS_ADD_ITEMS_TO_COLLECTION](state: {[key: string]: any}, books: {[key: string]: any}[]) {
        let authorCollection = [...state.collection];

        for (let i = 0; i < books.length; i++) {
            let authorIndex = authorCollection.findIndex(function (item: {[key: string]: any}) {
                return item.id === books[i].id;
            });

            if (authorIndex === -1) {
                authorCollection.push(books[i]);
            } else {
                authorCollection[authorIndex] = {...books[i]};
            }
        }

        state.collection = [...authorCollection];
    },

    [BOOKS_SET_COLLECTION](state: {[key: string]: any}, books: {[key: string]: any}[]) {
        state.collection = [...books];
    }

}