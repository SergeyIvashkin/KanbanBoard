import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Kanbat from "../views/Kanbat.vue";
import Registration from "../components/Registration";
import Login from "../components/login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/kanbat",
    name: "kanbat",
    component: Kanbat,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/registration ",
    name: "registration ",
    component: Registration,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
