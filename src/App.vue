<template>
    <Welcome />
    <About />
    <Scenes />
    <Survey />
    <Final />
</template>

<script>
import Welcome from "./views/Welcome.vue";
import About from "./views/About.vue";
import Scenes from "./views/Scenes.vue";
import Survey from "./views/Survey.vue";
import Final from "./views/Final.vue";

export default {
    name: "App",
    components: {
        Welcome,
        About,
        Scenes,
        Survey,
        Final,
    },
    mounted() {
        this.$store.dispatch("stages/onAppLoad")
    },
};
</script>
