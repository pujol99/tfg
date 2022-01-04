<template>
    <Renderer ref="renderer" resize="window" orbitCtrl>
        <PerspectiveCamera ref="camera" :position="cameraPositions[camera]" />
        <Scene ref="scene" background="#000000">
            <AmbientLight :intensity="0.2" />
            <PointLight :intensity="0.5" :position="{ x: 0, y: 3, z: 0 }" />
            <Loader
                ref="loader"
                :payload="{
                    blenderSceneName: 'scene1',
                    fbx: [
                        {
                            path: 'Standing Arguing',
                            position: { x: -1, y: 0, z: 1 },
                            rotation: { y: Math.PI * 0.5 },
                        },
                        {
                            path: 'Standing Arguing',
                            position: { x: 1, y: 0, z: 1 },
                            rotation: { y: -Math.PI * 0.5 },
                        },
                    ],
                }"
            />
        </Scene>
    </Renderer>
</template>

<script>
import { mapGetters } from "vuex";
import Loader from "../utils/Loader.vue";
export default {
    components: {
        Loader,
    },
    data() {
        return {
            cameraPositions: [
                { x: 10, y: 10, z: 0 },
                { x: 1, y: 1, z: 0 }
            ]
        }
    },
    computed: {
        ...mapGetters({ camera: "stages/getSceneCamera" }),
    },
    mounted() {
        this.scene = this.$refs.scene;
        this.renderer = this.$refs.renderer;

        this.$store.commit("stages/setScene", this.scene);

        this.renderer.onBeforeRender(() => {
            this.$refs.loader.update();
        });
    },
};
</script>
