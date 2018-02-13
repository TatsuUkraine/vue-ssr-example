<template>
    <AuthorsList :authors="authors"></AuthorsList>
</template>

<script>
    import Vue  from 'vue';
    import {AUTHORS_FETCH_COLLECTION} from "@/store/module/author/type/action";
    import {AUTHOR_GET_FILTERED_COLLECTION} from "@/store/module/author/type/getter";
    import AuthorsList from "@/authors/component/AuthorsList.vue";

    export default Vue.extend({
        mounted () {
            this.$store.dispatch(AUTHORS_FETCH_COLLECTION);
        },

        computed: {
            authors () {
                return this.$store.getters[AUTHOR_GET_FILTERED_COLLECTION]
            }
        },

        components: {
            AuthorsList
        }
    })
</script>