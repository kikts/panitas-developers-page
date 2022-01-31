import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/AppStyles.css";

createApp(App).use(router).mount("#app");
