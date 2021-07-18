<template>
  <div class="main">
    <div v-for="title of stages" :key="title">
      <Card :title="title" />
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  name: "KanbanBoard",
  components: { Card },
  data() {
    return {
      stages: ["ON-HOLD", "IN-PROGRESS", "NEEDS-REVIEW", "APPROVED"],
      blocks: [
        {
          id: 1,
          status: "ON-HOLD",
          title: "Test",
        },
      ],
    };
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