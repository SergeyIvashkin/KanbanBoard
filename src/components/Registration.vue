<template>
  <div>
    <v-col align="center">
      <h1>Registration</h1>
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
            v-model="email"
            :rules="emailRules"
            label="E-mail"
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
        <v-col cols="12" md="4" class="ma-auto">
          <v-text-field
            :rules="[passwordConfirmationRule]"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show2 ? 'text' : 'password'"
            label="Repeat you password"
            counter
            @click:append="show2 = !show2"
            v-model="repeatPassword"
          ></v-text-field>
        </v-col>
      </v-col>
    </v-form>
    <div class="sendField">
      <div class="ma-2">
        Do tou have account?
        <router-link to="/login"> Enter Here </router-link>
      </div>
      <v-btn
        class="ma-2"
        @click.prevent="submit"
        elevation="2"
        outlined
        type="submit"
        :disabled="!valid"
      >
        SEND
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Registration",
  data: () => ({
    valid: true,
    show: false,
    show2: false,
    userName: "",
    email: "",
    password: "",
    repeatPassword: "",
    passwordRules: [
      (value) => !!value || "Required.",
      (v) => v.length >= 8 || "Name must be more than 8 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    userNameRules: [
      (v) => !!v || "Name is required",
      (v) => /^[\w.@+-]+$/.test(v) || "Name must be valid",
    ],
  }),
  methods: {
    ...mapActions(["REGIST_USER"]),
    async submit() {
      // console.log(this.$refs.form.validate());
      if (this.$refs.form.validate()) {
        let form = {
          username: this.userName,
          password: this.password,
        };
        await this.REGIST_USER(form);
      }
    },
  },
  computed: {
    passwordConfirmationRule() {
      return () =>
        this.password === this.repeatPassword || "Password must match";
    },
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
