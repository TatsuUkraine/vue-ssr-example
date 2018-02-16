<template>
    <AuthorsList :authors="authors"></AuthorsList>
</template>

<script>
    import {AUTHORS_FETCH_COLLECTION} from "@/store/module/author/type/action";
    import {AUTHOR_GET_FILTERED_COLLECTION} from "@/store/module/author/type/getter";
    import AuthorsList from "@/authors/component/AuthorsList.vue";
    import {mapGetters} from 'vuex';
    import {DocumentHeaderMixing} from '@/mixin'

    export default {
        asyncData ({store}) {
            return store.dispatch(AUTHORS_FETCH_COLLECTION);
        },

        metaInfo: {
            title: 'AuthorTitle',
        },

        computed: mapGetters({
            authors: AUTHOR_GET_FILTERED_COLLECTION
        }),

        components: {
            AuthorsList
        },
        mixins: [DocumentHeaderMixing.getProperties()]
    }
</script>