<template>
    <v-list subheader>
        <v-subheader inset>Authors</v-subheader>
        <v-list-tile v-for="author in authors" :key="author.id">
            <AuthorListItem :author="author"/>
        </v-list-tile>
    </v-list>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import AuthorListItem from './AuthorsListItem.vue';

    @Component({
        props: {
            authors: Array
        },
        components: {
            AuthorListItem
        }
    })
    export default class AuthorsList extends Vue {}
</script>

<style scoped>

</style>