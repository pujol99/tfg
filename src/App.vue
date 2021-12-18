<template>
    <Welcome />
    <Quiz />
    <Scenes />
    <Survey />
    <Final />
</template>

<script>
import Welcome from "./views/Welcome.vue";
import Quiz from "./views/Quiz.vue";
import Scenes from "./views/Scenes.vue";
import Survey from "./views/Survey.vue";
import Final from "./views/Final.vue";

export default {
    name: "Game",
    components: {
        Welcome,
        Quiz,
        Scenes,
        Survey,
        Final,
    },
};
</script>
