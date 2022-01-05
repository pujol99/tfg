const state = () => ({
    stages: ["Welcome", "About", "Scene1", "Survey", "Final"],
    currentStageIndex: 0,
    sceneLoading: false,
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
    getSceneCamera: state => {
        return state.sceneCamera;
    },
    isLastStage: state => {
        return state.currentStageIndex == state.stages.length - 1;
    },
};

// actions
const actions = {
    onAppLoad({ commit, getters }){
        if (getters.currentStageIsScene) commit("loadingStart");
    },
    nextStage({ commit, getters }) {
        if (!getters.isLastStage) commit("nextStage");
        if (getters.currentStageIsScene) commit("loadingStart");
        if (getters.isLastStage) commit("saveData");
    },
    loadingFinish({ commit }){
        commit("removeLoading");
        commit("loadingEnd");
    }
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
    addBlender(state, blender) {
        state.scene.add(blender);
    },
    loadingStart(state) {
        state.sceneLoading = true;
    },
    loadingEnd(state) {
        state.sceneLoading = false;
    },
    saveData() {
        this.dispatch("data/saveData", { root: true });
    },
    nextCamera(state) {
        state.sceneCamera++;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
