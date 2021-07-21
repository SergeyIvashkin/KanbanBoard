import axios from "axios";

// ASSA1212cxxvAsAAAVVV1212 Sergey
export default {
  // namespaced: true,
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    username: "",
    reasonLogin: "",
    reasonReg: "",
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
    ERROR_REG(state, err) {
      for (const [, value] of Object.entries(err)) {
        state.reasonReg = value[0];
      }
    },
    ERROR_LOGIN(state, err) {
      for (const [, value] of Object.entries(err)) {
        state.reasonLogin = value[0];
      }
    },
  },
  actions: {
    async REGIST_USER({ commit }, form) {
      try {
        const headers = {
          "Content-Type": "application/json",
        };
        const data = JSON.stringify(form);
        let response = await axios.post("/users/create/", data, {
          headers: headers,
        });
        const token = response.data.token;
        const username = response.data.username;

        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
        commit("AUTH_SUCCESS", token, username);
      } catch (err) {
        commit("AUTH_ERROR");
        commit("ERROR_REG", err.response.data);
        localStorage.removeItem("token");
      }
    },
    async LOGIN({ commit }, form) {
      try {
        const headers = {
          "Content-Type": "application/json",
        };
        const data = JSON.stringify(form);
        let response = await axios.post("/users/login/", data, {
          headers: headers,
        });
        const token = response.data.token;
        const username = response.data.username;

        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
        commit("AUTH_SUCCESS", token, username);
      } catch (err) {
        commit("AUTH_ERROR");
        commit("ERROR_LOGIN", err.response.data);
        localStorage.removeItem("token");
      }
    },
  },
  getters: {
    IS_LOGGED_IN: (state) => !!state.token,
    AUTH_STATUS: (state) => state.status,
    ERROR_LOGIN: (state) => state.reasonLogin,
    ERROR_REG: (state) => state.reasonReg,
  },
};
