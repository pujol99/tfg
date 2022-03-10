<template>
    <div></div>
</template>

<script>
import { TextureLoader, MeshBasicMaterial, MeshToonMaterial, ShaderMaterial } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { mapActions } from "vuex";
import { vs, fs } from "/public/assets/shaders/screen";
export default {
    props: ["sceneName"],
    data() {
        return {
            vs: vs,
            fs: fs
        }
    },
    mounted() {
        this.isLoaded = false;

        if (!this.sceneName) {
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
        const bakedTexture = textureLoader.load(`./assets/scenes/${this.sceneName}/baked.jpg`);
        bakedTexture.flipY = false;

        //Materials
        const bakedMaterial = new MeshBasicMaterial({
            map: bakedTexture,
        });
        const lightMaterial = new MeshBasicMaterial({
            color: 0xffffff,
        });

        // const screenTexture = textureLoader.load('./assets/images/screen.png');
        // const screenMaterial = new MeshBasicMaterial({ map: screenTexture });
        const screenMaterial = new ShaderMaterial({
            uniforms:
            {
                uTime: { value: 0 },
            },
            vertexShader: vs,
            fragmentShader: fs
        })


        gltfLoader.load(`./assets/scenes/${this.sceneName}/scene.glb`, gltf => {
            gltf.scene.traverse(child => {
                child.material = bakedMaterial;
            });

            gltf.scene.children
                .filter(child => child.name.includes("Light"))
                .forEach(child => child.material = lightMaterial);

            gltf.scene.children
                .filter(child => child.name.includes("Screen"))
                .forEach(child => child.material = screenMaterial);

            this.addScene(gltf.scene);

            this.isLoaded = true;
        });
    },
    methods: {
        ...mapActions({ addScene: "stages/addGLTFScene" }),
    },
};
</script>
