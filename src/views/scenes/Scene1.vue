<template>
    <div v-if="this.$store.getters.isCurrentScene(this.$options.name)">
        <Visuals />
        <Options :information="optionsProps" />
    </div>
</template>

<script>
import Visuals from "../../components/scenes/scene1/Visuals.vue";
import Options from "../../components/ui/Options.vue";
export default {
    name: "Scene1",
    components: {
        Visuals,
        Options,
    },
    data() {
        return {
            optionsProps: {
                title: "Your friend is sad because she failed, but you are on the phone",
                option1: "Ignore and stay on the phone",
                option2: "Listen while on the phone",
                option3: "Give her all your attention",
            },
        };
    },
};
</script>
