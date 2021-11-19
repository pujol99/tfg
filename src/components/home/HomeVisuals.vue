<template>
    <Renderer ref="renderer" resize="window" antialias shadow :orbit-ctrl="{ autoRotate: true, enableDamping: true, dampingFactor: 0.05 }" pointer>
      <Camera :position="{ x: 0, y: 0, z: 10 }" />
      <Scene background="#000000" >
        <PointLight
          :position="{ x: 0, y: 2, z: 1 }"
          cast-shadow :intensity="0.4"
        />
        <Group :rotation="{ x: -Math.PI / 2, y: 0, z: 0 }">
          <RectAreaLight color="#ff6000" :position="{ x: 0, y: 10, z: 1 }" v-bind="rectLightsProps" />
          <RectAreaLight color="#0060ff" :position="{ x: 10, y: 0, z: 1 }" v-bind="rectLightsProps" />
          <RectAreaLight color="#60ff60" :position="{ x: -10, y: 0, z: 1 }" v-bind="rectLightsProps" />
          <RectAreaLight color="#ffffff" :position="{ x: 0, y: -10, z: 1 }" v-bind="rectLightsProps" />
          <Plane :width="30" :height="30" :rotation="{ x: 0 }" :position="{ z: -3 }" receive-shadow>
            <StandardMaterial :props="{ displacementScale: 0.2, roughness: 0, metalness: 0 }"  >
              <Texture :props="texturesProps" src="./assets/textures/Wood_Tiles_002_basecolor.jpg" />
              <Texture :props="texturesProps" src="./assets/textures/Wood_Tiles_002_height.png" name="displacementMap" />
              <Texture :props="texturesProps" src="./assets/textures/Wood_Tiles_002_normal.jpg" name="normalMap" />
              <Texture :props="texturesProps" src="./assets/textures/Wood_Tiles_002_roughness.jpg" name="roughnessMap" />
              <Texture :props="texturesProps" src="./assets/textures/Wood_Tiles_002_ambientOcclusion.jpg" name="aoMap" />
            </StandardMaterial>
          </Plane>
        </Group>
        <FbxModel src="./assets/models/Samba Dancing.fbx" @load="onLoad" :position="{ y: -3, z: -3 }" :scale="{x:0.02, y:0.02, z:0.02}"/>
      </Scene>
      <EffectComposer>
        <RenderPass />
        <UnrealBloomPass :strength="0.3" />
        <FXAAPass />
      </EffectComposer>
    </Renderer>
</template>

<script>
import { AnimationMixer, Clock, RepeatWrapping } from 'three';
export default {
    data() {
      return {
        texturesProps: {
          repeat: { x: 10, y: 10 },
          wrapS: RepeatWrapping,
          wrapT: RepeatWrapping,
        },
        rectLightsProps: {
          // rotation: { x: -Math.PI / 2 },
          lookAt: { x: 0, y: 0, z: 1 },
          intensity: 5,
          width: 5,
          height: 5,
          helper: true,
        },
    };
  },
    mounted() {
        this.renderer = this.$refs.renderer;
        this.init();
    },
    methods: {
        init() {
            this.renderer.onBeforeRender(this.animate);
        },
        animate() {},
        onLoad(object) {
          this.mixer = new AnimationMixer(object);
          const action = this.mixer.clipAction(object.animations[0]);
          action.play();
          object.traverse(function (child) {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });
          this.clock = new Clock();
          this.renderer.onBeforeRender(this.updateMixer);
        },
        updateMixer() {
          this.mixer.update(this.clock.getDelta());
        },
    },
};
</script>
