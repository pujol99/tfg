<template>
    <FbxModel v-for="model in models" :key="model"
        :src="`./assets/models/${model.path}.fbx`"
        @load="onLoad"
        :scale="model.props.scale"
        :position="model.props.position"
        :rotation="model.props.rotation"
    />
</template>

<script>
import { AnimationMixer, Clock } from 'three';
export default {
    props: {
        models: Array
    },
    data() {
        return {
            isLoaded: false,
        }
    },
    mounted() {
        this.modelsSize = this.models.length;
    },
    methods: {
        init() {
            this.animations = []
        },
        onLoad(object) {
            var animation = new AnimationMixer(object);
            animation.clipAction(object.animations[1]).play();
            var clock = new Clock();

            this.animations.push({ animation, clock });
            if(this.animations.length === this.modelsSize) this.isLoaded = true;
        },
        update() {
            this.animations.forEach(function (anim) {
                anim.animation.update(anim.clock.getDelta());
            });
        },

    },
};
</script>
