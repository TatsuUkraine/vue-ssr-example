<template>
    <div>Books</div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { Books } from '@/api';

    @Component({})
    export default class BooksLayout extends Vue {
        mounted () {
            Books.getCollection();
        }
    }
</script>