<template>
    <v-list subheader>
        <v-subheader inset>Books</v-subheader>
        <v-list-tile v-for="book in books" :key="book.id">
            <BooksListItem :book="book"/>
        </v-list-tile>
    </v-list>
</template>

<script>
    import BooksListItem from './BooksListItem.vue';
    import Vue from 'vue';

    export default Vue.extend({
        props: {
            books: Array
        },
        components: {
            BooksListItem
        }
    })
</script>

<style scoped>

</style>