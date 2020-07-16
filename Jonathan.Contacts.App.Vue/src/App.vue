<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>Contact Editor Applicaiton</v-toolbar-title>
      <v-spacer />
      
      <v-toolbar-title>
        <v-btn
          href="http://localhost:5000/swagger"
          flat
          secondary>Swagger Page</v-btn>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <WithUser />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import WithUser from './components/WithUser.vue';

export default Vue.extend({
  name: 'App',

  components: {
    WithUser,
  },

  data: () => ({
    //
  }),
});
</script>
