import { createStore } from "vuex";

// Modules
import data from "./modules/data";
import stages from "./modules/stages";

export const store = createStore({
    modules: {
        data,
        stages,
    },
});
