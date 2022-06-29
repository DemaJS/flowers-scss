<template>
  <div class="page1-container">
    <h2>{{ data.question }}</h2>
    <RadioButton
      v-for="(item, index) in data.answers"
      :key="item"
      :text="item"
      :inputValue="index"
      v-model="selectedOptions"
    />
    <Button text="Next" @click.native="step" />
  </div>
</template>

<script>
import $axios from "../plagins/axios";
import store from "../plagins/store";
export default {
  mounted() {
    this.loadInfo();
  },
  data() {
    return {
      data: {},
      selectedOptions: 0,
    };
  },
  methods: {
    async loadInfo() {
      const res = await $axios.get("pages/1");
      this.data = res.data;
    },
    step() {
      this.$emit("stepNext", 2);
      store.page1 = this.selectedOptions;
    },
  },
  components: {},
  props: {},
};
</script>

<style lang="scss">
.page1-container {
  font-family: "Roboto Mono";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 30px;
  color: #000000;

  h2 {
    margin-left: 5px;
    font-family: "Roboto Mono";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 30px;
    color: #000000;
  }

  button {
    margin-left: 5px;
    margin-top: 30px;
  }
}
</style>