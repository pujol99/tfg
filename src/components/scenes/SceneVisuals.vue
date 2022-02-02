<template>
    <Renderer ref="renderer" resize="window">
        <PerspectiveCamera ref="camera" :fov="70" :position="cameraPosition" :lookAt="cameraLookAt" />
        <Scene ref="scene" background="#000000">
            <AmbientLight :intensity="0.8" />
            <PointLight ref="light" :intensity="7" :position="cameraLookAt">
                <Sphere :radius="0.05" />
            </PointLight>
            <Loader
                ref="loader"
                :payload="{
                    blenderSceneName: config.sceneName,
                    fbx: config.fbx,
                }"
            />
        </Scene>
    </Renderer>
</template>

<script>
import { mapGetters } from "vuex";
import { gsap } from "gsap";
export default {
    props: {
        config: Object,
    },
    data() {
        let cameraLookAts = this.config.cameraLookAts;
        let cameraPositions = this.config.cameraPositions;
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
        this.$store.commit("stages/setRenderer", this.renderer);

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
                this.config.update(this.gltf)
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
