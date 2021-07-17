import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
// ASSA1212cxxvAsAAAVVV1212 Sergey
export default {
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    username: "",
  },
  mutations: {
    AUTH_SUCCESS(state, token, username) {
      state.status = "success";
      state.token = token;
      state.username = username;
    },
    AUTH_ERROR(state) {
      state.status = "error";
    },
  },
  actions: {
    async REGIST_USER({ commit }, form) {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: "JWT token",
        };
        const data = JSON.stringify(form);
        let response = await axios.post("/users/create/", data, {
          headers: headers,
        });
        const token = response.data.token;
        const username = response.data.username;

        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;
        commit("AUTH_SUCCESS", token, username);
        console.log(response);
      } catch (err) {
        commit("AUTH_ERROR", err);
        localStorage.removeItem("token");
        console.log(err);
      }
    },
    async LOGIN({ commit }, form) {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: "JWT token",
        };
        const data = JSON.stringify(form);
        let response = await axios.post("/users/login/", data, {
          headers: headers,
        });
        const token = response.data.token;
        const username = response.data.username;

        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;
        commit("AUTH_SUCCESS", token, username);
        console.log(response);
      } catch (err) {
        commit("AUTH_ERROR", err);
        localStorage.removeItem("token");
        console.log(err);
      }
    },
  },
  getters: {
    IS_LOGGED_IN: (state) => !!state.token,
    AUTH_STATUS: (state) => state.status,
  },
};
