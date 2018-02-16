<template>
    <v-list subheader>
        <v-subheader inset>Authors</v-subheader>
        <v-list-tile v-for="author in authors" :key="author.id">
            <AuthorListItem :author="author"/>
        </v-list-tile>
    </v-list>
</template>

<script>
    import Vue from 'vue';
    import AuthorListItem from './AuthorsListItem.vue';

    export default Vue.extend({
        props: {
            authors: Array
        },
        components: {
            AuthorListItem
        }
    })
</script>

<style scoped>

</style>