<template>
    <BooksList :books="books"></BooksList>
</template>

<script>
    import {BOOKS_FETCH_COLLECTION} from "@/store/module/book/type/action";
    import BooksList from "@/books/component/BooksList.vue";
    import {BOOK_GET_FILTERED_COLLECTION} from "@/store/module/book/type/getter";
    import {mapGetters} from 'vuex';
    import {DocumentHeaderMixin} from "@/mixin"
    import {mapMixins} from "@/util";

    export default {
        waitAsyncData: false,
        asyncData ({store}) {
            return store.dispatch(BOOKS_FETCH_COLLECTION);
        },

        metaInfo: {
            title: 'BookTitle',
        },

        computed: mapGetters({
            books: BOOK_GET_FILTERED_COLLECTION
        }),

        components: {
            BooksList
        },
        mixins: mapMixins(
            DocumentHeaderMixin
        )
    }
</script>