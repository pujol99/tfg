<template>
    <div></div>
</template>

<script>
import {
    Clock,
    BufferAttribute,
    BufferGeometry,
    ShaderMaterial,
    AdditiveBlending,
    Points,
} from "three";
import { vs, fs } from "/public/assets/shaders/aura";
export default {
    data() {
        return {
            vs: vs,
            fs: fs,
        };
    },
    mounted() {
        this.clock = new Clock();

        const firefliesGeometry = new BufferGeometry();
        const firefliesCount = 30;
        const positionArray = new Float32Array(firefliesCount * 3);
        const scaleArray = new Float32Array(firefliesCount);

        for (let i = 0; i < firefliesCount; i++) {
            positionArray[i * 3 + 0] = (Math.random() - 0.5) * 4;
            positionArray[i * 3 + 1] = Math.random() * 1.5;
            positionArray[i * 3 + 2] = (Math.random() - 0.5) * 4;

            scaleArray[i] = Math.random();
        }

        firefliesGeometry.setAttribute("position", new BufferAttribute(positionArray, 3));
        firefliesGeometry.setAttribute("aScale", new BufferAttribute(scaleArray, 1));

        // Material
        this.firefliesMaterial = new ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
                uSize: { value: 100 },
            },
            vertexShader: vs,
            fragmentShader: fs,
            transparent: true,
            blending: AdditiveBlending,
            depthWrite: false,
        });
        // Points
        this.fireflies = new Points(firefliesGeometry, this.firefliesMaterial);

        window.addEventListener("resize", () => {
            this.firefliesMaterial.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2);
        });
    },
    methods: {
        load(){
            this.$store.commit("stages/addToScene", this.fireflies);
        },
        update() {
            const elapsedTime = this.clock.getElapsedTime();
            this.firefliesMaterial.uniforms.uTime.value = elapsedTime;
        },
    },
};
</script>
