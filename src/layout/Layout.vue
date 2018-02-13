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

<style scoped>

</style>