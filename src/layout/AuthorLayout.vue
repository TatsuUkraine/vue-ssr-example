<template>
    <v-layout row>
        <AuthorsList :authors="authors"></AuthorsList>
    </v-layout>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import {AUTHORS_FETCH_COLLECTION} from "@/store/module/author/actionTypes";
    import AuthorsList from "@/authors/component/AuthorsList.vue";


    @Component({
        components: {
            AuthorsList
        }
    })
    export default class AuthorLayout extends Vue {
        mounted () {
            this.$store.dispatch(AUTHORS_FETCH_COLLECTION);
        }

        get authors () {
            return this.$store.state.author.collection
        }
    }
</script>