<template>
    <Renderer ref="renderer" resize="window" :orbit-ctrl="{ autoRotate: true }">
        <PerspectiveCamera
            ref="camera"
            :lookAt="cameraLookAt"
            :position="cameraPosition"
        />
        <Scene background="#000000">
            <PointLight
                ref="light"
                :position="{ x: 0, y: 0, z: 3 }"
                :intensity="0.4"
                ><Sphere :radius="0.1" />
            </PointLight>
            <Plane
                :width="30"
                :height="30"
                :rotation="{ x: -Math.PI / 2, y: 0, z: 0 }"
                :position="{ y: -3 }"
            >
                <StandardMaterial
                    :props="{
                        displacementScale: 0.2,
                        roughness: 0,
                        metalness: 0,
                    }"
                >
                    <Texture
                        src="./assets/textures/Wood_Tiles_002_basecolor.jpg"
                    />
                    <Texture
                        src="./assets/textures/Wood_Tiles_002_height.png"
                        name="displacementMap"
                    />
                    <Texture
                        src="./assets/textures/Wood_Tiles_002_normal.jpg"
                        name="normalMap"
                    />
                    <Texture
                        src="./assets/textures/Wood_Tiles_002_roughness.jpg"
                        name="roughnessMap"
                    />
                    <Texture
                        src="./assets/textures/Wood_Tiles_002_ambientOcclusion.jpg"
                        name="aoMap"
                    />
                </StandardMaterial>
            </Plane>
            <FbxModel
                src="./assets/models/Standing Arguing.fbx"
                ref="model1"
                @load="onLoad"
                :position="{ y: -3, x: -1, z: 0 }"
                :rotation="{ y: Math.PI * 0.5 }"
                :scale="{ x: 0.02, y: 0.02, z: 0.02 }"
            />
            <FbxModel
                src="./assets/models/Standing Arguing.fbx"
                ref="model2"
                @load="onLoad2"
                :position="{ y: -3, x: 1, z: 0 }"
                :rotation="{ y: -Math.PI * 0.5 }"
                :scale="{ x: 0.02, y: 0.02, z: 0.02 }"
            />
        </Scene>
    </Renderer>
</template>

<script>
import { AnimationMixer, Clock } from "three";
import gsap from "gsap";
export default {
    name: "Visuals1",
    data() {
        return {
            cameraLookAt: { x: 0, y: 0, z: 0 },
            cameraPosition: { x: 0, y: 0, z: 5 },
            originalCameraPosition: this.cameraPosition,
        };
    },
    mounted() {
        this.renderer = this.$refs.renderer;
        this.model1 = this.$refs.model1;
        this.model2 = this.$refs.model2;
        this.light = this.$refs.light;
        this.camera = this.$refs.camera;

        this.init();
    },
    methods: {
        init() {
            this.renderer.onBeforeRender(this.animate);
        },
        animate() {
        },
        onLoad(object) {
            this.mixer = new AnimationMixer(object);
            const action = this.mixer.clipAction(object.animations[1]);
            action.play();
            this.clock = new Clock();
            this.$refs.renderer.onBeforeRender(this.updateMixer);
        },
        onLoad2(object) {
            this.mixer2 = new AnimationMixer(object);
            const action2 = this.mixer2.clipAction(object.animations[1]);
            action2.play();
            this.clock2 = new Clock();
        },
        updateMixer() {
            this.mixer.update(this.clock.getDelta());
            this.mixer2.update(this.clock2.getDelta());
        },
        moveCamera(from, lookingAt) {
            gsap.to(this.cameraPosition, {
                duration: 2,
                x: from.x,
                y: from.y + 3,
                z: from.z,
            });
            gsap.to(this.cameraLookAt, {
                duration: 2,
                x: lookingAt.x,
                y: lookingAt.y + 3,
                z: lookingAt.z,
            });
        },
    },
};
</script>
