<template>
    <Renderer ref="renderer" resize="window" orbitCtrl>
        <PerspectiveCamera ref="camera" :position="{ x: 10, y: 10, z: 0 }" />
        <Scene ref="scene" background="#000000">
            <AmbientLight :intensity="0.2" />
            <PointLight :intensity="0.5" :position="{ x: 0, y: 3, z: 0 }" />
            <Loader
                ref="loader"
                :toLoad="{
                    blender: 'scene1',
                    fbx: [
                    
                    ],
                }"
            />
        </Scene>
    </Renderer>
</template>

<script>
                        // {
                        //     path: 'Standing Arguing',
                        //     position: { x: -1, y: 0, z: 1 },
                        //     rotation: { y: Math.PI * 0.5 },
                        // },
                        // {
                        //     path: 'Standing Arguing',
                        //     position: { x: 1, y: 0, z: 1 },
                        //     rotation: { y: -Math.PI * 0.5 },
                        // },
import Loader from "../utils/Loader.vue";
export default {
    components: {
        Loader,
    },
    mounted() {
        this.$store.commit("stages/setScene", this.$refs.scene)

        this.$refs.renderer.onBeforeRender(() => {
            this.$refs.loader.update();
        });
    },
};
</script>
