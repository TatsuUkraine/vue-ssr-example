<template>
    <v-list-tile-content>
        <v-list-tile-title v-text="name"></v-list-tile-title>
    </v-list-tile-content>
</template>

<script>
    import Vue from 'vue';

    export default Vue.extend({
        props: {
            author: Object
        },

        computed: {
            name () {
                return this.author.attributes.name;
            }
        }
    })
</script>

<style scoped>

</style>