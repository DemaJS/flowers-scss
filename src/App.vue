<template>
  <div id="app">
    <layout />
    <!--  <button @click="showModal">open</button> -->
    <Popup v-show="isModalVisible" @close="closeModal">
      <template #body>
        <Stepper :steps="5" :active="active" :step="step">
          <template #1>
            <Page1 @stepNext="nextStep" />
          </template>
          <template #2>
            <Page2 @stepNext="conditionalNextStep" />
          </template>
          <template #3>
            <Page6 v-if="page" @stepNext="nextStep" />
            <Page3 v-else @stepNext="nextStep" />
          </template>
          <template #4>
            <Page4 @stepNext="nextStep" />
          </template>
          <template #5>
            <Page5 @close="closeModal" />
          </template>
        </Stepper>
      </template>
    </Popup>
  </div>
</template>

<script>
import Vue from "vue";
import Stepper from "./components/Stepper";
import RadioButton from "./components/Radio-button.vue";
import Button from "./components/Button.vue";
import CheckBox from "./components/Check-box.vue";
import TextArea from "./components/TextArea.vue";
import Popup from "./components/Popup.vue";
import Page1 from "./Pages/Page1.vue";
import Page2 from "./Pages/Page2.vue";
import Page3 from "./Pages/Page3.vue";
import Page4 from "./Pages/Page4.vue";
import Page5 from "./Pages/Page5.vue";
import Page6 from "./Pages/Page6.vue";
import Layout from "./Pages/Layout.vue";
Vue.component("RadioButton", RadioButton);
Vue.component("Button", Button);
Vue.component("CheckBox", CheckBox);
Vue.component("TextArea", TextArea);

export default {
  name: "App",
  components: {
    Stepper,
    RadioButton,
    Button,
    CheckBox,
    TextArea,
    Popup,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Layout,
  },
  data() {
    return {
      active: 1,
      step: 1,
      page: false,
      isModalVisible: false,
    };
  },
  mounted() {
    this.onLoad();
  },
  methods: {
    nextStep(step, page) {
      this.active = step;
      this.step = step;
      if (page) {
        this.page = true;
      }
    },
    conditionalNextStep(step, page) {
      this.active = step;
      this.step = step;
      if (page) {
        this.page = true;
      }
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      localStorage.setItem("questionnaire", 1);
    },
    onLoad() {
      const isDone = localStorage.getItem("questionnaire");
      if (isDone != 1) {
        this.showModal();
      }
    },
  },
};
</script>

<style>
</style>
