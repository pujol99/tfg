<template>
    <Renderer ref="renderer" resize="window">
        <PerspectiveCamera
            ref="camera"
            :lookAt="cameraLookAt"
            :position="cameraPosition"
        />
        <Scene ref="scene" background="#000000">
            <AmbientLight />
        </Scene>
    </Renderer>
</template>

<script>
import { AnimationMixer, Clock } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { FirstPersonControls } from "three/examples/jsm/controls/FirstPersonControls.js";
export default {
    data() {
        return {
            cameraLookAt: { x: 0, y: 0, z: 0 },
            cameraPosition: { x: 5, y: 5, z: 5 },
            animations: [],
            previousTime: 0,
        };
    },
    mounted() {
        this.renderer = this.$refs.renderer;
        this.scene = this.$refs.scene;
        this.camera = this.$refs.camera;

        this.clock = new Clock();
        this.mixer = null;
        this.controls = null;

        this.up = false;
        this.down = false;

        this.init();
    },
    methods: {
        init() {
            this.controls = new FirstPersonControls(
                this.camera.camera,
                this.renderer.canvas
            );
            this.controls.enableDamping = true;
            this.controls.constrainVertical = true;
            this.controls.verticalMax = Math.PI - Math.PI / 4;
            this.controls.verticalMin = Math.PI / 4;
            this.controls.lookSpeed = 0.01;
            const dracoLoader = new DRACOLoader();
            dracoLoader.setDecoderPath("/draco/");

            const gltfLoader = new GLTFLoader();
            gltfLoader.setDRACOLoader(dracoLoader);

            gltfLoader.load("/assets/models/LittlestTokyo.glb", gltf => {
                gltf.scene.scale.set(0.025, 0.025, 0.025);
                this.scene.add(gltf.scene);

                // Animation
                this.mixer = new AnimationMixer(gltf.scene);
                this.mixer.clipAction(gltf.animations[0]).play();
            });

            this.renderer.onBeforeRender(() => {
                this.update();
            });

            document.addEventListener("keydown", this.onDocumentKeyDown, false);
            document.addEventListener("keyup", this.onDocumentKeyUp, false);
        },
        update() {
            const delta = this.clock.getDelta();
            if (this.mixer) {
                this.mixer.update(delta / 2);
            }
            this.controls.update(delta * 10);

            if (this.up) this.camera.camera.position.y += 0.02;
            if (this.down) this.camera.camera.position.y -= 0.02;
        },
        onDocumentKeyDown(event) {
            if (event.which == 81) {
                this.up = true;
            } else if (event.which == 69) {
                this.down = true;
            }
        },
        onDocumentKeyUp(event) {
            if (event.which == 81) {
                this.up = false;
            } else if (event.which == 69) {
                this.down = false;
            }
        },
    },
};
</script>
