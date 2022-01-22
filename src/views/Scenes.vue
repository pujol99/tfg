<template>
    <Scene sceneName="Scene1">
        <Scene1 />
    </Scene>
</template>

<script>
import Scene1 from "../components/scenes/Scene1.vue";
import Scene from "./Scene.vue";
export default {
    name: "Scenes",
    components: {
        Scene,
        Scene1,
    }
};
</script>
