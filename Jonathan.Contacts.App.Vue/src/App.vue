<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <h2>Contact Editor Applicaiton</h2>
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
