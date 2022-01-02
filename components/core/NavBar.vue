<template>
  <v-navigation-drawer
    v-model="drawer"
    id="core-navigation-drawer"
    app
    mobile-breakpoint="960"
    width="264">

    <!-- Navbar Top (Header)   -->
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

    <!--  Navbar Center -->
    <v-list
      nav
      dense>
      <v-list-item-group
        v-model="selectedItem"
        mandatory
        color="primary">

        <NuxtLink
          v-for="(item, index) in groupItems.items"
          :key="index"
          :to="item.to">
          <v-list-item
            class="pt-1 pb-1"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>

      </v-list-item-group>
    </v-list>

    <!-- Navbar Bottom (Footer) -->
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
import { mapState } from 'vuex';

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
      mini: true,
      user: {
        name: null,
        username: null,
        pic: null
      },

      groupItems: {
        items: [
          {
            title: 'Dashboard',
            icon: 'mdi-view-dashboard-outline',
            to: '/dashboard'
          },
          {
            title: 'Employees',
            icon: 'mdi-folder-account-outline',
            to: '/dashboard/employees'
          },
          {
            title: 'Tasks',
            icon: 'mdi-check-circle-outline',
            to: '/'
          },
          {
            title: 'Calendar',
            icon: 'mdi-calendar-blank-outline',
            to: '/'
          },
          {
            title: 'Customers',
            icon: 'mdi-account-multiple',
            to: '/'
          },
          {
            title: 'Request',
            icon: 'mdi-note-edit-outline',
            to: '/'
          },
          {
            title: 'Leads',
            icon: 'mdi-account-multiple-plus',
            to: '/'
          }
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
  computed: {
    drawer: {
      get() {
        return this.$store.state.navDrawer;
      },
      set(val) {
        this.$store.commit('setDrawer', val);
      }
    },
    selectedItem: {
      get() {
        return this.$store.state.selectedDrawerItem;
      },
      set(val) {
        this.$store.commit('setSelectedDrawerItem', val);
      }
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style scoped>
* {
  text-decoration: none;
}
</style>
