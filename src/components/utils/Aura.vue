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
    Color
} from "three";
import { vs, fs } from "/public/assets/shaders/aura";
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            vs: vs,
            fs: fs,
            loaded: false,
            AURA_HEIGHT: 2.0
        };
    },
    mounted() {
        this.clock = new Clock();
        this.firefliesMaterial = null;
        this.fireflies = null;
        this.red = new Color("red")
        this.green = new Color("green")
    },
    methods: {
        init(center) {
            const firefliesGeometry = new BufferGeometry();
            const firefliesCount = 60;
            const positionArray = new Float32Array(firefliesCount * 3);
            const scaleArray = new Float32Array(firefliesCount);

            for (let i = 0; i < firefliesCount; i++) {
                positionArray[i * 3 + 0] = (Math.random() + center.x - 0.4);
                positionArray[i * 3 + 1] = Math.random() * this.AURA_HEIGHT;
                positionArray[i * 3 + 2] = (Math.random() + center.z - 0.5);

                scaleArray[i] = Math.random();
            }

            firefliesGeometry.setAttribute("position", new BufferAttribute(positionArray, 3));
            firefliesGeometry.setAttribute("aScale", new BufferAttribute(scaleArray, 1));

            // Material
            this.firefliesMaterial = new ShaderMaterial({
                uniforms: {
                    uTime: { value: 0 },
                    uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
                    uSize: { value: 342 },
                    uColor: { value: this.red.lerp(this.green, this.mood) }
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
                this.firefliesMaterial.uniforms.uPixelRatio.value = Math.min(
                    window.devicePixelRatio,
                    2
                );
            });

            this.load()
        },
        load() {
            this.$store.commit("stages/addToScene", this.fireflies);
            this.loaded = true
        },
        update() {
            if(this.loaded){
                const elapsedTime = this.clock.getElapsedTime();
                this.firefliesMaterial.uniforms.uTime.value = elapsedTime;
            }
        },
    },
    computed: {
        ...mapGetters({ mood: "stages/getMood" }),
    },
};
</script>
