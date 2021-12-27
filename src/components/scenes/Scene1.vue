<template>
    <Renderer ref="renderer" resize="window" orbitCtrl>
        <PerspectiveCamera
            ref="camera"
            :position="{
                x: 1.2156695694719077,
                y: 0.2993947225727276,
                z: 4.048672963352252,
            }"
        />
        <Scene ref="scene" background="#000000">
            <AmbientLight :intensity="0.2" />
            <PointLight :intensity="0.5" :position="{ x: 0, y: 3, z: 0 }" />

            <Cube ref="cube" name="night" />
            <Loader
                ref="loader"
                :toLoad="{
                    blender: 'scene2',
                    fbx: [
                        {
                            path: 'Standing Arguing',
                            props: {
                                position: { x: -1, y: 0, z: 1 },
                                rotation: { y: Math.PI * 0.5 },
                                scale: { x: 0.01, y: 0.01, z: 0.01 },
                            },
                        },
                        {
                            path: 'Standing Arguing',
                            props: {
                                position: { x: 1, y: 0, z: 1 },
                                rotation: { y: - Math.PI * 0.5 },
                                scale: { x: 0.01, y: 0.01, z: 0.01 },
                            },
                        },
                    ],
                }"
            />
        </Scene>
    </Renderer>
</template>

<script>
import Cube from "../utils/Cube.vue";
import Loader from "../utils/Loader.vue";

export default {
    components: {
        Cube,
        Loader,
    },
    mounted() {
        this.renderer = this.$refs.renderer;
        this.scene = this.$refs.scene;
        this.loader = this.$refs.loader;

        this.cube = this.$refs.cube;

        this.init();
    },
    methods: {
        init() {
            this.cube.init(this.scene);

            this.loader.init(this.scene);

            this.renderer.onBeforeRender(this.update);
        },
        update() {
            this.loader.update();
        },
    },
};
</script>
