export const state = () => ({
  navDrawer: false,
  selectedDrawerItem: 0,
  authModal: false
});

export const mutations = {
  toggleDrawer: (state) => {
    state.navDrawer = !state.navDrawer;
  },
  setDrawer: (state, val) => {
    state.navDrawer = val;
  },
  setAuthModal: (state, val) => {
    state.authModal = val;
  },
  setSelectedDrawerItem: (state, val) => {
    state.selectedDrawerItem = val;
  }
};
