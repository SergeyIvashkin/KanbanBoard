import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
// ASSA1212cxxvAsAAAVVV1212 Sergey
export default {
  state: {
    items: {
      onHold: [
        // {
        //   id: 0,
        //   row: "0",
        //   seq_num: 0,
        //   text: "string",
        // },
        // {
        //   id: 10,
        //   row: "0",
        //   seq_num: 0,
        //   text: "stringfdfdff",
        // },
      ],
      inProgress: [],
      needReview: [],
      approved: [],
    },
  },
  mutations: {
    ADD_TASKS(state, response) {
      state.items.onHold = response;
    },
    UP_DATE_LIST(state, { items, row }) {
      state.items[row] = items;
    },
  },
  actions: {
    async GET_TASKS({ commit }) {
      try {
        let response = await axios.get("/cards/");
        console.log(response);
        commit("ADD_TASKS", response);
        return response;
      } catch {
        (err) => {
          console.log(err);
        };
      }
    },
  },
  getters: {
    ON_HOLD: (state) => state.items.onHold,
    IN_PROGRESS: (state) => state.items.inProgress,
  },
};
