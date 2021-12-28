const state = () => ({
    stages: ["Welcome", "About", "Scene1", "Survey", "Final"],
    currentStageIndex: 0,
    sceneLoading: false,
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
    isLastStage: state => {
        return state.currentStageIndex == state.stages.length - 1;
    },
};

// actions
const actions = {
    nextStage({ commit, getters }) {
        if (!getters.isLastStage) commit("nextStage");
        if (getters.currentStageIsScene) commit("loadingSwitch");
        if (getters.isLastStage) commit("saveData");
    },
};

// mutations
const mutations = {
    nextStage(state) {
        state.currentStageIndex++;
    },
    loadingSwitch(state) {
        state.sceneLoading = !state.sceneLoading;
    },
    saveData() {
        this.dispatch("data/saveData", { root: true });
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
