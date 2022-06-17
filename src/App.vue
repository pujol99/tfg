<template>
    <Game/>
</template>

<script>
import Game from "./routes/Game.vue";
export default {
    name: "App",
    components: {
        Game
    },
    mounted() {
        this.$store.dispatch("stages/onAppLoad");
    },
};
</script>
