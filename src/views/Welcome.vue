<template>
    <div v-if="this.$store.getters.isCurrentScene(this.$options.name)">
        <WelcomeMessage />
        <Options :information="optionsProps" />
    </div>
</template>

<script>
import Options from "../components/ui/Options.vue";
import WelcomeMessage from "../components/scenes/welcome/Welcome.vue";
export default {
    name: "Welcome",
    components: {
        WelcomeMessage,
        Options,
    },
    data() {
        return {
            optionsProps: {
                title: "Alex TFG",
                option1: "Continue",
            },
        };
    },
};
</script>
