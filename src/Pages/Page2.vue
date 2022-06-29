<template>
  <div class="page2-container">
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
import store from "../plagins/store";
import $axios from "../plagins/axios";
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
      console.log("test");
      const res = await $axios.get("pages/2");
      this.data = res.data;
    },
    step() {
      if (this.selectedOptions === 0) {
        this.$emit("stepNext", 3, true);
        store.page2 = this.selectedOptions;
      } else {
        this.$emit("stepNext", 3);
        store.page2 = this.selectedOptions;
      }
    },
  },
  components: {},
  props: {},
};
</script>

<style scoped lang="scss">
.page2-container {
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