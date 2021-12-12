<template>
    <Renderer ref="renderer" resize="window" :orbit-ctrl="{ autoRotate: true, autoRotateSpeed: 0.5}">
        <PerspectiveCamera
            ref="camera"
            :lookAt="cameraLookAt"
            :position="cameraPosition"
        />
        <Scene ref="scene" background="#000000">
            <PointLight :position="{ x: 0, y: 0, z: 3 }" :intensity="0.4" />
            <PointLight :position="{ x: 0, y: 0, z: -3 }" :intensity="0.4" />

            <LoadingScreen ref="loadingScreen" :fs="fs" :vs="vs" />
            <FbxModel
                src="./assets/models/Standing Arguing.fbx"
                @load="onLoad"
                :position="{ y: -3, x: -1, z: 0 }"
                :rotation="{ y: Math.PI * 0.5 }"
                :scale="{ x: 0.02, y: 0.02, z: 0.02 }"
            />
            <FbxModel
                src="./assets/models/Standing Arguing.fbx"
                @load="onLoad"
                :position="{ y: -3, x: 1, z: 0 }"
                :rotation="{ y: -Math.PI * 0.5 }"
                :scale="{ x: 0.02, y: 0.02, z: 0.02 }"
            />
        </Scene>
    </Renderer>
</template>

<script>
import { AnimationMixer, Clock, CubeTextureLoader } from "three";
import { vs, fs } from "./shaders";
import LoadingScreen from "../../ui/LoadingScreen.vue";
export default {
    components: {
        LoadingScreen,
    },
    data() {
        return {
            cameraLookAt: { x: 0, y: 0, z: 0 },
            cameraPosition: {
                x: -1.8625455300041365,
                y: 0.2209428475467337,
                z: 0.676835122899029,
            },
            animations: [],
            numberOfObjects: 2,
            vs: vs,
            fs: fs,
        };
    },
    mounted() {
        this.renderer = this.$refs.renderer;
        this.scene = this.$refs.scene;
        this.loadingScreen = this.$refs.loadingScreen;
        this.camera = this.$refs.camera;

        this.clock = new Clock();
        this.init();
    },
    methods: {
        init() {
            const cubeTextureLoader = new CubeTextureLoader();
            this.scene.scene.background = cubeTextureLoader.load([
                "./assets/textures/street/px.jpg",
                "./assets/textures/street/nx.jpg",
                "./assets/textures/street/py.jpg",
                "./assets/textures/street/ny.jpg",
                "./assets/textures/street/pz.jpg",
                "./assets/textures/street/nz.jpg",
            ]);
            this.renderer.onBeforeRender(this.update);
        },
        update() {
            this.updateAnimations();
            this.loadingScreen.update();
        },
        onLoad(object) {
            var animation = new AnimationMixer(object);
            animation.clipAction(object.animations[1]).play();
            var clock = new Clock();
            this.animations.push({ animation, clock });

            // Check if screen is fully loaded
            if (this.numberOfObjects == this.animations.length) {
                this.loadingScreen.finish();
            }
        },
        updateAnimations() {
            this.animations.forEach(function (anim) {
                anim.animation.update(anim.clock.getDelta());
            });
        },
    },
};
</script>
