<template>
  <div>
    <v-col>
      <h1 align="center">Login</h1>
    </v-col>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-col>
        <v-col cols="12" md="4" class="ma-auto">
          <v-text-field
            v-model="userName"
            :rules="userNameRules"
            label="Name"
            required
          ></v-text-field>
        </v-col>

        <!--  -->
        <v-col cols="12" md="4" class="ma-auto">
          <v-text-field
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="passwordRules"
            :type="show ? 'text' : 'password'"
            label="Password"
            counter
            @click:append="show = !show"
            v-model="password"
          ></v-text-field>
        </v-col>
        <!--  -->
      </v-col>
    </v-form>
    <div class="sendField">
      <div class="ma-2">
        Need Registration?
        <router-link to="/"> Enter Here </router-link>
      </div>
      <v-btn
        class="ma-2"
        @click.prevent="submit"
        elevation="2"
        outlined
        type="submit"
        :disabled="!valid"
      >
        Login
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Login",
  data: () => ({
    valid: true,
    show: false,
    userName: "",
    password: "",
    passwordRules: [
      (value) => !!value || "Required.",
      (v) => v.length >= 8 || "Name must be more than 8 characters",
    ],
    userNameRules: [
      (v) => !!v || "Name is required",
      (v) => /^[\w.@+-]+$/.test(v) || "Name must be valid",
    ],
  }),
  methods: {
    ...mapActions(["LOGIN"]),
    async submit() {
      if (this.$refs.form.validate()) {
        let form = {
          username: this.userName,
          password: this.password,
        };
        await this.LOGIN(form);
        if (this.AUTH_STATUS === "success" && this.IS_LOGGED_IN) {
          this.$router.push("/Kanbat");
        }
      }
    },
  },
  computed: {
    ...mapGetters(["IS_LOGGED_IN", "AUTH_STATUS"]),
  },
};
</script>

<style lang="scss" scoped>
.col-12 {
  padding: 0;
}
.sendField {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
