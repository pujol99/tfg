<template>
    <Renderer ref="renderer" resize="window">
        <PerspectiveCamera
            ref="camera"
            :position="cameraPosition"
            :lookAt="cameraLookAt"
        />
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
s

<script>
import { mapGetters } from "vuex";
import { gsap } from "gsap";
export default {
    data() {
        let cameraLookAts = [
            { x: 0, y: 0, z: 1 },
            { x: 1, y: 3, z: 1 },
        ];
        let cameraPositions = [
            { x: 3, y: 3, z: 1 },
            { x: 5, y: 5, z: 1 },
        ];
        return {
            cameraPositions,
            cameraPosition: Object.assign({}, cameraPositions[0]),
            cameraLookAts,
            cameraLookAt: Object.assign({}, cameraLookAts[0]),
            ANIM_TIME: 1.0,
        };
    },
    mounted() {
        this.scene = this.$refs.scene;
        this.renderer = this.$refs.renderer;

        this.$store.commit("stages/setScene", this.scene);

        this.renderer.onBeforeRender(() => {
            this.$refs.loader.update();
        });
    },
    computed: {
        ...mapGetters({ camera: "stages/getSceneCamera" }),
    },
    watch: {
        camera(newValue, oldValue) {
            this.swap(this.cameraPosition, this.cameraPositions[newValue]);
            this.swap(this.cameraLookAt, this.cameraLookAts[newValue]);
        },
    },
    methods: {
        swap(from, to) {
            gsap.to(from, {
                duration: this.ANIM_TIME,
                x: to.x,
                y: to.y,
                z: to.z,
            });
        },
    },
};
</script>
