<template>
    <div v-if="this.$store.getters.isCurrentScene(this.$options.name)">
        <Message />
    </div>
</template>

<script>
import Message from "../components/home/HomeMessage.vue";
export default {
    name: "Welcome",
    components: {
        Message,
    }
};
</script>
