import { createStore } from "vuex";

export const store = createStore({
    state() {
        return {
            scenes: ["Welcome", "Scene1", "Final"],
            currentSceneIndex: 0,
            sceneLoading: false,
            scenesOptions: {
                Scene1: {
                    title: "Your friend is sad because she failed, but you are on the phone",
                    option1: "Ignore and stay on the phone.",
                    option2: "Listen while on the phone.",
                    option3: "Give her all your attention.",
                },
                // scenesOptions: fetch(
                //     "https://api.jsonbin.io/b/619926220ddbee6f8b0f40c3/latest"
                // ).then((response) => response.json()),
            },
            scenesCollection: "61b4956f0ddbee6f8b1b8c7e",
            usersCollection: "61b49c4262ed886f915e5a13",
            masterKey:
                "$2b$10$yGbK6Zw/E5lzTl.TmQivFuhYR87PWV2Cy2TG.gIi8Lp2BLduGVNyq",
        };
    },
    mutations: {
        nextScene(state) {
            if (state.currentSceneIndex + 1 < state.scenes.length) {
                state.currentSceneIndex++;
                if (state.scenes[state.currentSceneIndex].includes("Scene")) {
                    state.sceneLoading = !state.sceneLoading;
                }
            }
        },
        prevScene(state) {
            if (state.currentSceneIndex - 1 < 0) state.currentSceneIndex--;
        },
        loadingSwap(state) {
            state.sceneLoading = !state.sceneLoading;
        },
        saveData(state, payload) {
            let req = new XMLHttpRequest();

            req.onreadystatechange = () => {
                if (req.readyState == XMLHttpRequest.DONE) {
                    console.log(req.responseText);
                }
            };

            req.open("POST", "https://api.jsonbin.io/v3/b", true);
            req.setRequestHeader("Content-Type", "application/json");
            req.setRequestHeader("X-Master-Key", state.masterKey);
            req.setRequestHeader("X-Collection-Id", payload.collection);
            req.send(payload.data);
        },
    },
    getters: {
        isCurrentScene: (state) => (name) => {
            return state.scenes[state.currentSceneIndex] == name;
        },
        isSceneLoading: (state) => {
            return state.sceneLoading;
        },
        getSceneOptions: (state) => (scene) => {
            // return state.scenesOptions.then((data) => data[scene]);
            return state.scenesOptions[scene];
        },
    },
});
