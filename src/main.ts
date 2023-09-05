import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router/auto";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-dark-blue/theme.css";
import "@/styles/main.scss";
import "@/styles/flex.scss";
import "@/styles/spacing.scss";
import "@/styles/utils.scss";
import "@/assets/battlesprites.css";
import "@/assets/monstericons.css";
import "@/assets/itemicons.css";

const router = createRouter({
    history: createWebHistory(),
});

const app = createApp(App);

app.use(router);

app.use(PrimeVue);

app.mount("#app");
