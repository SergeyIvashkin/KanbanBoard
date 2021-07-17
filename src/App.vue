<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 2px;
  font-size: 20px;
  color: black !important;
}
.main {
  font-family: "Montserrat", sans-serif !important;
}
.v-main {
  padding: 60px 50px !important;
}
</style>