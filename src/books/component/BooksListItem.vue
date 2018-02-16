<template>
    <v-list-tile-content>
        <v-list-tile-title v-text="title"></v-list-tile-title>
    </v-list-tile-content>
</template>

<script>
    import Vue from 'vue';

    export default Vue.extend({
        props: {
            book: Object
        },

        computed: {
            title () {
                return this.book.attributes.title;
            }
        }
    })
</script>

<style scoped>

</style>