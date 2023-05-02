import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
const env = import.meta.env;

if (
    env.VITE_ENV == "development" &&
    window.console &&
    console.log &&
    console.warn &&
    console.error
) {
    window.debug = {
        log: window.console.log,
        warn: window.console.warn,
        error: window.console.error,
    };
} else {
    window.debug = {
        log: function () {},
        warn: function () {},
        error: function () {},
    };
}

// import './assets/main.css'

const app = createApp(App);

app.use(i18n);
app.use(createPinia());
app.use(router);

app.mount("#app");
