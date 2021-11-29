<template>
    <Renderer ref="renderer" resize="window" orbitCtrl>
        <PerspectiveCamera
            ref="camera"
            :lookAt="cameraLookAt"
            :position="cameraPosition"
        />
        <Scene background="#000000">
            <PointLight :position="{ x: 0, y: 0, z: 3 }" :intensity="0.4" />
            <Sphere ref="sphere">
                <ShaderMaterial
                    ref="material"
                    :props="{
                        vertexShader: vs,
                        fragmentShader: fs,
                        uniforms: myUniforms,
                    }"
                />
            </Sphere>
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
                #define PI 3.1415926535897932384626433832795
                varying float vTime;

                float random(vec2 st)
                {
                    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
                }

                vec2 rotate(vec2 uv, float rotation, vec2 mid)
                {
                    return vec2(
                    cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
                    cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
                    );
                }

                //  Classic Perlin 2D Noise 
                //  by Stefan Gustavson
                //
                vec4 permute(vec4 x)
                {
                    return mod(((x*34.0)+1.0)*x, 289.0);
                }

                vec2 fade(vec2 t)
                {
                    return t*t*t*(t*(t*6.0-15.0)+10.0);
                }

                float cnoise(vec2 P)
                {
                    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
                    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
                    Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation
                    vec4 ix = Pi.xzxz;
                    vec4 iy = Pi.yyww;
                    vec4 fx = Pf.xzxz;
                    vec4 fy = Pf.yyww;
                    vec4 i = permute(permute(ix) + iy);
                    vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...
                    vec4 gy = abs(gx) - 0.5;
                    vec4 tx = floor(gx + 0.5);
                    gx = gx - tx;
                    vec2 g00 = vec2(gx.x,gy.x);
                    vec2 g10 = vec2(gx.y,gy.y);
                    vec2 g01 = vec2(gx.z,gy.z);
                    vec2 g11 = vec2(gx.w,gy.w);
                    vec4 norm = 1.79284291400159 - 0.85373472095314 * vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
                    g00 *= norm.x;
                    g01 *= norm.y;
                    g10 *= norm.z;
                    g11 *= norm.w;
                    float n00 = dot(g00, vec2(fx.x, fy.x));
                    float n10 = dot(g10, vec2(fx.y, fy.y));
                    float n01 = dot(g01, vec2(fx.z, fy.z));
                    float n11 = dot(g11, vec2(fx.w, fy.w));
                    vec2 fade_xy = fade(Pf.xy);
                    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
                    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
                    return 2.3 * n_xy;
                }

                void main()
                {  
                    float strength = step(0.9, sin(cnoise(vUv * 10.0 * vUv.y) * 4.0 * vTime * 0.3));
                    vec3 black = vec3(0.0);
                    vec3 uvColor = vec3(vUv, 1.0);
                    vec3 mixed = mix(black, uvColor, strength);
                    gl_FragColor = vec4(mixed, 1.0);
                }
            `,
        };
    },
    mounted() {
        this.renderer = this.$refs.renderer;
        this.camera = this.$refs.camera;
        this.material = this.$refs.material;
        this.sphere = this.$refs.sphere;
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
            this.sphere.mesh.rotateY(Math.sin(elapsedTime*0.0001));
        },
    },
};
</script>
