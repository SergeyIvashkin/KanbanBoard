<template>
  <div class="task-lane-item">
    <div class="block">
      <div class="text-id">id:{{ item.id }}</div>
      <div>
        {{ item.text }}
      </div>
    </div>
    <v-icon @click="deleteItem" color="white" class="float-right">
      mdi-close</v-icon
    >
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "TaskLaneItem",
  props: ["item", "title"],
  methods: {
    ...mapActions(["DELETE_ITEM"]),
    deleteItem() {
      const id = this.item.id;
      const title = this.title;
      this.DELETE_ITEM({ id, title });
    },
  },
};
</script>
<style>
.task-lane-item {
  min-height: 80px;
  margin: 10px 0;
  padding: 10px 10px;
  background-color: #1f1f23;
  color: #a3a9a9;
  font-size: 16px;
}
</style>