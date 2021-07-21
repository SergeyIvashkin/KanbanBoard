<template>
  <div>
    <v-card class="mx-auto" width="320" max-width="320">
      <h2 :style="`background-color: ${getColor()}`">
        {{ title }}
      </h2>
      <!--  -->
      <div class="body">
        <div class="space"></div>
        <!-- new Block -->
        <draggable v-model="myList" :options="{ group: 'default' }">
          <TaskLaneItem
            :item="item"
            :title="title"
            v-for="item in items"
            :key="item.id"
          ></TaskLaneItem>
        </draggable>
        <!--  -->
        <div class="space"></div>
        <!--  -->
        <div class="block_text" v-show="show">
          <textarea
            v-model="text"
            placeholder="Ввести заголовок для этой карточки"
          ></textarea>
          <v-btn @click="addNewTask" width="66%" color="#626062">
            Add card</v-btn
          >
          <v-icon class="float-right" @click="show = false"> mdi-close</v-icon>
        </div>
      </div>
      <!--  -->
      <div class="btn" v-show="!show" @click="show = true">
        <v-icon>mdi-plus</v-icon>
        <span>Добавить карточку</span>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import TaskLaneItem from "./TaskLaneItem.vue";
import Draggable from "vuedraggable";

const rowMap = {
  onHold: "0",
  inProgress: "1",
  needReview: "2",
  approved: "3",
};
const colorMap = {
  onHold: "#F38849",
  inProgress: "#3A87B9",
  needReview: "#EFC350",
  approved: "#499F65",
};
export default {
  name: "TaskLane",
  components: {
    TaskLaneItem,
    Draggable,
  },
  props: {
    title: {
      type: String,
    },
    items: {
      type: Array,
    },
  },
  data() {
    return {
      text: "",
      show: false,
      row: "0",
    };
  },
  mounted() {
    this.row = rowMap[this.title];
  },
  methods: {
    addNewTask() {
      if (this.text) {
        let data = {
          row: this.row,
          text: this.text,
        };
        this.ADD_NEW_TASK(data);
        this.show = false;
      }
    },
    ...mapActions(["ADD_NEW_TASK", "UP_DATE_LIST"]),
    getColor() {
      return colorMap[this.title];
    },
  },

  computed: {
    myList: {
      get() {
        return this.items;
      },
      set(items) {
        return this.UP_DATE_LIST({ items, title: this.title, row: this.row });
      },
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  color: #b9babd;
}
.btn {
  padding: 10px;
  width: 100%;
  text-align: left;
  background-color: #383a42;
  cursor: pointer;

  &:hover {
    background-color: black;
  }
  span,
  i {
    color: #b9babd;
    letter-spacing: 0.8px;
  }
}
//
.block_text {
  background-color: #383a42;

  textarea {
    width: 100%;
    height: 80px;
    background-color: #515051;
    color: #b9babd;
    padding: 5px;
    margin-bottom: 10px;
    border: none;
    resize: none;
    font-size: 16px;
  }
  button,
  i {
    color: #b9babd;
    cursor: pointer;
  }
}
.space {
  height: 3px;
  background-color: #383a42;
}
.new {
  width: 100%;
  min-height: 80px;
  margin: 5px 0;
  padding: 10px 5px;
  background-color: #1f1f23;
  color: #a3a9a9;
  font-size: 16px;
}
.body {
  background-color: #383a42;
  padding: 0 8px;
}
</style>