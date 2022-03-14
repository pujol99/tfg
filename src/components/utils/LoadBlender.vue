<template>
    <div></div>
</template>

<script>
import {
    TextureLoader,
    MeshBasicMaterial,
    Clock,
    MeshToonMaterial,
    ShaderMaterial,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { mapGetters, mapActions } from "vuex";
import { sRGBEncoding, Vector2 } from "three";
import { vs, fs } from "/public/assets/shaders/screen";
export default {
    props: {
        payload: Object,
    },
    data() {
        return {
            vs: vs,
            fs: fs,
            screenMaterial: null,
        };
    },
    mounted() {
        this.isLoaded = false;
        this.clock = new Clock();

        if (!this.payload.blenderSceneName) {
            this.isLoaded = true;
            return;
        }

        //Loaders
        const textureLoader = new TextureLoader();
        const dracoLoader = new DRACOLoader();
        const gltfLoader = new GLTFLoader();
        dracoLoader.setDecoderPath("./assets/draco/");
        gltfLoader.setDRACOLoader(dracoLoader);

        //Textures
        const bakedTexture = textureLoader.load(
            `./assets/scenes/${this.payload.blenderSceneName}/baked.jpg`
        );
        bakedTexture.flipY = false;

        //Materials
        const bakedMaterial = new MeshBasicMaterial({
            map: bakedTexture,
        });
        bakedTexture.encoding = sRGBEncoding
        const lightMaterial = new MeshBasicMaterial({
            color: 0xffffff,
        });

        const screenTexture = textureLoader.load("./assets/images/screen.png");
        const monitorTexture = textureLoader.load("./assets/images/monitor.png");
        screenTexture.flipY = false;
        this.screenMaterial = new ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uTexture: { value: screenTexture },
                uRes: { value: new Vector2(200.0) },
            },
            vertexShader: vs,
            fragmentShader: fs,
        });

        this.monitorMaterial = new ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uTexture: { value: monitorTexture },
                uRes: { value: new Vector2(1000.0) },
            },
            vertexShader: vs,
            fragmentShader: fs,
        });

        gltfLoader.load(
            `./assets/scenes/${this.payload.blenderSceneName}/scene.glb`,
            gltf => {
                gltf.scene.traverse(child => {
                    child.material = bakedMaterial;
                });

                gltf.scene.children
                    .filter(child => child.name.includes("Light"))
                    .forEach(child => (child.material = lightMaterial));
                
                gltf.scene.children
                    .filter(child => child.name === "Screen")
                    .forEach(child => (child.material = this.screenMaterial));

                gltf.scene.children
                    .filter(child => child.name === "Monitor")
                    .forEach(child => (child.material = this.monitorMaterial));

                this.addScene(gltf.scene);

                this.isLoaded = true;
            }
        );
    },
    computed: {
        ...mapGetters({ gltf: "stages/getGLTF" }),
    },
    methods: {
        ...mapActions({ addScene: "stages/addGLTFScene" }),
        update() {
            if (this.isLoaded) {
                this.payload.blenderUpdate(this.gltf);
                const elapsedTime = this.clock.getElapsedTime();
                this.screenMaterial.uniforms.uTime.value = elapsedTime;
                this.monitorMaterial.uniforms.uTime.value = elapsedTime;
            }
        },
    },
};
</script>
