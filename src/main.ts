import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "tailwindcss/index.css";
import { initTheme } from "./utils/changeTheme";

// 设置默认主题
initTheme();

const app = createApp(App);
app.use(router);
app.mount("#app");
