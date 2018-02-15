<template>
  <v-app>
    <Navigation></Navigation>
    <v-content>
      <v-container fluid>
        <Layout/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
    import Vue from 'vue';
    import Navigation from '@/component/Navigation.vue'; // @ is an alias to /src
    import Layout from '@/layout/Layout.vue';

    export default Vue.extend({
        components: {
            Navigation,
            Layout
        }
    })
</script>


<style lang="scss">
  @import "../node_modules/vuetify/dist/vuetify.css";
</style>
