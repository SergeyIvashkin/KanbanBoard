import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import KanbanBoard from "../views/KanbanBoard.vue";
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
    path: "/kanbanBoard",
    name: "kanbanBoard",
    component: KanbanBoard,
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
