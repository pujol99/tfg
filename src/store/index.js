import { createStore } from "vuex";

export const store = createStore({
    state() {
        return {
            stages: ["Welcome", "Quiz", "Scene1", "Final"],
            currentStageIndex: 0,
            questionIndex: 0,
            sceneLoading: false,
            scenesOptions: {
                Scene1: {
                    title: "Your friend is sad because she failed, but you are on the phone",
                    option1: "Ignore and stay on the phone.",
                    option2: "Listen while on the phone.",
                    option3: "Give her all your attention.",
                },
            },
            // scenesOptions: fetch( //also change line 65
            //     "https://api.jsonbin.io/b/619926220ddbee6f8b0f40c3/latest"
            // ).then((response) => response.json()),
            scenesCollection: "61b4956f0ddbee6f8b1b8c7e",
            usersCollection: "61b49c4262ed886f915e5a13",
            masterKey:
                "$2b$10$yGbK6Zw/E5lzTl.TmQivFuhYR87PWV2Cy2TG.gIi8Lp2BLduGVNyq",

            userData: {
                gender: "Male",
                age: 14,
                questions: [],
            },
        };
    },
    mutations: {
        nextStage(state) {
            if (state.currentStageIndex + 1 < state.stages.length) {
                state.currentStageIndex++;

                // If next scene is of Scene type
                if (state.stages[state.currentStageIndex].includes("Scene")) {
                    state.sceneLoading = !state.sceneLoading;
                }
            }
        },
        nextQuestion(state) {
            state.questionIndex++;
        },
        loadingSwitch(state) {
            state.sceneLoading = !state.sceneLoading;
        },
        saveUserData(state, payload) {
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
            req.send(JSON.stringify(state.userData));
        },
    },
    actions: {
        nextStage({ commit, getters }) {
            commit("nextStage");
            // if (getters.isLastStage) {
            //     commit("saveUserData", {
            //         collection: getters.getUsersCollection,
            //     });
            // }
            // console.log(getters.getUserData);
        },
    },
    getters: {
        isCurrentStage: (state) => (name) => {
            return state.stages[state.currentStageIndex] == name;
        },
        isSceneLoading: (state) => {
            return state.sceneLoading;
        },
        isLastStage: (state) => {
            return state.currentStageIndex == state.stages.length - 1;
        },
        getUsersCollection: (state) => {
            return state.usersCollection;
        },
        getUserData: (state) => {
            return state.userData;
        },
        getSceneOptions: (state) => (scene) => {
            // return state.scenesOptions.then((data) => data[scene]);
            return state.scenesOptions[scene];
        },
    },
});
