<template>
    <Renderer ref="renderer" resize="window" orbitCtrl>
        <PerspectiveCamera
            ref="camera"
            :lookAt="cameraLookAt"
            :position="cameraPosition"
        />
        <Scene background="#000000">
            <PointLight :position="{ x: 0, y: 0, z: 3 }" :intensity="0.4" />
            <Plane :width="3" :height="3">
                <ShaderMaterial
                    ref="material"
                    :props="{
                        vertexShader: vs,
                        fragmentShader: fs,
                        uniforms: myUniforms,
                    }"
                />
            </Plane>
        </Scene>
    </Renderer>
</template>

<script>
import { DoubleSide, Clock } from "three";
export default {
    data() {
        return {
            cameraLookAt: { x: 0, y: 0, z: 0 },
            cameraPosition: { x: 0, y: 0, z: 5 },
            clock: null,
            myUniforms: {
                uTime: { value: 0.5 },
            },
            vs: `
                varying vec2 vUv;
                uniform float uTime;
                varying float vTime;

                void main()
                {
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

                    vUv = uv;
                    vTime = uTime;
                }
            `,
            fs: `
                varying vec2 vUv;
                varying float vTime;

                void main()
                {  
                    float strength = sin(vTime);
                    gl_FragColor = vec4(vec3(strength), 1.0);
                }
            `,
        };
    },
    mounted() {
        this.renderer = this.$refs.renderer;
        this.camera = this.$refs.camera;
        this.material = this.$refs.material;
        this.clock = new Clock();

        this.init();
    },
    methods: {
        init() {
            this.material.material.side = DoubleSide;
            this.renderer.onBeforeRender(this.animate);
        },
        animate() {
            const elapsedTime = this.clock.getElapsedTime();
            this.myUniforms.uTime.value = elapsedTime;
        },
    },
};
</script>
