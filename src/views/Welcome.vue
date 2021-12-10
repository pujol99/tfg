<template>
    <div v-if="this.$store.getters.isCurrentScene(this.$options.name)">
        <Visuals />
        <Message />
    </div>
</template>

<script>
import Message from "../components/scenes/welcome/Message.vue";
import Visuals from "../components/scenes/welcome/Visuals.vue";
export default {
    name: "Welcome",
    components: {
        Visuals,
        Message,
    },
};
</script>
