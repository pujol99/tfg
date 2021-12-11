<template>
    <Welcome />
    <Quiz />
    <Scenes />
    <Final />
</template>

<script>
import Welcome from "./views/Welcome.vue";
import Quiz from "./views/Quiz.vue";
import Scenes from "./views/Scenes.vue";
import Final from "./views/Final.vue";

export default {
    name: "App",
    components: {
        Welcome,
        Quiz,
        Scenes,
        Final,
    },
};
</script>
