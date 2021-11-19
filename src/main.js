import { createApp } from 'vue'
import App from './App.vue'
import { TroisJSVuePlugin } from "troisjs";
import { store } from './store'

createApp(App).use(store).use(TroisJSVuePlugin).mount('#app')