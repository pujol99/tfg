<template>
    <div></div>
</template>

<script>
import { CubeTextureLoader } from "three";
export default {
    props: ["name"],
    methods: {
        init(scene) {
            console.log(scene);
            const cubeTextureLoader = new CubeTextureLoader();
            scene.scene.background = cubeTextureLoader.load([
                `./assets/textures/${this.name}/px.png`,
                `./assets/textures/${this.name}/nx.png`,
                `./assets/textures/${this.name}/py.png`,
                `./assets/textures/${this.name}/ny.png`,
                `./assets/textures/${this.name}/pz.png`,
                `./assets/textures/${this.name}/nz.png`,
            ]);
        },
    },
};
</script>
