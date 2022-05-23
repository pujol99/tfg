import { createApp } from "vue";
import App from "./App.vue";


// Routing
import { createRouter, createWebHistory } from "vue-router";
import Game from "./routes/Game.vue";
import Results from "./routes/Results.vue";
import Settings from "./routes/Settings.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Game },
        { path: "/results", component: Results },
        { path: "/settings", component: Settings },
    ],
});

// UI library
import Continue from "./components/ui/Continue";
import Close from "./components/ui/Close";
import Form from "./components/ui/Form";
import LoadingScreen from "./components/ui/LoadingScreen";
import Option from "./components/ui/Option";
import Disclaimer from "./components/ui/Disclaimer";
import SelectFlag from "./components/ui/SelectFlag";
import Report from "./components/ui/Report";
import ActivePasive from "./components/ui/ActivePasive";
import AddictiveHumane from "./components/ui/AddictiveHumane";

// Utils
import Cube from "./components/utils/Cube";
import Aura from "./components/utils/Aura";
import Loader from "./components/utils/Loader";
import LoadGLTF from "./components/utils/LoadGLTF";
import LoadFBX from "./components/utils/LoadFBX";

// Scenes
import SceneUi from "./components/scenes/SceneUi";
import SceneVisuals from "./components/scenes/SceneVisuals";

// Middleware
import { store } from "./store";
import { TroisJSVuePlugin } from "troisjs";

createApp(App)
    .use(store)
    .use(router)
    .use(TroisJSVuePlugin)
    .component("Continue", Continue)
    .component("Close", Close)
    .component("Form", Form)
    .component("LoadingScreen", LoadingScreen)
    .component("Report", Report)
    .component("ActivePasive", ActivePasive)
    .component("AddictiveHumane", AddictiveHumane)
    .component("Cube", Cube)
    .component("Aura", Aura)
    .component("Option", Option)
    .component("Disclaimer", Disclaimer)
    .component("SceneUi", SceneUi)
    .component("SelectFlag", SelectFlag)
    .component("Loader", Loader)
    .component("LoadGLTF", LoadGLTF)
    .component("LoadFBX", LoadFBX)
    .component("SceneVisuals", SceneVisuals)
    .mount("#app");
