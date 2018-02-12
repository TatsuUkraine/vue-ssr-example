<template>
    <v-list-tile-content>
        <v-list-tile-title v-text="title"></v-list-tile-title>
    </v-list-tile-content>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class BooksListItem extends Vue {
        @Prop({default: {}})
        book: any

        get title () {
            debugger;
            return this.book.attributes.title;
        }
    }
</script>

<style scoped>

</style>