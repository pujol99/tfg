<template>
    <EffectComposer ref="effect">
      <RenderPass />
    </EffectComposer>
</template>

<script>
import { gsap } from "gsap";
import { vs, fs } from "/public/assets/shaders/loadingScreen";
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { mapActions } from "vuex";
export default {
    data() {
        return {
            FADETIME: 1.0,
            vs: vs,
            fs: fs
        };
    },
    mounted() {
        this.effect = this.$refs.effect;

        this.tintPass = new ShaderPass({
            uniforms: {
                uAlpha: { value: 1.0 },
                uTime: { value: 0.0 },
            },
            vertexShader: this.vs,
            fragmentShader: this.fs
        })
        this.effect.addPass(this.tintPass)
    },
    methods: {
        ...mapActions({ loadingFinish: "stages/loadingFinish" }),
        finish() {
            var that = this;
            gsap.to(this.tintPass.material.uniforms.uAlpha, {
                duration: this.FADETIME,
                value: 0.0,
                onComplete: function () {
                    that.loadingFinish()
                    that.tintPass.enabled = false
                },
            });
        },
        update() {
            this.tintPass.material.uniforms.uTime.value = this.effect.composer.clock.elapsedTime;
        },
    },
};
</script>
