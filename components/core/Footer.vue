<template>
  <v-footer
    light
    padless
    class="mt-auto"
  >
    <v-card
      flat
      tile
      class="primary lighten-1 white--text text-center"
    >
      <v-card-text class="py-1">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-2 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text
        justify="center"
        class="py-1"
      >
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
        >
          {{ link }}
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque deserunt, ducimus ea, eveniet fugiat ipsam
        nemo numquam, officiis pariatur qui quo velit vitae voluptate voluptates. A ab asperiores aspernatur aut cum
        distinctio error, est eum hic illum itaque iure molestiae porro, qui quisquam quo reiciendis saepe sed sequi
        vitae?
      </v-card-text>

      <v-divider/>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Uchiha</strong>
      </v-card-text>

    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'DashboardCoreFooter',
  data() {
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram'
      ],
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us'
      ]
    };
  }
};
</script>

<style scoped>

</style>
