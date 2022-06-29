<template>
  <div class="radio-wrapper">
    <label>
      <input
        type="radio"
        class="option-input radio"
        name="example"
        v-model="model"
        :value="inputValue"
      />
      <span>{{ text }}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    value: Number,
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
.radio-wrapper {
  font-family: "Roboto Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #000000;
}

label {
  display: block;
  line-height: 40px;

  span {
    position: relative;
    top: 5px;
  }
}

.option-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  position: relative;
  top: 13.33333px;
  right: 0;
  bottom: 0;
  left: 0;
  height: 20px;
  width: 20px;
  transition: all 0.15s ease-out 0s;
  background: #e6e6e6;
  border: 2px solid #b3b3b3;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  margin-right: 0.5rem;
  outline: none;
  position: relative;
  z-index: 1000;
  box-sizing: content-box;

  &:hover {
    background: #c4c4c4;
  }

  &:checked {
    background: #c4c4c4;

    &::before {
      width: 20px;
      height: 20px;
      display: flex;
      content: "\f00c";
      font-size: 12px;
      font-weight: bold;
      position: absolute;
      align-items: center;
      justify-content: center;
      font-family: "Font Awesome 5 Free";
    }

    &::after {
      background: #40e0d0;
      content: "";
      display: block;
      position: relative;
      z-index: 100;
    }
  }

  &.radio {
    border-radius: 50%;

    &::after {
      border-radius: 50%;
    }
  }
}
</style>