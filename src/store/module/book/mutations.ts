import { MutationTree } from 'vuex'
import { State } from './state'
import {BOOKS_ADD_ITEMS_TO_COLLECTION, BOOKS_FILTER_COLLECTION, BOOKS_SET_COLLECTION} from './type/mutation'

export default <MutationTree<State>> {
    [BOOKS_ADD_ITEMS_TO_COLLECTION](state: State, books: {[key: string]: any}[]) {
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

    [BOOKS_SET_COLLECTION](state: State, books: {[key: string]: any}[]) {
        state.collection = [...books];
    },

    [BOOKS_FILTER_COLLECTION](state: State, authorIds: number[]) {
        if (!authorIds.length) {
            state.filteredCollection = [...state.collection];
            return;
        }

        state.filteredCollection = state.collection.filter(function (book: {[key: string]: any}) {
            return authorIds.indexOf(parseInt(book.relationships.author.data.id)) !== -1;
        });
    }
}