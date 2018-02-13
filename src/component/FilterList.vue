<template>
    <v-list two-line subheader>
        <v-subheader>Filters</v-subheader>
        <v-list-tile avatar v-for="filter in filters" :key="filter.id">
            <FilterItem :filter="filter"/>
        </v-list-tile>
    </v-list>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from "vue-property-decorator";
    import FilterItem from "./FilterItem.vue";
    import {Location} from 'vue-router';
    import {FILTERS_SET_SELECTED_FROM_REQUEST} from "../store/module/filter/type/action";

    @Component({
        props: {
            filters: Array
        },
        components: {
            FilterItem
        }
    })
    export default class FilterList extends Vue {
        created () {
            this.$store.dispatch(FILTERS_SET_SELECTED_FROM_REQUEST, this.$route.query);
        }

        @Watch('$route')
        onRouteUpdate (to: Location) {
            this.$store.dispatch(FILTERS_SET_SELECTED_FROM_REQUEST, to.query);
        }
    }
</script>

<style scoped>

</style>