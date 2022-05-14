<template>
    <Welcome />
    <About />
    <Bergen />
    <CompareAddictive prefix="Prev" />
    <ComparePasive prefix="Prev" />
    <Info />
    <Scenes />
    <CompareAddictive prefix="Post" />
    <ComparePasive prefix="Post" />
    <Survey />
    <Final />
</template>

<script>
import Welcome from "./views/Welcome.vue";
import About from "./views/About.vue";
import CompareAddictive from "./views/CompareAddictive.vue";
import ComparePasive from "./views/ComparePasive.vue";
import Bergen from "./views/Bergen.vue";
import Info from "./views/Info.vue";
import Scenes from "./views/Scenes.vue";
import Survey from "./views/Survey.vue";
import Final from "./views/Final.vue";

export default {
    name: "Game",
    components: {
        Welcome,
        About,
        CompareAddictive,
        ComparePasive,
        Bergen,
        Info,
        Scenes,
        Survey,
        Final,
    },
    mounted() {
        this.$store.dispatch("stages/onAppLoad");
    },
};
</script>
