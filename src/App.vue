<template>
    <Welcome />
    <About />
    <Info />
    <Scenes />
    <Survey />
    <Final />
</template>

<script>
import Welcome from "./views/Welcome.vue";
import About from "./views/About.vue";
import Info from "./views/Info.vue";
import Scenes from "./views/Scenes.vue";
import Survey from "./views/Survey.vue";
import Final from "./views/Final.vue";

export default {
    name: "App",
    components: {
        Welcome,
        About,
        Info,
        Scenes,
        Survey,
        Final,
    },
    mounted() {
        this.$store.dispatch("stages/onAppLoad")
    },
};
</script>
