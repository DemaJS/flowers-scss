<template>
  <div class="stepper">
    <h2>Please answer a few questions</h2>
    <div class="wrapper-progressBar">
      <ul class="progressBar">
        <li
          v-for="i in steps"
          :key="i"
          :class="{
            active: i <= active,
          }"
        ></li>
      </ul>
    </div>
    <div class="content">
      <slot :name="step"></slot>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {};
  },
  props: {
    steps: {
      type: Number,
      default: 1,
    },
    step: {
      type: Number,
      default: 1,
    },
    active: {
      type: Number,
      default: 1,
    },
    stepOfHide: {
      type: Array,
      default: () => [],
    },
  },
};
</script>


<style scoped lang="scss">
.stepper {
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align: center;
    font-family: "Roboto Mono";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
  }
}

.content {
  margin-top: 20px;
  width: 80%;
}

.wrapper-progressBar {
  width: 100%;
}

.progressBar {
  position: relative;
  z-index: 10;
  right: 25px;

  li {
    list-style-type: none;
    float: left;
    width: 20%;
    position: relative;
    text-align: center;

    &:before {
      content: " ";
      line-height: 30px;
      border-radius: 50%;
      width: 21px;
      height: 21px;
      display: block;
      text-align: center;
      margin: 0 auto 10px;
      background: #c4c4c4;
      border: 2px solid #b3b3b3;
    }

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 4px;
      background-color: #b3b3b3;
      top: 10px;
      left: -50%;
      z-index: -1;
    }

    &:first-child:after {
      content: none;
    }

    &.active {
      color: #4bbbfa;

      &:before {
        background: #8cd6ff;
        border: 2px solid #4bbbfa;
      }
    }
  }

  .active:after {
    background-color: #4bbbfa;
  }
}
</style>
