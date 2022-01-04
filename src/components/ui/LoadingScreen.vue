<template>
    <Plane
        ref="loadingScreen"
        :width="2"
        :height="2"
        :position="{ y: -2, z: 0 }"
    >
        <ShaderMaterial
            :props="{
                vertexShader: vs,
                fragmentShader: fs,
                uniforms: us,
            }"
        />
    </Plane>
</template>

<script>
import { Clock } from "three";
import { gsap } from "gsap";
import { vs, fs } from "/public/assets/shaders/loadingScreen";
import { mapActions } from "vuex";
export default {
    data() {
        return {
            FADETIME: 1.0,
            us: {
                uAlpha: { value: 1.0 },
                uTime: { value: 0.0 },
            },
            vs: vs,
            fs: fs
        };
    },
    mounted() {
        this.loadingScreen = this.$refs.loadingScreen;
        this.loadingScreen.mesh.name = "loadingPlane";

        this.loadingScreenMaterial = this.loadingScreen.material;
        this.loadingScreenMaterial.transparent = true;
        
        this.clock = new Clock();
    },
    methods: {
        ...mapActions({ loadingFinish: "stages/loadingFinish" }),
        finish() {
            var that = this;

            // Fade out animation
            gsap.to(this.loadingScreenMaterial.uniforms.uAlpha, {
                duration: this.FADETIME,
                value: 0.0,
                onComplete: function () {
                    that.loadingFinish()
                },
            });
        },
        update() {
            const elapsedTime = this.clock.getElapsedTime();
            this.us.uTime.value = elapsedTime;
        },
    },
};
</script>
