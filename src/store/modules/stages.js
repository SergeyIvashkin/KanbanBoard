import axios from "axios";

// ASSA1212cxxvAsAAAVVV1212 Sergey
export default {
  state: {
    onHold: [],
    inProgress: [],
    needReview: [],
    approved: [],
  },
  mutations: {
    DELETE_TASK(state, { id, title }) {
      state[title] = state[title].filter((el) => el.id != id);
    },
    ADD_NEW_TASK(state, payload) {
      if (+payload.row === 0) state.onHold.push(payload);
      else if (+payload.row === 1) state.inProgress.push(payload);
      else if (+payload.row === 2) state.needReview.push(payload);
      else if (+payload.row === 3) state.approved.push(payload);
    },
    ADD_TASKS(state, tasks) {
      tasks.forEach((el) => {
        if (+el.row === 0) state.onHold.push(el);
        else if (+el.row === 1) state.inProgress.push(el);
        else if (+el.row === 2) state.needReview.push(el);
        else if (+el.row === 3) state.approved.push(el);
      });
    },
    UP_DATE_LIST(state, { items, title }) {
      state[title] = items;
    },
  },
  actions: {
    async UP_DATE_LIST({ commit }, { items, title, row }) {
      let changeItem = items.find((el) => el.row != row);
      commit("UP_DATE_LIST", { items, title, row });
      if (!changeItem) return;

      try {
        changeItem.row = row;
        const body = JSON.stringify(changeItem);

        const headers = {
          "Content-Type": "application/json",
        };
        await axios.patch(`/cards/${changeItem.id}/`, body, { headers });
      } catch (error) {
        console.log(error);
      }
    },
    async DELETE_ITEM({ commit }, { id, title }) {
      console.log(title);
      const headers = {
        "Content-Type": "application/json",
      };

      await axios.delete(`/cards/${id}`, {
        headers: headers,
      });
      commit("DELETE_TASK", { id, title });
    },
    async ADD_NEW_TASK({ commit }, data) {
      try {
        const headers = {
          "Content-Type": "application/json",
        };
        const body = JSON.stringify(data);
        let response = await axios.post("/cards/", body, {
          headers: headers,
        });
        let dataTask = response.data;
        commit("ADD_NEW_TASK", dataTask);
      } catch (error) {
        console.log(error);
      }
    },
    //
    async GET_TASKS({ commit }) {
      try {
        let response = await axios.get("/cards/");
        let tasks = response.data;
        commit("ADD_TASKS", tasks);
      } catch {
        (err) => {
          console.log(err);
        };
      }
    },
  },
  getters: {
    ON_HOLD: (state) => state.onHold,
    IN_PROGRESS: (state) => state.inProgress,
    NEED_REVIEW: (state) => state.needReview,
    APPROVED: (state) => state.approved,
  },
};
