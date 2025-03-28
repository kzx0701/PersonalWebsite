import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "tailwindcss/index.css";
import { initTheme } from "./utils/changeTheme";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// 设置默认主题
initTheme();

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount("#app");
