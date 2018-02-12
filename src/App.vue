<template>
  <div id="app">
    <v-app>
      <Navigation></Navigation>
      <v-content>
        <v-container fluid>
          <Layout/>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Navigation from '@/component/Navigation.vue'; // @ is an alias to /src
    import Layout from '@/layout/Layout.vue';

    @Component({
        components: {
            Navigation,
            Layout
        },
    })
    export default class App extends Vue {}
</script>


<style lang="scss">
  @import "../node_modules/vuetify/dist/vuetify.css";
</style>
