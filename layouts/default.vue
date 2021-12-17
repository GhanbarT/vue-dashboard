<template>
  <div>
    <v-app>

      <DashboardCoreAppBar />
      <DashboardCoreNavBar />

      <Nuxt />


      <DashboardCoreFooter />
    </v-app>
  </div>
</template>

<script>

import DashboardCoreAppBar from '../components/core/AppBar';
import DashboardCoreNavBar from '../components/core/NavBar';
import DashboardCoreFooter from '../components/core/Footer';

export default {
  name: 'default',
  components: {
    DashboardCoreFooter,
    DashboardCoreNavBar,
    DashboardCoreAppBar
  },
  methods: {}
};
</script>

<style lang="scss" scoped>

* {
  box-sizing: border-box;
}


</style>
