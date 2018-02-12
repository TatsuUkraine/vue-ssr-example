<template>
    <div>Authors</div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import {AUTHORS_FETCH_COLLECTION} from "../store/module/author/actionTypes";


    @Component({})
    export default class AuthorLayout extends Vue {
        mounted () {
            this.$store.dispatch(AUTHORS_FETCH_COLLECTION);
        }
    }
</script>