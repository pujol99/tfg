<template>
    <Home />
    <Scenes />
    <Final />
</template>

<script>
import Home from "./views/Home.vue";
import Scenes from "./views/Scenes.vue";
import Final from "./views/Final.vue";

export default {
    name: "App",
    components: {
        Home,
        Scenes,
        Final,
    },
};
</script>
