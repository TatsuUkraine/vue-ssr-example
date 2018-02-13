import { MutationTree } from 'vuex'
import { State } from './state'
import {AUTHORS_ADD_ITEMS_TO_COLLECTION, AUTHORS_FILTER_COLLECTION, AUTHORS_SET_COLLECTION} from './type/mutation'

export default <MutationTree<State>> {
    [AUTHORS_ADD_ITEMS_TO_COLLECTION](state: {[key: string]: any}, authors: {[key: string]: any}[]) {
        let authorCollection = [...state.collection];

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

        state.collection = [...authorCollection];
    },

    [AUTHORS_SET_COLLECTION](state: {[key: string]: any}, authors: {[key: string]: any}[]) {
        state.collection = [...authors];
    },

    [AUTHORS_FILTER_COLLECTION](state: State, bookIds: number[]) {
        if (!bookIds.length) {
            state.filteredCollection = [...state.collection];
            return;
        }

        state.filteredCollection = state.collection.filter(function (author: {[key: string]: any}) {
            return !!author.relationships.books.data.find(function (book: {[key: string]: string}) {
                return bookIds.indexOf(parseInt(book.id)) !== -1;
            });
        });
    }

}