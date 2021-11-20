<template>
    <Welcome />
    <Scenes />
    <Final />
</template>

<script>
import Welcome from "./views/Welcome.vue";
import Scenes from "./views/Scenes.vue";
import Final from "./views/Final.vue";

export default {
    name: "App",
    components: {
        Welcome,
        Scenes,
        Final,
    },
};
</script>
