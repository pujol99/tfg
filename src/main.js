import { createApp } from "vue";
import App from "./App.vue";

// UI library
import Continue from "./components/ui/Continue";
import Form from "./components/ui/Form";
import LoadingScreen from "./components/ui/LoadingScreen";
import Option from "./components/ui/Option";
import Popup from "./components/ui/Popup";
import Disclaimer from "./components/ui/Disclaimer";
import SelectFlag from "./components/ui/SelectFlag";
import Report from "./components/ui/Report";

// Utils
import Loader from "./components/utils/Loader";
import LoadBlender from "./components/utils/LoadBlender";
import LoadFBX from "./components/utils/LoadFBX";

// Scenes
import SceneUi from "./components/scenes/SceneUi";
import SceneVisuals from "./components/scenes/SceneVisuals";

// Middleware
import { store } from "./store";
import { TroisJSVuePlugin } from "troisjs";

createApp(App)
    .use(store)
    .use(TroisJSVuePlugin)
    .component("Continue", Continue)
    .component("Form", Form)
    .component("LoadingScreen", LoadingScreen)
    .component("Report", Report)
    .component("Option", Option)
    .component("Disclaimer", Disclaimer)
    .component("SceneUi", SceneUi)
    .component("Popup", Popup)
    .component("SelectFlag", SelectFlag)
    .component("Loader", Loader)
    .component("LoadBlender", LoadBlender)
    .component("LoadFBX", LoadFBX)
    .component("SceneVisuals", SceneVisuals)
    .mount("#app");
