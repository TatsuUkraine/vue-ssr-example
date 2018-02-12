<template>
    <v-list subheader>
        <v-subheader inset>Books</v-subheader>
        <v-list-tile v-for="book in books" :key="book.id">
            <BooksListItem :book="book"/>
        </v-list-tile>
    </v-list>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import BooksListItem from './BooksListItem.vue';

    @Component({
        props: {
            books: Array
        },
        components: {
            BooksListItem
        }
    })
    export default class BooksList extends Vue {}
</script>

<style scoped>

</style>