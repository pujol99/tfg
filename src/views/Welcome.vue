<template>
    <div v-if="this.$store.getters.isCurrentScene(this.$options.name)">
        <Visuals />
        <Content />
    </div>
</template>

<script>
import Content from "../components/scenes/welcome/Content.vue";
import Visuals from "../components/scenes/welcome/Visuals.vue";
export default {
    name: "Welcome",
    components: {
        Visuals,
        Content,
    },
};
</script>
