<template>
  <div class="main">
    <TaskLane title="onHold" :items="ON_HOLD" />
    <TaskLane title="inProgress" :items="IN_PROGRESS" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import TaskLane from "../components/TaskLane.vue";
export default {
  name: "KanbanBoard",
  components: { TaskLane },
  computed: {
    ...mapGetters(["ON_HOLD", "IN_PROGRESS"]),
  },
};
</script>

<style lang="scss" scoped>
.main {
  background-color: #383a42;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2em 20px;
  padding-top: 65px;
}
</style>