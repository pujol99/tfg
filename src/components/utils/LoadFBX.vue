<template>
    <FbxModel
        v-for="model in models"
        :key="model"
        :src="`./assets/models/${model.path}.fbx`"
        @load="onLoad"
        :scale="model.scale || { x: 0.01, y: 0.01, z: 0.01 }"
        :position="model.position || { x: 0, y: 0, z: 0 }"
        :rotation="model.rotation || { y: -Math.PI * 0.5 }"
    />
</template>

<script>
import { AnimationMixer, Clock } from "three";
export default {
    props: {
        models: Array,
    },
    mounted() {
        this.modelsSize = (this.models && this.models.length) ? this.models.length : 0;
        this.isLoaded = this.modelsSize === 0;
        this.animations = [];
    },
    methods: {
        update() {
            this.animations.forEach(function (anim) {
                anim.animation.update(anim.clock.getDelta());
            });
        },
        onLoad(object) {
            var animation = new AnimationMixer(object);
            animation.clipAction(object.animations[1]).play();
            var clock = new Clock();

            this.animations.push({ animation, clock });
            
            if (this.animations.length === this.modelsSize)
                this.isLoaded = true;
        },
    },
};
</script>
