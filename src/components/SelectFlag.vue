<template>
    <Renderer ref="renderer">
        <PerspectiveCamera
            ref="camera"
            :lookAt="cameraLookAt"
            :position="cameraPosition"
        />
        <Scene ref="scene" background="#000000">
            <PointLight :position="{ x: 0, y: 0, z: -3 }" :intensity="0.4" />
        </Scene>
    </Renderer>
</template>

<script>
import {
    Clock,
    TextureLoader,
    Vector2,
    ShaderMaterial,
    BufferAttribute,
    PlaneGeometry,
    Mesh
} from "three";
import { vs, fs } from "/public/shaders/flag";
export default {
    data() {
        return {
            cameraLookAt: { x: 0, y: 0, z: 0 },
            cameraPosition: { x: 0, y: 0, z: 1.5 },
            vs: vs,
            fs: fs,
        };
    },
    mounted() {
        this.renderer = this.$refs.renderer;
        this.scene = this.$refs.scene;
        this.camera = this.$refs.camera;
        this.material = null;

        this.clock = new Clock();

        this.init();
    },
    methods: {
        init() {
            const textureLoader = new TextureLoader();
            const flagTexture = textureLoader.load(
                "./assets/textures/facebook.png"
            );

            const geometry = new PlaneGeometry(1, 1, 32, 32);

            // Material
            this.material = new ShaderMaterial({
                vertexShader: this.vs,
                fragmentShader: this.fs,
                uniforms: {
                    uFrequency: { value: new Vector2(10, 5) },
                    uTime: { value: 0 },
                    uTexture: { value: flagTexture },
                },
            });

            const mesh = new Mesh(geometry, this.material);
            this.scene.add(mesh);

            this.renderer.onBeforeRender(this.update);
        },
        update() {
            const elapsedTime = this.clock.getElapsedTime();
            this.material.uniforms.uTime.value = elapsedTime
        },
    },
};
</script>
