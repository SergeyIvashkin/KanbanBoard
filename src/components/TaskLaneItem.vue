<template>
  <div class="task-lane-item">
    <!-- <div class="block" v-for="item in data" :key="item.id"> -->
    <div class="block">
      <div class="text-id">id:{{ item.id }}</div>
      <div>
        {{ item.text }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TaskLaneItem",
  props: ["item"],
  // data: {
  //   type: Array,
  // },
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