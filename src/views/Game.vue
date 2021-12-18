<template>
    <Welcome />
    <Quiz />
    <Scenes />
    <Survey />
    <Final />
</template>

<script>
import Welcome from "./stages/Welcome.vue";
import Quiz from "./stages/Quiz.vue";
import Scenes from "./stages/Scenes.vue";
import Survey from "./stages/Survey.vue";
import Final from "./stages/Final.vue";

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
