<template>
    <v-layout row>
        <BooksList :books="books"></BooksList>
    </v-layout>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import {BOOKS_FETCH_COLLECTION} from "@/store/module/book/actionTypes";
    import BooksList from "@/books/component/BooksList.vue";

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
            return this.$store.state.book.collection
        }
    }
</script>