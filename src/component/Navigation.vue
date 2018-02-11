<template>
    <v-toolbar light>
        <v-toolbar-title>PU Search</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <router-link to="/">
                <v-btn flat>
                    Authors
                </v-btn>
            </router-link>
            <router-link to="/books">
                <v-btn flat>
                    Books
                </v-btn>
            </router-link>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({})
    export default class Navigation extends Vue {}
</script>