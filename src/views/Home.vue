<template>
    <Welcome />
    <Scenes />
    <Final />
</template>

<script>
import Welcome from "./Welcome.vue";
import Scenes from "./Scenes.vue";
import Final from "./Final.vue";

export default {
    name: "Home",
    components: {
        Welcome,
        Scenes,
        Final,
    },
};
</script>
