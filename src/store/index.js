import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import stages from "./modules/stages";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { auth, stages },
});
