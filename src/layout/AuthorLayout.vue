<template>
    <AuthorsList :authors="authors"></AuthorsList>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import {AUTHORS_FETCH_COLLECTION} from "@/store/module/author/type/action";
    import {AUTHOR_GET_COLLECTION} from "@/store/module/author/type/getter";
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
            return this.$store.getters[AUTHOR_GET_COLLECTION]
        }
    }
</script>