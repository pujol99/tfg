<template>
    <Renderer ref="renderer">
        <Camera :position="{ x: 0, y: 0, z: 100 }" />
    <Scene background="#000000">
      <NoisyImage
        src="./assets/images/catala.png"
        :width="120"
        :time-coef="0.001"
        :noise-coef="2"
        :z-coef="5"
        :disp-coef="0.015"
        :position="{x:50, y:0, z:0}"
        @click="flagClick('CAT')"
      />
      <NoisyImage
        src="./assets/images/english.png"
        :width="120"
        :time-coef="0.001"
        :noise-coef="2"
        :z-coef="5"
        :disp-coef="0.015"
        :position="{x:-50, y:0, z:0}"
        @click="flagClick('ENG')"
      />
    </Scene>
    </Renderer>
</template>

<script>
import { mapActions } from "vuex";
import NoisyImage from "troisjs/src/components/noisy/NoisyImage.js";
export default {
    components: { NoisyImage },
    data() {
        return {
            cameraLookAt: { x: 0, y: 0, z: 0 },
            cameraPosition: { x: 0, y: 0, z: 1.5 },
        };
    },
    methods: {
        ...mapActions({ setLanguage: "data/setLanguage" }),
        flagClick: function (language) {
            this.setLanguage(language)
        }
    },
};
</script>
