<template>
  <div>
    <v-card class="mx-auto" width="320" max-width="320">
      <h2 :style="`background: ${getColor(title)}`">
        {{ title }}
      </h2>
      <!--  -->
      <div class="body">
        <div class="space"></div>
        <!-- new Block -->
        <div class="new">hdhhs</div>
        <!--  -->
        <div class="space"></div>
        <!--  -->
        <div class="block_text" v-show="show">
          <textarea placeholder="Ввести заголовок для этой карточки"></textarea>
          <v-btn width="66%" color="#626062"> Add card</v-btn>
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
export default {
  name: "Card",
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    getColor(stage) {
      if (stage === "ON-HOLD") return "#F38849";
      if (stage === "IN-PROGRESS") return "#3A87B9";
      if (stage === "NEEDS-REVIEW") return "#EFC350";
      if (stage === "APPROVED") return "#499F65";
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