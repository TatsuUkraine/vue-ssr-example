<template>
    <v-layout row>
        <v-flex xs4>
            <router-view name="sidebar"></router-view>
        </v-flex>
        <v-flex xs8>
            <router-view></router-view>
        </v-flex>
    </v-layout>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class Layout extends Vue {}
</script>

<style scoped>

</style>