<template>
    <v-toolbar light>
        <v-toolbar-title>PU Search</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat>
                <router-link v-btn flat to="/">Authors</router-link>
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({})
    export default class Navigation extends Vue {}
</script>