<template>
    <div v-if="this.$store.getters.isCurrentScene(this.$options.name)">
        <Message />
    </div>
</template>

<script>
import Message from "../components/welcome/WelcomeMessage.vue";
export default {
    name: "Welcome",
    components: {
        Message,
    },
};
</script>
