<template>
    <v-list two-line subheader>
        <v-subheader>Filters</v-subheader>
        <v-list-tile avatar v-for="filter in filters" :key="filter.id">
            <FilterItem :filter="filter"/>
        </v-list-tile>
    </v-list>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";
    import FilterItem from "./FilterItem.vue";

    @Component({
        props: {
            filters: Array
        },
        components: {
            FilterItem
        }
    })
    export default class FilterList extends Vue {}
</script>

<style scoped>

</style>