import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "https://glacial-woodland-82201.herokuapp.com" : "/";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
