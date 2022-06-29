<template>
  <label class="container"
    >{{ text }}
    <input
      type="checkbox"
      :checked="checked"
      v-model="model"
      :value="inputValue"
    />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "I do not want to answer",
    },
    value: [Array, Boolean],
    inputValue: Number,
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: "Roboto Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
  margin-bottom: 20px;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background: #e6e6e6;
  border: 2px solid #b3b3b3;
  border-radius: 5px;
}

.container {
  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  input:checked ~ .checkmark {
    background: #bfbfbf;
    border: 2px solid #b3b3b3;
    border-radius: 5px;
  }
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container {
  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
</style>