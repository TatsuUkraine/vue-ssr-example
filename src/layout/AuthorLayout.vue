<template>
    <div>Authors</div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { Authors } from '@/api';

    @Component({})
    export default class AuthorLayout extends Vue {
        mounted () {
            Authors.getCollection();
        }
    }
</script>