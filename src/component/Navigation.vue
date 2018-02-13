<template>
    <v-toolbar light>
        <v-toolbar-title>PU Search</v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items>
            <v-btn flat :to="{name: 'authors'}">
                Authors
            </v-btn>
            <v-btn flat :to="{name: 'books'}">
                Books
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>