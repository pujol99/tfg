<template>
    <div></div>
</template>

<script>
import { Clock, BufferAttribute, BufferGeometry, ShaderMaterial, AdditiveBlending, Points, Color } from "three";
import { vs, fs } from "/public/assets/shaders/aura";
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            vs: vs,
            fs: fs,
            loaded: false,
            AURA_HEIGHT: 0.8, // Meters
            AURA_SIZE: 0.3, // Scale 0-1
        };
    },
    mounted() {
        this.clock = new Clock();
        this.firefliesMaterial = null;
        this.fireflies = null;
        this.red = new Color("red");
        this.green = new Color("green");
    },
    methods: {
        init(center) {
            const firefliesGeometry = new BufferGeometry();
            const firefliesCount = 60;
            const positionArray = new Float32Array(firefliesCount * 3);
            const scaleArray = new Float32Array(firefliesCount);

            for (let i = 0; i < firefliesCount; i++) {
                positionArray[i * 3 + 0] = Math.random() * this.AURA_SIZE + center.x - this.AURA_SIZE / 2;
                positionArray[i * 3 + 1] = Math.random() * this.AURA_HEIGHT;
                positionArray[i * 3 + 2] = Math.random() * this.AURA_SIZE + center.z - this.AURA_SIZE / 2;

                scaleArray[i] = Math.random() + 0.2;
            }

            firefliesGeometry.setAttribute("position", new BufferAttribute(positionArray, 3));
            firefliesGeometry.setAttribute("aScale", new BufferAttribute(scaleArray, 1));

            // Material
            var color = new Color();
            var barColor = color.lerpColors(this.red, this.green, this.mood.happiness);
            this.firefliesMaterial = new ShaderMaterial({
                uniforms: {
                    uTime: { value: 0 },
                    uPixelRatio: { value: 1 },
                    uSize: { value: 150 },
                    uColor: { value: barColor },
                },
                vertexShader: vs,
                fragmentShader: fs,
                transparent: true,
                blending: AdditiveBlending,
                depthWrite: false,
            });
            // Points
            this.fireflies = new Points(firefliesGeometry, this.firefliesMaterial);

            this.load();
        },
        load() {
            this.$store.commit("stages/addToScene", this.fireflies);
            this.loaded = true;
        },
        update() {
            if (this.loaded) {
                const elapsedTime = this.clock.getElapsedTime();
                this.firefliesMaterial.uniforms.uTime.value = elapsedTime;
            }
        },
    },
    computed: {
        ...mapGetters({ mood: "data/getMood", renderer: "stages/getRenderer" }),
    },
};
</script>
