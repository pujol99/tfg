const state = () => ({
    stages: [
        // "Welcome", 
        // "About", 
        "Scene1", 
        "Survey", 
        "Final"
    ],
    currentStageIndex: 0,
    sceneLoading: false,
    sceneReporting: false,
    scene: null,
    sceneCamera: 0,

});

// getters
const getters = {
    isCurrentStage: state => name => {
        return state.stages[state.currentStageIndex] == name;
    },
    currentStageIsScene: state => {
        return state.stages[state.currentStageIndex].includes("Scene");
    },
    isSceneLoading: state => {
        return state.sceneLoading;
    },
    isSceneReporting: state => {
        return state.sceneReporting;
    },
    getSceneCamera: state => {
        return state.sceneCamera;
    },
    isLastStage: state => {
        return state.currentStageIndex == state.stages.length - 1;
    },
};

// actions
const actions = {
    onAppLoad({ commit, getters }) {
        if (getters.currentStageIsScene) commit("loadingStart");
    },
    nextStage({ commit, getters }) {
        if (!getters.isLastStage) commit("nextStage");
        if (getters.currentStageIsScene) commit("loadingStart");
        if (getters.isLastStage) commit("saveData");
    },
    loadingFinish({ commit }) {
        commit("removeLoading");
        commit("loadingEnd");
    },
};

// mutations
const mutations = {
    nextStage(state) {
        state.currentStageIndex++;
    },
    setScene(state, scene) {
        state.scene = scene;
    },
    removeLoading(state) {
        state.scene.remove(state.scene.scene.getObjectByName("loadingPlane"));
    },
    addToScene(state, object) {
        state.scene.add(object);
    },
    loadingStart(state) {
        state.sceneLoading = true;
    },
    loadingEnd(state) {
        state.sceneLoading = false;
    },
    reportStart(state) {
        state.sceneReporting = true;
    },
    reportEnd(state) {
        state.sceneReporting = false;
    },
    saveData() {
        this.dispatch("data/saveData", { root: true });
    },
    nextCamera(state) {
        state.sceneCamera++;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
