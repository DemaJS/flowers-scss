<template>
  <div class="page6-container">
    <h2>{{ data.question }}</h2>
    <TextArea :disabled="checked" v-model="answer" />
    <CheckBox v-model="checked" />
    <Button text="Next" @click.native="step" />
  </div>
</template>

<script>
import store from "../plagins/store";
import $axios from "../plagins/axios";
export default {
  mounted() {
    this.loadInfo();
  },
  data() {
    return {
      data: {},
      checked: false,
      answer: "",
    };
  },
  methods: {
    async loadInfo() {
      const res = await $axios.get("pages/6");
      this.data = res.data;
    },
    step() {
      this.$emit("stepNext", 4);
      store.page6 = this.answer;
    },
  },
  components: {},
};
</script>

<style scoped lang="scss">
.page6-container {
  font-family: "Roboto Mono";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 30px;
  color: #000000;

  h2 {
    font-family: "Roboto Mono";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 30px;
    color: #000000;
  }

  button {
    margin-top: 30px;
  }

  textarea {
    margin-bottom: 12px;
  }
}
</style>