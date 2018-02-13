import { MutationTree } from 'vuex'
import { State } from './state'
import {
    FILTERS_ADD_SELECTED,
    FILTERS_REMOVE_SELECTED,
    FILTERS_SET_COLLECTION, FILTERS_SET_FROM_AUTHOR_INCLUDES,
    FILTERS_SET_FROM_BOOK_INCLUDES
} from './type/mutation'

const Helpers = {
    getTitle: (title: string): string => { return title.toLowerCase().replace(/[\,,\s]/g, ''); },
    getAuthorsByFilterId (filterId: number, ...data: {[key: string]: any}[]): {[key: string]: string}[] {
        return data.filter((item) => {
            return !!item.relationships.books.data.find((book: {[key: string]: string}) => {
                return parseInt(book.id) === filterId;
            });
        });
    },
    getBooksByFilterId (filterId: number, ...data: {[key: string]: any}[]): {[key: string]: string}[] {
        return data.filter((item) => {
            return parseInt(item.relationships.author.data.id) === filterId;
        });
    }
}

export default <MutationTree<State>> {
    [FILTERS_SET_COLLECTION](state: State, collection: {[key: string]: any}[]) {
        state.collection = collection;
    },

    [FILTERS_ADD_SELECTED](state: State, {filter, id}: {[key: string]: any}) {
        let selectedFilters = [...state.selected[filter] || []];
        selectedFilters.push(id);
        state.selected = {...state.selected, [filter]: selectedFilters};
    },

    [FILTERS_REMOVE_SELECTED](state: State, {filter, id}: {[key: string]: any}) {
        if (!state.selected[filter]) {
            return;
        }

        let selectedFilters = state.selected[filter].filter(function (selectedId: number) {
            return id !== selectedId;
        });
        state.selected = {...state.selected, [filter]: selectedFilters};
    },

    [FILTERS_SET_FROM_BOOK_INCLUDES](state: State, data: {[key: string]: any}) {
        let collection = [],
            includes = data.included;

        for (let i = 0; i < includes.length; i++) {
            let include = includes[i],
                title = include.attributes.name,
                name = Helpers.getTitle(title);

            let collectionItem = {
                id: parseInt(include.id),
                name: name,
                title: title,
                count: 0
            };

            let authors = Helpers.getBooksByFilterId(collectionItem.id, ...data.data);
            collectionItem.count = authors.length;

            collection.push(collectionItem);
        }

        state.collection = collection;
        state.selected = {};
    },

    [FILTERS_SET_FROM_AUTHOR_INCLUDES](state: State, data: {[key: string]: any}) {
        let collection = [],
            includes = data.included;

        for (let i = 0; i < includes.length; i++) {
            let include = includes[i],
                title = include.attributes.title,
                name = Helpers.getTitle(title);

            let collectionItem = {
                id: parseInt(include.id),
                name: name,
                title: title,
                count: 0
            };

            let authors = Helpers.getAuthorsByFilterId(collectionItem.id, ...data.data);
            collectionItem.count = authors.length;

            collection.push(collectionItem);
        }

        state.collection = collection;
        state.selected = {};
    }
}