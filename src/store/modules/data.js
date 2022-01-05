import { labels } from "./labels";

const state = () => ({
    languages: {
        ENG: 0,
        ESP: 1,
        CAT: 2,
    },
    language: 2,
    userData: {
        sceneDecisions: [],
        aboutDecisions: {},        
        surveyDecisions: {},        
    },
    scenesCollection: "61b4956f0ddbee6f8b1b8c7e",
    usersCollection: "61b49c4262ed886f915e5a13",
    masterKey: "$2b$10$yGbK6Zw/E5lzTl.TmQivFuhYR87PWV2Cy2TG.gIi8Lp2BLduGVNyq",
});

// getters
const getters = {
    //labels
    getLabel: state => label => {
        if (!labels[label]) return "No label";
        
        return labels[label][state.language];
    },
    getLanguage: state => {
        return Object.keys(state.languages).find(
            key => state.languages[key] === state.language
        );
    },
    //data
    getUserData: state => {
        return state.userData;
    },
};

// actions
const actions = {
    setLanguage({ commit }, language) {
        commit("setLanguage", language);
    },
    saveData({ commit, getters }) {
        console.log(getters.getUserData);
        //commit("saveData");
    },
};

// mutations
const mutations = {
    setLanguage(state, language) {
        state.language = state.languages[language];
    },
    saveData(state) {
        let req = new XMLHttpRequest();

        req.onreadystatechange = () => {
            if (req.readyState == XMLHttpRequest.DONE) {
                console.log(req.responseText);
            }
        };

        req.open("POST", "https://api.jsonbin.io/v3/b", true);
        req.setRequestHeader("Content-Type", "application/json");
        req.setRequestHeader("X-Master-Key", state.masterKey);
        req.setRequestHeader("X-Collection-Id", state.usersCollection);
        req.send(JSON.stringify(state.userData));
    },
    saveAboutDecisions(state, aboutDecisions) {
        for (const [key, value] of Object.entries(aboutDecisions)) {
            state.userData.aboutDecisions[key] = value;
        }
    },
    saveSurveyDecisions(state, surveyDecisions) {
        for (const [key, value] of Object.entries(surveyDecisions)) {
            state.userData.surveyDecisions[key] = value;
        }
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
