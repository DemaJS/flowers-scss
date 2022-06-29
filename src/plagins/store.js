import Vue from "vue";
const state = Vue.observable({
  page1: null,
  page2: null,
  page3: null,
  page4: {
    checked: [],
    textArea: null
  },
  page5: null,
  page6: null
});

export default state;
