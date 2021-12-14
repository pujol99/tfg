<template>
    <Welcome />
    <Quiz />
    <Scenes />
    <Final />
    <Survey />
</template>

<script>
import Welcome from "./views/Welcome.vue";
import Quiz from "./views/Quiz.vue";
import Survey from "./views/Survey.vue";
import Scenes from "./views/Scenes.vue";
import Final from "./views/Final.vue";

export default {
    name: "App",
    components: {
        Welcome,
        Quiz,
        Survey,
        Scenes,
        Final,
    },
};
</script>
