<template>
    <v-list two-line subheader>
        <v-subheader>{{title}}</v-subheader>
        <v-list-tile avatar v-for="filter in filters" :key="filter.id">
            <FilterItem :filter="filter"/>
        </v-list-tile>
    </v-list>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from "vue-property-decorator";
    import FilterItem from "@/component/FilterItem.vue";
    import {FILTERS_SET_SELECTED_FROM_REQUEST} from "@/store/module/filter/type/action";
    import {FILTER_GET_COLLECTION} from "@/store/module/filter/type/getter";

    @Component({
        components: {
            FilterItem
        }
    })
    export default class FilterLayout extends Vue {
        get filters () {
            return this.$store.getters[FILTER_GET_COLLECTION];
        }

        created () {
            this.$store.dispatch(FILTERS_SET_SELECTED_FROM_REQUEST, this.$route.query);
        }

        @Watch('$route')
        onRouteUpdate (to: {[key: string]: any}) {
            this.$store.dispatch(FILTERS_SET_SELECTED_FROM_REQUEST, to.query);
        }

        get title () {
            let firstFilter = this.filters[0] || {type: ''};
            return firstFilter.type;
        }
    }
</script>

<style scoped>

</style>