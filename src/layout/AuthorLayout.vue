<template>
    <AuthorsList :authors="authors"></AuthorsList>
</template>

<script>
    import Vue  from 'vue';
    import {AUTHORS_FETCH_COLLECTION} from "@/store/module/author/type/action";
    import {AUTHOR_GET_FILTERED_COLLECTION} from "@/store/module/author/type/getter";
    import AuthorsList from "@/authors/component/AuthorsList.vue";
    import {mapGetters} from 'vuex';

    export default Vue.extend({
        asyncData ({store}) {
            return store.dispatch(AUTHORS_FETCH_COLLECTION);
        },

        computed: mapGetters({
            authors: AUTHOR_GET_FILTERED_COLLECTION
        }),

        components: {
            AuthorsList
        }
    })
</script>