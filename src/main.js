import { createApp } from 'vue'
import App from './App.vue'
import Menu from './components/Menu.vue'
import { TroisJSVuePlugin } from "troisjs";

const app = createApp(App)
app.use(TroisJSVuePlugin);
app.mount('#app')