<template>
  <div class="page5-container">
    <h2>{{ data.question }}</h2>
    <TextArea :disabled="checked" v-model="answer" />
    <CheckBox v-model="checked" />
    <Button text="Submit" @click.native="submit" />
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
      const res = await $axios.get("pages/5");
      this.data = res.data;
    },
    async submit() {
      store.page5 = this.answer;
      await $axios.post("answers", store);
      this.$emit("close");
    },
  },
  components: {},
};
</script>

<style scoped lang="scss">
.page5-container {
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