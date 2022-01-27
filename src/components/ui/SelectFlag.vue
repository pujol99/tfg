<template>
    <img
        v-for="lang in langs"
        :key="lang"
        :src="`./assets/images/${lang}.png`"
        :class="{ activeLang: currentLanguage === lang }"
        @click="setLanguage(lang)"
    />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    data() {
        return {
            langs: ["CAT", "ENG"],
        };
    },
    computed: {
        ...mapGetters({ currentLanguage: "data/getLanguage", getLabel: "data/getLabel" }),
    },
    methods: {
        ...mapActions({ setLanguage: "data/setLanguage" }),
    },
};
</script>
w
