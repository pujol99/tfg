import { createStore } from "vuex";

export const store = createStore({
    state() {
        return {
            scenes: ["Welcome", "Scene1", "Final"],
            currentSceneIndex: 0,
            scenesOptions: fetch(
                "https://api.jsonbin.io/b/619926220ddbee6f8b0f40c3/latest"
            ).then((response) => response.json()),
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
        getSceneOptions: (state) => (scene) => {
            return state.scenesOptions.then((data) => data[scene]);
        },
    },
});
