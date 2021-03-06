<template>
    <div></div>
</template>

<script>
import {
    TextureLoader,
    MeshBasicMaterial,
    Clock,
    ShaderMaterial,
    sRGBEncoding,
    Vector2,
    VideoTexture,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { mapGetters, mapActions } from "vuex";
import { vs, fs } from "/public/assets/shaders/screen";
export default {
    props: {
        sceneConfig: Object,
    },
    data() {
        return {
            vs: vs,
            fs: fs,
            isLoaded: false,
            clock: new Clock(),
        };
    },
    mounted() {
        //Loaders
        const textureLoader = new TextureLoader();
        const dracoLoader = new DRACOLoader();
        const gltfLoader = new GLTFLoader();
        dracoLoader.setDecoderPath("./assets/draco/");
        gltfLoader.setDRACOLoader(dracoLoader);

        //Textures
        const bakedTexture = textureLoader.load(
            `./assets/scenes/${this.sceneConfig.name}/baked.jpg`
        );
        bakedTexture.flipY = false;
        const screenTexture = textureLoader.load("./assets/images/screen.png");
        screenTexture.flipY = false;
        const monitorTexture = textureLoader.load("./assets/images/monitor.png");

        //Materials
        const bakedMaterial = new MeshBasicMaterial({ map: bakedTexture });
        bakedTexture.encoding = sRGBEncoding;
        const lightMaterial = new MeshBasicMaterial({ color: 0xffffff });
        this.screenMaterial = this.getScreenMaterial(screenTexture, 200.0);
        this.monitorMaterial = this.getScreenMaterial(monitorTexture, 1000.0);

        gltfLoader.load(`./assets/scenes/${this.sceneConfig.name}/scene.glb`, gltf => {
            this.setAllMaterial(gltf, bakedMaterial);
            this.setMaterialIncludes(gltf, "Light", lightMaterial);
            this.setMaterial(gltf, "Monitor", this.monitorMaterial);
            this.setMaterial(gltf, "Screen", this.screenMaterial);

            this.addScene(gltf.scene);
            this.isLoaded = true;
        });
    },
    computed: { ...mapGetters({ gltf: "stages/getGLTF" }) },
    methods: {
        ...mapActions({ addScene: "stages/addGLTFScene" }),
        update() {
            if (this.isLoaded) {
                this.sceneConfig.update(this.gltf);

                // Update uniforms
                const elapsedTime = this.clock.getElapsedTime();
                this.screenMaterial.uniforms.uTime.value = elapsedTime;
                this.monitorMaterial.uniforms.uTime.value = elapsedTime;
            }
        },
        setMaterialIncludes(gltf, type, material) {
            gltf.scene.children
                .filter(child => child.name.includes(type))
                .forEach(child => (child.material = material));
        },
        setMaterial(gltf, type, material) {
            gltf.scene.children
                .filter(child => child.name === type)
                .forEach(child => (child.material = material));
        },
        setAllMaterial(gltf, material) {
            gltf.scene.traverse(child => {
                child.material = material;
            });
        },
        getScreenMaterial(texture, res) {
            return new ShaderMaterial({
                uniforms: {
                    uTime: { value: 0 },
                    uTexture: { value: texture },
                    uRes: { value: new Vector2(res) },
                },
                vertexShader: vs,
                fragmentShader: fs,
            });
        },
    },
};
</script>
