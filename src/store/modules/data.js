const labels = {
    continue: ["Continue", "Avanza", "Avança"],
    welcome_title: ["TFG Game", "Juego TFG", "Joc TFG"],
    welcome_description: ["TFG Game", "Juego TFG", "Joc TFG"],
    final_title: ["Game end", "Fin del juego", "Fi del joc"],
    final_description: ["Thanks", "Gracias", "Gracies"],
    final_restart: ["Restart", "Reinicia", "Reinicia"],
    about_title: ["About you", "Sobre ti", "Sobre tu"],
    about_age: [
        "Select your age",
        "Selecciona tu edad",
        "Selecciona la teva edat",
    ],
    about_gender: [
        "Select your gender",
        "Selecciona tu genero",
        "Selecciona el teu genere",
    ],
    about_gender_options: [
        ["Male", "Female", "Other"],
        ["Hombre", "Mujer", "Otro"],
        ["Home", "Dona", "Altre"],
    ],
    survey_title: ["Final survey", "Encuesta final", "Enquesta final"],
    survey_options: [
        ["Disagree", "Neutral", "Agree"],
        ["En desacuerdo", "Neutral", "De acuerdo"],
        ["En desacord", "Neutral", "D'acord"],
    ],
    s1_title: [
        "ENGAn excessive use of social media platforms can lead to negative effects in physical and mental health",
        "ESPAn excessive use of social media platforms can lead to negative effects in physical and mental health",
        "CATAn excessive use of social media platforms can lead to negative effects in physical and mental health",
    ],
    s2_title: [
        "ENGAn excessive use of social media platforms can lead to negative effects in physical and mental health",
        "ESPAn excessive use of social media platforms can lead to negative effects in physical and mental health",
        "CATAn excessive use of social media platforms can lead to negative effects in physical and mental health",
    ],
};

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
    scenesOptions: {
        Scene1: {
            title: "Your friend is sad because she failed, but you are on the phone",
            options: [
                "Ignore and stay on the phone.",
                "Listen while on the phone.",
                "Give her all your attention.",
            ],
        },
    },
    
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
