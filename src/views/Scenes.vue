<template>
    <Scene sceneName="Scene1">
        <Scene1 />
    </Scene>
    <Scene sceneName="Scene2">
        <Scene2 />
    </Scene>
</template>

<script>
import Scene1 from "../components/scenes/Scene1.vue";
import Scene2 from "../components/scenes/Scene2.vue";
import Scene from "./Scene.vue";
export default {
    name: "Scenes",
    components: {
        Scene,
        Scene1,
        Scene2,
    }
};
</script>
