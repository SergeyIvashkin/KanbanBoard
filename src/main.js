import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";

axios.defaults.baseURL = "https://trello.backend.tests.nekidaem.ru/api/v1/";
const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
}
export default axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
