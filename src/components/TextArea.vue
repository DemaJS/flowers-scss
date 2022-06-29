<template>
  <textarea
    :placeholder="placeholder"
    :disabled="disabled"
    @input="changetextarea($event.target.value)"
    :value="value"
  >
  </textarea>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      default: "",
      type: String,
    },
  },
  methods: {
    changetextarea(val) {
      this.$emit("input", val);
    },
  },
};
</script>

<style scoped lang="scss">
textarea {
  width: 259px;
  height: 74px;
  background: #f5f5f5;
  border: 2px solid #b3b3b3;
  border-radius: 5px;
  resize: none;
  outline: none;
  font-family: "Roboto Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #000000;

  &:disabled {
    background: #e6e6e6;
    border: 2px solid #b3b3b3;
    border-radius: 5px;
  }
}
</style>>
