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
            optionsProps: null,
        };
    },
    async created() {
        this.optionsProps = await this.$store.getters.getSceneOptions(
            this.$options.name
        );
    },
};
</script>
