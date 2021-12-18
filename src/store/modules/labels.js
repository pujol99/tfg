

const state = () => ({
    languages: {
        "ENG": 0,
        "ESP": 1,
        "CAT": 2,
    },
    language: 1,
    labels: {
        continue: ["Continue","Avanza", "Avança"],
    },
});

// getters
const getters = {
    getLabel: state => label => {
        return state.labels[label][state.language];
    },
    getLanguage: state => {
        return Object.keys(state.languages).find(
            key => state.languages[key] === state.language
        );
    }
};

// actions
const actions = {
    setLanguage({ commit }, language) {
        commit("setLanguage", language);
    },
};

// mutations
const mutations = {
    setLanguage(state, language) {
        state.language = state.languages[language];
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
