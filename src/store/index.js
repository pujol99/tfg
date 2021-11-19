import { createStore } from "vuex";

export const store = createStore({
    state() {
        return {
            scenes: ["Home", "Scene1", "Final"],
            currentSceneIndex: 0,
        };
    },
    mutations: {
        nextScene(state) {
            if (state.currentSceneIndex + 1 < state.scenes.length)
                state.currentSceneIndex++;
        },
        prevScene(state) {
            if (state.currentSceneIndex - 1 < 0) state.currentSceneIndex--;
        },
    },
    getters: {
        isCurrentScene: (state) => (name) => {
            return state.scenes[state.currentSceneIndex] == name;
        },
    },
});
