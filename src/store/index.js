import { createStore } from "vuex";
import data from "./modules/data";
import stages from "./modules/stages";
import labels from "./modules/labels";

export const store = createStore({
    modules: {
        data,
        stages,
        labels,
    },
});
