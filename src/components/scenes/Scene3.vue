<template>
    <Renderer ref="renderer" resize="window">
        <PerspectiveCamera ref="camera" :position="cameraPosition" :lookAt="cameraLookAt" />
        <Scene ref="scene" background="#000000">
            <AmbientLight :intensity="0.8" />
            <Loader
                ref="loader"
                :payload="{
                    blenderSceneName: 'scene3',
                    // Fbx: first character will be main character (with aura)
                    fbx: [
                        {
                            path: 'Texting',
                            position: { x: -0.5, y: 0, z: -0 },
                            scale: { x: 0.002, y: 0.002, z: 0.002 },
                            rotation: { y: (Math.PI * 2) * 0.75 },
                        },
                        {
                            path: 'Sitting Talking Right',
                            position: { x: -2.1, y: 0.45, z: -0.4 },
                            scale: { x: 0.002, y: 0.002, z: 0.002 },
                            rotation: { y: (Math.PI * 2) * 0.25 },
                        },
                        {
                            path: 'Sitting Talking Left',
                            position: { x: -2.1, y: 0.45, z: -0.0 },
                            scale: { x: 0.002, y: 0.002, z: 0.002 },
                            rotation: { y: (Math.PI * 2) * 0.25 },
                        },
                    ],
                }"
            />
        </Scene>
    </Renderer>
</template>

<script>
import { mapGetters } from "vuex";
import { gsap } from "gsap";
export default {
    data() {
        let cameraLookAts = [
            { x: -1, y: 1, z: 0 },
        ];
        let cameraPositions = [
            { x: 1.5, y: 1.0, z: 0.5 },
        ];
        return {
            cameras: cameraPositions.length,
            cameraPositions,
            cameraPosition: Object.assign({}, cameraPositions[0]), // make indep. copy
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
            this.update();
        });
    },
    watch: {
        camera(newValue, oldValue) {
            newValue = newValue % this.cameras;
            this.swap(this.cameraPosition, this.cameraPositions[newValue]);
            this.swap(this.cameraLookAt, this.cameraLookAts[newValue]);
        },
    },
    computed: {
        ...mapGetters({ camera: "stages/getSceneCamera", gltf: "stages/getGLTF" }),
    },
    methods: {
        update() {
            if (this.gltf) {
                // this.gltf.children[0].children[0].children[4].rotation.y += 0.01;
            }
        },
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
