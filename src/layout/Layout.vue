<template>
    <v-layout row>
        <v-flex xs4>
            <FilterList :filters="filters"/>
        </v-flex>
        <v-flex xs8>
            <router-view></router-view>
        </v-flex>
    </v-layout>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from "vue-property-decorator";
    import FilterList from "@/component/FilterList.vue";
    import {FILTER_GET_COLLECTION} from "../store/module/filter/type/getter";

    @Component({
        components: {
            FilterList
        }
    })
    export default class Layout extends Vue {
        get filters () {
            return this.$store.getters[FILTER_GET_COLLECTION];
        }
    }
</script>

<style scoped>

</style>