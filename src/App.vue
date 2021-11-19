<template>
    <Home v-show="homeTurn" />
    <Scenes v-if="scenesTurn" />
    <Final v-show="finalTurn" />
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
    computed: {
        homeTurn: function () {
            const cIndex = this.$store.state.currentSceneIndex;
            return this.$store.state.scenes[cIndex] == "Home"
        },
        scenesTurn: function () {
            const cIndex = this.$store.state.currentSceneIndex;
            return this.$store.state.scenes[cIndex] == "Scene1"
        },
        finalTurn: function () {
            const cIndex = this.$store.state.currentSceneIndex;
            return this.$store.state.scenes[cIndex] == "Final"
        }
    },
};
</script>
