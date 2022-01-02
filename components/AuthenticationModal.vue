<template>
  <v-row justify="center">
    <v-dialog
      v-model="showModal"
      max-width="600px"
    >
      <v-card  class="pa-3">
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="username"
                  label="Username*"
                  :rules="[rules.required]"
                  required
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="password"
                  label="Password*"
                  :type="showPass? 'text' : 'password'"
                  :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPass = !showPass"
                  :rules="[rules.required]"
                  required
                />
              </v-col>
            </v-row>
          </v-container>
          <small class="purple--text">*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            text
            @click.prevent="login"
          >
            Login
          </v-btn>
          <v-spacer />
          <v-btn
            color="blue darken-1"
            text
            @click.prevent="closeModal"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>

</template>

<script>
export default {
  name: 'AuthenticationModal',

  data() {
    return {
      username: '',
      password: '',
      showPass: false,
      rules: {
        required: value => !!value || 'Required.'
      }
    };
  },
  methods: {
    closeModal() {
      this.$store.commit('setAuthModal', false);
    },
    async login() {
      const obj = await this.$axios.get('http://swapi.dev/api/planets/1/');
      this.password = obj.data;
      console.log(this.password);
    }
  },
  computed: {
    showModal: {
      get() {
        return this.$store.state.authModal;
      },
      set(val) {
        this.$store.commit('setAuthModal', val);
      }
    }
  }
};
</script>

<style scoped>

</style>
