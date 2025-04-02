import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "tailwindcss/index.css";
// import "vuetify/styles";
import { initTheme } from "./utils/changeTheme";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "./style.css";
import "@mdi/font/css/materialdesignicons.css";

// 设置默认主题
initTheme();

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(vuetify);
app.use(pinia);
app.mount("#app");
