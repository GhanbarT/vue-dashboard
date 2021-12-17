<template>
  <v-card outlined
          tile
          class="overflow-hidden">
    <v-app-bar
      id="app-bar"
      fixed
      app
      elevation="4px"
      color="white"
      height="64"
    >

      <v-btn
        class="mr-3"
        elevation="1"
        fab
        small
        @click="onClickNavBtn"
      >
        <v-icon v-if="navOpen">
          mdi-chevron-double-left
        </v-icon>
        <v-icon v-else>
          mdi-chevron-double-right
        </v-icon>

      </v-btn>

      <v-toolbar-title
        class="hidden-sm-and-down font-weight-light">
        Dashboard
      </v-toolbar-title>

      <v-spacer />
      <v-text-field
        hide-details
        style="max-width: 300px;"
        label="Search"
        clearable
      >
        <template
          v-slot:append-outer
        >
          <v-btn
            class="mt-n2"
            elevation="1"
            fab
            small
          >
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </template>

      </v-text-field>
      <v-spacer />

      <v-menu
        bottom
        left
        offset-y
        origin="top right"
      >
        <template v-slot:activator>
          <v-btn
            class="ml-2"
            rounded
            small
            text
          >
            <v-badge
              color="primary"
              overlap
              bordered
            >
              <template v-slot:badge>
                <span>5</span>
              </template>
              <v-icon>mdi-bell</v-icon>
            </v-badge>
          </v-btn>
        </template>

      </v-menu>

      <v-btn
        class="ml-2"
        depressed
        rounded
        small
        text>
        <v-icon>mdi-account</v-icon>
      </v-btn>

    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  name: 'DashboardCoreAppBar',
  data() {
    return {
      navOpen: false,
      notifications: [
        'Mike John Responded to your email',
        'You have 5 new tasks',
        'You\'re now friends with Andrew',
        'Another Notification',
        'Another one'
      ]
    };
  },
  props: {},
  methods: {
    onClickNavBtn() {
      this.$emit('toggle-navbar');
    }
  }

};
</script>

<style scoped>

</style>
