<template>
    <v-list two-line subheader>
        <v-subheader>{{title}}</v-subheader>
        <v-list-tile avatar v-for="filter in filters" :key="filter.id">
            <FilterItem :filter="filter"/>
        </v-list-tile>
    </v-list>
</template>

<script>
    import FilterItem from "@/component/FilterItem.vue";
    import {FILTERS_SET_SELECTED_FROM_REQUEST} from "@/store/module/filter/type/action";
    import {FILTER_GET_COLLECTION} from "@/store/module/filter/type/getter";

    export default {
        created () {
            this.$store.dispatch(FILTERS_SET_SELECTED_FROM_REQUEST, this.$route.query);
        },

        computed: {
            filters () {
                return this.$store.getters[FILTER_GET_COLLECTION];
            },
            title () {
                let firstFilter = this.filters[0] || {type: ''};
                return firstFilter.type;
            }
        },
        watch: {
            '$route'(to) {
                this.$store.dispatch(FILTERS_SET_SELECTED_FROM_REQUEST, to.query);
            }
        },
        components: {
            FilterItem
        }
    };
</script>

<style scoped>

</style>