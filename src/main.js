import { createApp } from "vue";
import App from "./App.vue";

// UI library
import Continue from "./components/ui/Continue";
import Form from "./components/ui/Form";
import LoadingScreen from "./components/ui/LoadingScreen";
import Option from "./components/ui/Option";
import Options from "./components/ui/Options";
import Popup from "./components/ui/Popup";
import SelectFlag from "./components/ui/SelectFlag";

// Utils
import Loader from "./components/utils/Loader";
import LoadBlender from "./components/utils/LoadBlender";
import LoadFBX from "./components/utils/LoadFBX";

// Middleware
import { store } from "./store";
import { TroisJSVuePlugin } from "troisjs";

createApp(App)
    .use(store)
    .use(TroisJSVuePlugin)
    .component("Continue", Continue)
    .component("Form", Form)
    .component("LoadingScreen", LoadingScreen)
    .component("Option", Option)
    .component("Options", Options)
    .component("Popup", Popup)
    .component("SelectFlag", SelectFlag)
    .component("Loader", Loader)
    .component("LoadBlender", LoadBlender)
    .component("LoadFBX", LoadFBX)
    .mount("#app");
