<template>
  <div>
    <v-app>

      <DashboardCoreAppBar />
      <DashboardCoreNavBar />
      <DashboardCoreMainView />

      <AuthenticationModal />
    </v-app>
  </div>
</template>

<script>

import DashboardCoreAppBar from '../components/core/AppBar';
import DashboardCoreNavBar from '../components/core/NavBar';
import DashboardCoreMainView from '../components/core/MainView';
import AuthenticationModal from '../components/AuthenticationModal';

export default {
  name: 'default',
  components: {
    DashboardCoreNavBar,
    DashboardCoreAppBar,
    DashboardCoreMainView,
    AuthenticationModal
  },
  methods: {}
};
</script>

<style lang="scss" scoped>



</style>
