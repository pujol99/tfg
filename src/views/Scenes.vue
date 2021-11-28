<template>
    <Scene name="Scene1">
        <Visuals1 />
    </Scene>
</template>

<script>
import Visuals1 from "../components/scenes/scene1/Visuals1.vue";
import Scene from "./Scene.vue";
export default {
    name: "Scenes",
    components: {
        Scene,
        Visuals1,
    }
};
</script>
