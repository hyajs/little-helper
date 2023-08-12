import { createApp } from "vue";
import "@/assets/css/reset.css";
import App from "./App.vue";
import router from "@/router/index";
import "element-plus/theme-chalk/dark/css-vars.css";
import "virtual:uno.css";
// pinia
import store from "@/store";
const app = createApp(App);

app.use(router).use(store);
app.mount("#app");
