import Vue from "vue";
import App from "./App.vue";
import router from "./router";

new Vue({
  router,
  delimiters: ['${', '}'],
  render: (h) => h(App),
}).$mount("#app");