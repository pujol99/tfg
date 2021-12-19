import { labels } from "./labels";

const state = () => ({
    //labels
    languages: {
        ENG: 0,
        ESP: 1,
        CAT: 2,
        0: "ENG",
        1: "ESP",
        2: "CAT",
    },
    language: 2,
    //data
    scenesCollection: "61b4956f0ddbee6f8b1b8c7e",
    usersCollection: "61b49c4262ed886f915e5a13",
    masterKey: "$2b$10$yGbK6Zw/E5lzTl.TmQivFuhYR87PWV2Cy2TG.gIi8Lp2BLduGVNyq",
    userData: {
        aboutDecisions: null,
        sceneDecisions: [],
        surveyDecisions: null,
    },
});

// getters
const getters = {
    //labels
    getLabel: state => label => {
        if (!labels[label]) return "No label";
        return labels[label][state.language];
    },
    getLanguage: state => {
        // return language CODE (CAT)
        return state.languages[state.language];
    },
    //data
    getUsersCollection: state => {
        return state.usersCollection;
    },
    getScenesCollection: state => {
        return state.scenesCollection;
    },
    getUserData: state => {
        return state.userData;
    },
    getSurveyQuestions: state => {
        return state.surveyQuestions;
    },
    getSceneOptions: state => scene => {
        return state.scenesOptions[scene];
    },
};

// actions
const actions = {
    setLanguage({ commit }, language) {
        commit("setLanguage", language);
    },
    saveData({ commit, getters }) {
        //commit("saveData", getters.getUsersCollection);
    },
};

// mutations
const mutations = {
    setLanguage(state, language) {
        state.language = state.languages[language];
    },
    saveData(state, collection) {
        let req = new XMLHttpRequest();

        req.onreadystatechange = () => {
            if (req.readyState == XMLHttpRequest.DONE) {
                console.log(req.responseText);
            }
        };

        req.open("POST", "https://api.jsonbin.io/v3/b", true);
        req.setRequestHeader("Content-Type", "application/json");
        req.setRequestHeader("X-Master-Key", state.masterKey);
        req.setRequestHeader("X-Collection-Id", collection);
        req.send(JSON.stringify(state.userData));
    },
    saveAboutDecisions(state, aboutDecisions) {
        state.userData.aboutDecisions = aboutDecisions;
    },
    saveSurveyDecisions(state, surveyDecisions) {
        state.userData.surveyDecisions = surveyDecisions;
    },
    saveSceneDecision(state, index) {
        state.userData.sceneDecisions.push(index);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
