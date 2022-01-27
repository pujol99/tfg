<template>
    <div></div>
</template>

<script>
import { TextureLoader, MeshBasicMaterial } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { mapActions } from "vuex";
export default {
    props: ["sceneName"],
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

        gltfLoader.load(`./assets/scenes/${this.sceneName}/scene.glb`, gltf => {
            gltf.scene.traverse(child => {
                child.material = bakedMaterial;
            });

            gltf.scene.children
                .filter(child => child.name.includes("Light"))
                .forEach(child => child.material = lightMaterial);

            this.addScene(gltf.scene);

            this.isLoaded = true;
        });
    },
    methods: {
        ...mapActions({ addScene: "stages/addGLTFScene" }),
    },
};
</script>
