<template>
    <Renderer ref="renderer" resize="window" >
        <PerspectiveCamera ref="camera" :lookAt="cameraLookAt" :position="cameraPosition" />
        <Scene background="#000000">
            <PointLight :position="{ x: 0, y: 0, z: 3 }" :intensity="0.4" />
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
                src="./assets/models/Samba Dancing.fbx"
                ref="model1"
                @load="onLoad"
                :position="{ y: -3, x: -2, z: 0 }"
                :rotation="{ y: Math.PI * 0.5 }"
                :scale="{ x: 0.02, y: 0.02, z: 0.02 }"
            />
            <FbxModel
                src="./assets/models/Samba Dancing.fbx"
                ref="model2"
                :position="{ y: -3, x: 2, z: 0 }"
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
            cameraPosition: { x: 0, y: 0, z: 5 }
        };
    },
    mounted() {
        this.renderer = this.$refs.renderer;
        this.model1 = this.$refs.model1;
        this.model2 = this.$refs.model2;
        this.camera = this.$refs.camera;

        this.init();
    },
    methods: {
        init() {
            this.renderer.onBeforeRender(this.animate);
        },
        animate() {},
        updateView() {
            gsap.to(this.cameraPosition, {
                duration: 2,
                x: this.model1.position.x,
                y: this.model1.position.y + 3,
                z: this.model1.position.z,
            });
            gsap.to(this.cameraLookAt, {
                duration: 2,
                x: this.model2.position.x,
                y: this.model2.position.y + 3,
                z: this.model2.position.z,
            });
        },
        onLoad(object) {
            this.updateView();
        },
    },
};
</script>
