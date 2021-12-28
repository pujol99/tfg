<template>
    <Renderer ref="renderer">
        <Camera :position="{ x: 0, y: 0, z: 100 }" />
        <Scene ref="scene">
            <NoisyImage
                v-for="lang in langs"
                :key="lang"
                :src="`./assets/images/${lang.type}.png`"
                :width="120"
                :dispCoef="0"
                :z-coef="selected === lang.type ? 5 : 0"
                :position="{ x: lang.pos, y: 0, z: 0 }"
                @click="onClick(lang.type)"
                @pointerOver="onMouseOver"
            />
        </Scene>
    </Renderer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import NoisyImage from "troisjs/src/components/noisy/NoisyImage.js";
export default {
    components: { NoisyImage },
    data() {
        return {
            langs: [
                { type: "CAT", pos: 45 },
                { type: "ENG", pos: -45 },
            ],
            selected: "",
        };
    },
    mounted() {
        this.selected = this.getLanguage;
    },
    computed: {
        ...mapGetters({ getLanguage: "data/getLanguage" }),
    },
    methods: {
        ...mapActions({ setLanguage: "data/setLanguage" }),
        onMouseOver: function ({ over, component }) {
            //component.mesh.position.z = over ? 7 : 0;
            document.getElementById("flag-space").style.cursor = over
                ? "pointer"
                : "default";
        },
        onClick(lang) {
            this.setLanguage(lang);
            this.selected = lang;
        },
    },
};
</script>
w
