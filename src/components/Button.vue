<template>
  <button
    class="app-button"
    @click="click"
    :disabled="disabled"
    :style="styleCSS"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    text: {
      type: String,
      default: "Button",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    styleCSS: {
      type: String,
      default: "",
    },
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped lang="scss">
button {
  width: 133px;
  height: 40px;
  background: #4bbdfd;
  border-radius: 5px;
  border: none;
  font-family: "Roboto Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;

  &:active {
    background: #4bbdfd;
    opacity: 0.5;
  }
}
</style>