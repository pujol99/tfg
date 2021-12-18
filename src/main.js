import { createApp } from "vue";
import App from "./App.vue";

// Middleware
import { store } from "./store";
import { TroisJSVuePlugin } from "troisjs";
import routes from "./routes";

createApp(App).use(routes).use(store).use(TroisJSVuePlugin).mount("#app");
