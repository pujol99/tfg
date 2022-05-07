import { labels } from "./labels";

const state = () => ({
    languages: {
        ENG: 0,
        CAT: 1,
    },
    language: 1,
    userData: {
        sceneDecisions: [],
    },
    mood: {
        happiness: 0.5,
        prev_happiness: 0.5,
        socialization: 0.5,
        prev_socialization: 0.5,
        focus: 0.5,
        prev_focus: 0.5,
    },
    decisionsMood: [
        {
            happiness: [-0.1, 0.3, -0.1],
            socialization: [-0.2, 0.2, -0.1],
            focus: [-0.1, 0.1, -0.1],
        },
        {
            happiness: [0.1, 0.2, 0.3],
            socialization: [-0.3, -0.1, 0.3],
            focus: [0.0, 0.0, 0.1],
        },
        {
            happiness: [-0.6, -0.1, 0.3],
            socialization: [-0.4, -0.1, 0.3],
            focus: [-0.2, -0.1, 0.2],
        },
        {
            happiness: [0.2, -0.2, -0.2],
            socialization: [0.3, -0.1, -0.1],
            focus: [0.2, -0.2, -0.2],
        },
        {
            happiness: [0.0, 0.0, 0.1],
            socialization: [0.0, -0.3, 0.1],
            focus: [-0.3, 0.3, -0.3],
        },
        {
            happiness: [0.1, 0.2, 0.2],
            socialization: [0.0, 0.0, 0.0],
            focus: [0.2, -0.2, -0.2],
        },
    ],
    decisionTaken: null,
    usersCollection: "626589ec019db46796910a0a",
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
    getMood: state => {
        return state.mood;
    },
    getDecisionTaken: state => {
        return state.decisionTaken;
    },
    getUserData: state => {
        return state.userData;
    },
};

// actions
const actions = {
    setLanguage({ commit }, language) {
        commit("setLanguage", language);
    },
    saveDecisions({ commit }, payload) {
        commit("saveDecisions", payload)
    },
    saveData({ commit, getters }) {
        console.log(getters.getUserData);
        commit("getBergenScale");
        commit("saveData");
    },
};

// mutations
const mutations = {
    setLanguage(state, language) {
        state.language = state.languages[language];
    },
    getBergenScale(state){
        const qS = ["bergen1", "bergen2", "bergen3", "bergen4", "bergen5", "bergen6"]
        let total = 0
        for (const q of qS) {
            total += parseInt(state.userData.bergenDecisions[q]) + 1;
        }
        state.userData.bergenDecisions.total = total;
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
        state.userData.mood = state.mood
        req.send(JSON.stringify(state.userData));
    },
    saveDecisions(state, payload) {
        for (const [key, value] of Object.entries(payload.decisions)) {
            if(!(payload.formType in state.userData))
                state.userData[payload.formType] = {};
            state.userData[payload.formType][key] = value;
        }
    },
    saveSceneDecision(state, index) {
        var sceneIndex = state.userData.sceneDecisions.length;

        state.userData.sceneDecisions.push(index);

        state.mood.prev_focus = state.mood.focus;
        state.mood.prev_happiness = state.mood.happiness;
        state.mood.prev_socialization = state.mood.socialization;

        state.mood.focus += state.decisionsMood[sceneIndex].focus[index];
        state.mood.happiness += state.decisionsMood[sceneIndex].happiness[index];
        state.mood.socialization += state.decisionsMood[sceneIndex].socialization[index];

        state.mood.focus = Math.min(Math.max(state.mood.focus, 0.0), 1.0);
        state.mood.happiness = Math.min(Math.max(state.mood.happiness, 0.0), 1.0);
        state.mood.socialization = Math.min(Math.max(state.mood.socialization, 0.0), 1.0);

        state.decisionTaken = index;

        this.commit("stages/reportStart", { root: true });
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
