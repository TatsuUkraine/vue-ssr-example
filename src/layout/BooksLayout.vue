<template>
    <BooksList :books="books"></BooksList>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import {BOOKS_FETCH_COLLECTION} from "@/store/module/book/type/action";
    import BooksList from "@/books/component/BooksList.vue";
    import {BOOK_GET_COLLECTION, BOOK_GET_FILTERED_COLLECTION} from "@/store/module/book/type/getter";

    @Component({
        components: {
            BooksList
        }
    })
    export default class BooksLayout extends Vue {
        mounted () {
            this.$store.dispatch(BOOKS_FETCH_COLLECTION);
        }

        get books () {
            return this.$store.getters[BOOK_GET_FILTERED_COLLECTION]
        }
    }
</script>