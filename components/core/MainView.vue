<template>
  <v-main class="grey lighten-4">
    <!--  Dashboard Title Header -->
    <header>
      <v-row class="ma-5">
        <v-toolbar-title
          class="font-weight-light text-capitalize"
          v-text="$route.name.split('-').reverse()[0]" />
        <v-spacer />
        <v-btn
          color="primary"
          small
          elevation="2"
          outlined>
          Add an employee
        </v-btn>
      </v-row>
      <v-divider />
    </header>

    <!--  dashboard selected page  -->
    <Nuxt />

    <!--  Dashboard Footer  -->
    <DashboardCoreFooter />
  </v-main>

</template>

<script>
import DashboardCoreFooter from './Footer';

export default {
  name: 'DashboardCoreMain',
  components: {
    DashboardCoreFooter
  }
};
</script>

<style scoped>

</style>
