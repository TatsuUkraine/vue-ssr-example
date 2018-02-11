<template>
    
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import AuthorsApi from '../api/Authors';

    @Component({})
    export default class Authors extends Vue {
        mounted () {
            AuthorsApi.getCollection();
        }
    }
</script>