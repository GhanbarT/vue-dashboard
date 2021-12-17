<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    mobile-breakpoint="960"
    app
    width="264"
  >

    <template v-slot:prepend>
      <v-list-item two-line>
        <v-list-item-avatar size="64">
          <img :src="user.pic" alt="avatar" v-if="user.pic != null">
          <v-icon dark size="64" color="primary" v-else>mdi-account-circle</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ user.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ user.username }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider />

    </template>


    <v-list dense>
      <v-list-item-group
        v-model="groupItems.selectedItem"
        mandatory
        color="primary"
      >
        <v-list-item class="pt-1 pb-1"
                     v-for="item in groupItems.items"
                     :key="item.title">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>


    <template v-slot:append>
      <v-divider />

      <v-list dense>

        <v-list-item class="pt-1 pb-1"
                     v-for="item in otherPageItems.items"
                     :key="item.title">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider class="mt-4" />

      <v-list-item style="flex: none">
        <v-list-item-icon>
          <v-icon>{{ logoutItem.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ logoutItem.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>

  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'DashboardCoreNavBar',
  methods: {
    fetchData() {
      fetch('https://randomuser.me/api/').then(res => {
        return res.json();
      }).then((data) => {
        let { results } = data;
        let { name, picture, email } = results[0];

        this.user.name = `${name.first} ${name.last}`;
        this.user.pic = picture.large;
        this.user.username = `${email.split('@')[0]}`;
      }).catch(err => {
        console.error(err);
      });
    }
  },
  data() {
    return {
      drawer: true,
      mini: true,
      user: {
        name: null,
        username: null,
        pic: null
      },
      groupItems: {
        selectedItem: 0
        , items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard-outline' },
          { title: 'Tasks', icon: 'mdi-check-circle-outline' },
          { title: 'Calendar', icon: 'mdi-calendar-blank-outline' },
          { title: 'Customers', icon: 'mdi-account-multiple' },
          { title: 'Request', icon: 'mdi-note-edit-outline' },
          { title: 'Leads', icon: 'mdi-account-multiple-plus' }
        ]
      },
      otherPageItems: {
        items: [
          { title: 'Settings', icon: 'mdi-cog-outline' },
          { title: 'Help', icon: 'mdi-help-circle-outline' }
        ]
      },
      logoutItem: { title: 'Logout', icon: 'mdi-logout-variant' }
    };
  },
  created() {
    this.fetchData();
  }
};
</script>

<style scoped>

</style>
