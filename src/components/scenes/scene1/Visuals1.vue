<template>
    <Renderer ref="renderer" resize="window" orbitCtrl>
        <PerspectiveCamera
            ref="camera"
            :lookAt="cameraLookAt"
            :position="cameraPosition"
        />
        <Scene ref="scene" background="#000000">
            <PointLight :position="{ x: 0, y: 0, z: 3 }" :intensity="0.4"
                ><Sphere :radius="0.05" />
            </PointLight>
            <PointLight :position="{ x: 0, y: 0, z: -3 }" :intensity="0.4"
                ><Sphere :radius="0.05" />
            </PointLight>
            <Plane
                :width="30"
                :height="30"
                :rotation="{ x: -Math.PI / 2, y: 0, z: 0 }"
                :position="{ y: -3 }"
            />
            <Plane ref="loadingScreen" :width="2" :height="2" :position="{ y: -2, z: 0 }">
                <ShaderMaterial
                    :props="{
                        vertexShader: vs,
                        fragmentShader: fs,
                        uniforms: us,
                    }"
                />
            </Plane>
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
import { AnimationMixer, Clock } from "three";
import { gsap } from "gsap";
import { vs, fs } from "./shaders";
export default {
    name: "Visuals1",
    data() {
        return {
            cameraLookAt: { x: 0, y: 0, z: 0 },
            cameraPosition: { x: 0, y: 0, z: 5 },
            animations: [],
            numberOfObjects: 2,
            us: {
                uAlpha: { value: 1.0 },
                uTime: { value: 0.0 },
            },
            vs: vs,
            fs: fs,
        };
    },
    mounted() {
        this.loadingScreen = this.$refs.loadingScreen;
        this.loadingScreenMaterial = this.loadingScreen.material;
        this.loadingScreenMaterial.transparent = true;
        this.renderer = this.$refs.renderer;
        this.scene = this.$refs.scene;
        this.camera = this.$refs.camwera;
        this.clock = new Clock();
        this.init();
    },
    methods: {
        init() {
            this.renderer.onBeforeRender(this.update);
        },
        update() {
            const elapsedTime = this.clock.getElapsedTime();
            this.us.uTime.value = elapsedTime;
            this.updateAnimations();
        },
        onLoad(object) {
            var animation = new AnimationMixer(object);
            animation.clipAction(object.animations[1]).play();
            var clock = new Clock();
            this.animations.push({ animation, clock });

            // Check if screen is fully loaded
            if (this.numberOfObjects == this.animations.length) {
                this.$store.commit("loadingSwap");
                var loadingScreen = this.loadingScreen;
                var scene = this.scene;
                gsap.to(this.loadingScreenMaterial.uniforms.uAlpha, {
                    duration: 3,
                    value: 0.0,
                    onComplete: function () {
                        scene.scene.remove(loadingScreen)
                        console.log(scene);
                    },
                });
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
