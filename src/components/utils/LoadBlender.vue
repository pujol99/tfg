<template>
    <div></div>
</template>

<script>
import { TextureLoader, MeshBasicMaterial, Clock, MeshToonMaterial, ShaderMaterial } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { mapGetters, mapActions } from "vuex";
import { vs, fs } from "/public/assets/shaders/screen";
export default {
    props: {
        payload: Object
    },
    data() {
        return {
            vs: vs,
            fs: fs,
            screenMaterial: null
        }
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
        const bakedTexture = textureLoader.load(`./assets/scenes/${this.payload.blenderSceneName}/baked.jpg`);
        bakedTexture.flipY = false;

        //Materials
        const bakedMaterial = new MeshBasicMaterial({
            map: bakedTexture,
        });
        const lightMaterial = new MeshBasicMaterial({
            color: 0xffffff,
        });

        const screenTexture = textureLoader.load('./assets/images/screen.png');
        screenTexture.flipY = false;
        // const screenMaterial = new MeshBasicMaterial({ map: screenTexture });
        this.screenMaterial = new ShaderMaterial({
            uniforms:
            {
                uTime: { value: 0 },
                uTexture: { value: screenTexture }
            },
            vertexShader: vs,
            fragmentShader: fs
        })

        gltfLoader.load(`./assets/scenes/${this.payload.blenderSceneName}/scene.glb`, gltf => {
            gltf.scene.traverse(child => {
                child.material = bakedMaterial;
            });

            gltf.scene.children
                .filter(child => child.name.includes("Light"))
                .forEach(child => child.material = lightMaterial);

            gltf.scene.children.find((child) => child.name === 'Screen').material = this.screenMaterial;

            this.addScene(gltf.scene);

            this.isLoaded = true;
        });
    },
    computed: {
        ...mapGetters({ gltf: "stages/getGLTF" }),
    },
    methods: {
        ...mapActions({ addScene: "stages/addGLTFScene" }),
        update() {
            this.payload.blenderUpdate(this.gltf)
            if (this.isLoaded) {
                const elapsedTime = this.clock.getElapsedTime();
                this.screenMaterial.uniforms.uTime.value = elapsedTime;
            }
        },
    },
};
</script>
