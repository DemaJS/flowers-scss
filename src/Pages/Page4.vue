<template>
  <div class="page4-container">
    <h2>{{ data.question }}</h2>
    <CheckBox
      v-for="(item, index) in data.answers"
      :key="index"
      :text="item"
      :inputValue="index"
      v-model="selectedOptions"
    />
    <TextArea :disabled="!checked" v-model="answer" />
    <Button text="Next" @click.native="step" />
  </div>
</template>

<script>
import store from "../plagins/store";
import $axios from "../plagins/axios";
import Button from "../components/Button.vue";
export default {
  mounted() {
    this.loadInfo();
  },
  data() {
    return {
      data: {},
      selectedOptions: [],
      answer: "",
    };
  },
  methods: {
    async loadInfo() {
      const res = await $axios.get("pages/4");
      this.data = res.data;
    },
    step() {
      this.$emit("stepNext", 5);
      store.page4.textArea = this.answer;
      store.page4.checked = this.selectedOptions;
    },
  },
  computed: {
    checked() {
      return this.selectedOptions.includes(3);
    },
  },

  components: { Button },
};
</script>

<style scoped lang="scss">
.page4-container {
  font-family: "Roboto Mono";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 30px;
  color: #000000;

  button {
    margin-top: 30px;
  }

  textarea {
    margin-bottom: 12px;
  }

  h2 {
    font-family: "Roboto Mono";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 30px;
    color: #000000;
  }
}
</style>