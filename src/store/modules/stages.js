const state = () => ({
    stages: [
        "Welcome",
        "About",
        "Scene1",
        "Scene2",
        "Scene3",
        "Scene4",
        "Scene5",
        "Survey",
        "Final",
    ],
    currentStageIndex: 0,
    sceneLoading: false,
    sceneReporting: false,
    scene: null,
    renderer: null,
    gltfScene: null,
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
    getGLTF: state => {
        return state.gltfScene;
    },
    getRenderer: state => {
        return state.renderer;
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
    addGLTFScene({commit}, scene){
        commit("addToScene", scene);
        commit("setGLTFScene", scene);
    },
    loadingFinish({ commit }) {
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
    setRenderer(state, renderer) {
        state.renderer = renderer;
    },
    setGLTFScene(state, gltf) {
        state.gltfScene = gltf;
    },
    addToScene(state, object) {
        state.scene.add(object);
    },
    loadingStart(state) {
        state.sceneLoading = true;
        state.sceneReporting = false;
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
