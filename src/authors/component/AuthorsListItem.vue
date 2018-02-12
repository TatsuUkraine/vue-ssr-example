<template>
    <v-list-tile-content>
        <v-list-tile-title v-text="name"></v-list-tile-title>
    </v-list-tile-content>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component({
        props: {
            authors: Object
        },
    })
    export default class AuthorsListItem extends Vue {
        @Prop()
        author: any;

        get name () {
            return this.author.attributes.name;
        }
    }
</script>

<style scoped>

</style>