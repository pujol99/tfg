<template>
    <select v-model="selected" @change="setLanguage(selected)">
        <option value="CAT">Catala</option>
        <option value="ESP">Espanol</option>
        <option value="ENG">English</option>
    </select>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    created() {
        this.selected = this.currentLanguage;
    },
    computed: {
        ...mapGetters({ currentLanguage: "labels/getLanguage" }),
    },
    methods: {
        ...mapActions({ setLanguage: "labels/setLanguage" }),
    },
};
</script>
